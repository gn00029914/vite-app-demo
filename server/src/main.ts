import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { join } from 'path';
import Handlebars from 'handlebars';
import fastifyCsrf from '@fastify/csrf-protection';
import { createHmac, randomBytes } from 'crypto';
import { fastifyHelmet } from '@fastify/helmet';
// import proxy from '@fastify/http-proxy';
import { PrismaClient } from '@prisma/client';
import compression from '@fastify/compress';
import { constants } from 'zlib';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      http2: true,
      https: {
        minVersion: 'TLSv1.3',
        key: readFileSync(
          join(__dirname, '..', 'https', 'fastify.key'), // 參見 ../https/README.md
        ),
        cert: readFileSync(
          join(__dirname, '..', 'https', 'fastify.cert'), // 參見 ../https/README.md
        ),
      }, // 傳輸安全的 key
      logger: true,
    }),
  );
  app.setViewEngine({
    engine: {
      handlebars: Handlebars,
    },
    templates: join(__dirname, '..', 'views'),
    defaultContext: {},
  }); // https://localhost:443/
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/vite-app-demo/',
    preCompressed: true, // 優先 ( br -> gzip -> original ) 將含有預壓縮的檔案透過對應的 encoding headers 傳送, 且瀏覽器解壓縮後按照 content-type 可正確解碼
    immutable: true,
    maxAge: 31536000,
  }); // https://localhost:443/vite-app-demo/
  await app.register(fastifyCsrf); // 驗證 cookie 跟 session 資料安全的 key 視驗證資料多少向後調順序
  (global as any).nonce = createHmac('sha256', randomBytes(256)).digest(
    'base64',
  ); // 將 nonce 存到全域變數每次重啟server時更新
  await app.register(fastifyHelmet, {
    // 目前藉助的 fastifyHelmet 是 fastify plugin 尚未支援具有業務邏輯隔離特性的 Nest.js 框架 https://github.com/fastify/fastify-helmet/issues/209
    global: true, // 開發時要先暫時關閉CSP, 因為前端 primevue UI library 尚未完全轉換為支援型別檢查的 TypeScript
    enableCSPNonces: false, // 每次頁面重整都會動態更新 nonce 的功能還缺 Nest.js plugin 支援
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: [
          `'self'`,
          // 'data:',
          // "'nonce-" + (global as any).nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'unpkg.com',
          // 'cdn.jsdelivr.net',
          'air-quality-api.open-meteo.com/v1/air-quality',
          // 'primefaces.org/cdn/primevue/images/product/',
          'api.nlsc.gov.tw/other/TownVillagePointQuery/',
        ],
        styleSrc: [
          `'self'`,
          "'nonce-" + (global as any).nonce + "'",
          // 'esm.sh', // 支援從 HTTP/2 回傳 HTTP 301, 然後重新導向至 HTTP/3 再回傳(稍慢)
          // `'unsafe-inline'`,
          // 'fonts.googleapis.com', // return @font-face
          // 'unpkg.com',
          // 'cdn.jsdelivr.net', // (較快)支援先從 HTTP/2 或直接連 HTTP/3 輪詢, 建議完整專案部署後再由 CDN 重新導向
          `'unsafe-hashes'`, // (CSP3) primevue 的 presets https://github.com/primefaces/primevue-tailwind/issues/66 https://www.w3.org/TR/CSP3/#unsafe-hashes-usage
          // ↓藉由 primevue 生成↓
          // "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='",
          // "'sha256-sbYZV251k33aGfnLMZtfDmTnfrINBs+qiS4fhEjVGeQ='",
          // "'sha256-hxFrAADLXoprKKt0iWBhbeKAu0KVrVQsW4vRAf4hpmU='",
          // "'sha256-UoUTlj7u4bMFlfUR8WtfypFTmwYOxnqOsU7wKICCbyM='",
          "'sha256-hxFrAADLXoprKKt0iWBhbeKAu0KVrVQsW4vRAf4hpmU='",
          // "'sha256-TJTxYFRSVDihcU3K7XDF4MEZc+epIm659c1VCxl13G0='",
          // "'sha256-fI4n6MflQImBULJAJb5wNHA9Dv2oAKihCDDbmPDuhNo='",
          // "'sha256-HUdXCpbnxeTgI9CG+KfxpQTcadF/S1KQIT/6ws+pNSM='",
          // "'sha256-o0F8kJ2e0ezyPfB+Q0BPF4+vUlswT88EusFC3vGgMm0='",
          // "'sha256-fzYhHwtyrW5UB3U4af2w7KmZeiqiAuIt1du8KgGnCSE='",
          // "'sha256-6RQXafjrj4H7emka4gtUsSrPc2lS1Ct/HF9enXbn0vk='",
        ],
        fontSrc: [
          `'self'`,
          // "'nonce-" + (global as any).nonce + "'",
          // `'unsafe-hashes'`, // (CSP3) @font-face 的載入方式(已盡量迴避) https://www.w3.org/TR/CSP3/#unsafe-hashes-usage
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
          'data:', // tailwindcss inline svg
          'primefaces.org/cdn/primevue/images/product/',
        ],
        scriptSrc: [
          `'self'`,
          "'nonce-" + (global as any).nonce + "'",
          // 'esm.sh',
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
          // 'cdn.jsdelivr.net',
          // `'unsafe-eval'`,  // deprecated
          // "'sha256-orpHRvbW1vTRrLBpveohOQYg09DbCzFT80EkYyegr1M='", // primevue
        ], // link webfonts.css return minified @font-face
        scriptSrcAttr: [
          // `'self'`,
          // "'nonce-" + (global as any).nonce + "'",
          // `'unsafe-hashes'`, // (CSP3) @font-face 的載入方式(已盡量迴避), Vue Router 的 javascript: navigation https://www.w3.org/TR/CSP3/#unsafe-hashes-usage
          // `'unsafe-inline'`,
        ],
        baseUri: [
          // `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
        ],
        // frameAncestors: [`'self'`],
        objectSrc: [
          // `'self'`,
          // "'nonce-" + nonce + "'",
          // `'unsafe-hashes'`,
          // `'unsafe-inline'`,
        ],
        upgradeInsecureRequests: [],
        // requireTrustedTypesFor: [`'script'`],
      },
    },
  });
  app.enableCors(); // 開啟 server site 跨域連線資源請求
  // app.register(proxy, {
  //   upstream: 'https://air-quality-api.open-meteo.com',
  //   prefix: '/aqi',
  //   rewritePrefix: '/v1/air-quality',
  //   http2: false,
  //   httpMethods: ['GET'],
  // });
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  await app.register(compression, {
    brotliOptions: {
      params: {
        [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
        [constants.BROTLI_PARAM_LGWIN]: constants.BROTLI_MAX_WINDOW_BITS,
        [constants.BROTLI_PARAM_LGBLOCK]: constants.BROTLI_MAX_INPUT_BLOCK_BITS,
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,
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
    zlibOptions: {
      windowBits: constants.Z_MAX_WINDOWBITS,
      level: constants.Z_BEST_COMPRESSION,
      memLevel: constants.Z_MAX_MEMLEVEL,
      strategy: constants.Z_FIXED,
    },
  }); // 需考慮對 server 之間的連線 https://quixdb.github.io/squash-benchmark/ https://tools.paulcalvano.com/compression.php
  await app.listen(443, '0.0.0.0');
}
bootstrap();
