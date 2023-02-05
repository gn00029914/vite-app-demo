import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fs from 'fs';
import path, { join } from 'path';
// import { fastifyHelmet } from '@fastify/helmet';
import fastifyCsrf from '@fastify/csrf-protection';
import compression from '@fastify/compress';
import { constants } from 'zlib';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      http2: true,
      https: {
        minVersion: 'TLSv1.3',
        key: fs.readFileSync(
          path.join(__dirname, '..', 'https', 'fastify.key'), // 參見 ../https/README.md
        ),
        cert: fs.readFileSync(
          path.join(__dirname, '..', 'https', 'fastify.cert'), // 參見 ../https/README.md
        ),
      }, // 傳輸安全的 key
      logger: true,
    }),
  );
  app.enableCors(); // 開啟server site跨域連線資源請求
  // await app.register(
  //   fastifyHelmet,
  //     {
  //     global: true,
  //     enableCSPNonces: true,
  //     contentSecurityPolicy: {
  //       directives: {
  //         defaultSrc: [
  //           `'self'`,
  //           // 'unpkg.com'
  //         ],
  //         styleSrc: [
  //           `'self'`,
  //           `'unsafe-inline'`,
  //           // 'cdn.jsdelivr.net',
  //           'fonts.googleapis.com', // return @font-face
  //           // 'unpkg.com',
  //         ],
  //         fontSrc: [
  //           `'self'`,
  //           'fonts.gstatic.com', // return .woff2
  //           // 'data:'
  //         ],
  //         imgSrc: [
  //           `'self'`,
  //           // 'data:',
  //           // 'cdn.jsdelivr.net'
  //         ],
  //         scriptSrc: [
  //           `'self'`,
  //           `https: 'unsafe-inline'`, // link webfonts.css return minified @font-face
  //           // `cdn.jsdelivr.net`,
  //           // `'unsafe-eval'`,
  //         ],
  //         // requireTrustedTypesFor: [`'script'`],
  //       },
  //     },
  //   }
  // ); // client site 如有支援 link script 的 CSPNonces 驗證時, server site 再開啟白名單限制連線資源, 這還會影響 browser 的媒體查詢
  await app.register(fastifyCsrf); // 驗證 cookie 跟 session 資料安全的 key
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  }); // https://localhost:3000/
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/vite-app-demo/',
    preCompressed: true, // 檢查哪些檔案預壓縮可獲得瀏覽器支援
    immutable: true,
    maxAge: 31536000,
  }); // https://localhost:3000/vite-app-demo/
  await app.register(compression, {
    brotliOptions: {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: 11,
      },
    },
    encodings: ['br', 'deflate', 'gzip', 'identity'], // Compress replies
    inflateIfDeflated: true,
    onInvalidRequestPayload: (_request, encoding, error) => {
      return {
        statusCode: 400,
        code: 'BAD_REQUEST',
        name: 'Bad Request',
        message:
          'This is not a valid ' +
          encoding +
          ' encoded payload: ' +
          error.message,
      };
    },
    onUnsupportedEncoding: (encoding, _request, reply) => {
      reply.code(406);
      return 'We do not support the ' + encoding + ' encoding.';
    },
    onUnsupportedRequestEncoding: (_request, encoding) => {
      return {
        statusCode: 415,
        code: 'UNSUPPORTED',
        name: 'Unsupported Media Type',
        message: 'We do not support the ' + encoding + ' encoding.',
      };
    },
    requestEncodings: ['br', 'deflate', 'gzip', 'identity'], // Decompress request payloads
    zlibOptions: { level: 9 },
  }); // 需考慮對 server 之間的連線 https://quixdb.github.io/squash-benchmark/ https://tools.paulcalvano.com/compression.php
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
