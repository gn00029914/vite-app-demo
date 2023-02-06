import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fs from 'fs';
import path, { join } from 'path';
import { createHmac, randomBytes } from 'crypto';
import { fastifyHelmet } from '@fastify/helmet';
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
  const seed = Date.now();
  const body = { identity: 'gn00029914', seed };
  const payload = Buffer.from(JSON.stringify(body)).toString('base64');
  const nonce = createHmac('sha512', randomBytes(512))
    .update(payload)
    .digest('hex');
  (global as any).nonce = nonce;
  await app.register(fastifyHelmet, {
    global: true, // 這會影響 browser 的媒體查詢
    // enableCSPNonces: true, // content-security-policy headers 在不同 src 動態生成不同的雜湊值還未支援 Nest.js https://github.com/fastify/fastify-helmet/issues/209
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'unpkg.com'
        ],
        styleSrc: [
          `'self'`,
          "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'fonts.googleapis.com', // return @font-face
          // 'unpkg.com',
          // 'cdn.jsdelivr.net' // 引用外部資源要小心
        ],
        fontSrc: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'fonts.gstatic.com', // return .woff2
          // 'data:' // 瀏覽器擴充功能的引用要小心
        ],
        imgSrc: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'cdn.jsdelivr.net'
          // 'data:'
        ],
        scriptSrc: [
          `'self'`,
          "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // `cdn.jsdelivr.net`,
          // `'unsafe-eval'`,  // deprecated
        ], // link webfonts.css return minified @font-face
        scriptSrcAttr: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          `'unsafe-inline'`,
        ],
        baseUri: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
        ],
        frameAncestors: [`'self'`],
        objectSrc: [
          `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
        ],
        upgradeInsecureRequests: [],
        // requireTrustedTypesFor: [`'script'`],
      },
    },
  });
  await app.register(fastifyCsrf); // 驗證 cookie 跟 session 資料安全的 key
  app.setViewEngine({
    engine: {
      handlebars: await import('handlebars'),
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
  await app.listen(443, '0.0.0.0');
}
bootstrap();
