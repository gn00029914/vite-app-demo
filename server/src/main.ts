import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import compression from '@fastify/compress';
import fs from 'fs';
import path, { join } from 'path';
import { constants } from 'zlib';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      http2: true,
      https: {
        allowHTTP1: true, // fallback support for HTTP1
        key: fs.readFileSync(
          path.join(__dirname, '..', 'https', 'fastify.key'), // 參見 ../https/README.md
        ),
        cert: fs.readFileSync(
          path.join(__dirname, '..', 'https', 'fastify.cert'), // 參見 ../https/README.md
        ),
      },
      logger: true,
    }),
  );
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  }); // https://localhost:3000/
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/vite-app-demo/',
  }); // https://localhost:3000/vite-app-demo/
  await app.register(compression, {
    brotliOptions: {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: 1,
      },
    },
    encodings: ['deflate', 'gzip', 'br'], // Compress replies
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
    requestEncodings: ['br', 'deflate', 'gzip'], // Decompress request payloads
    zlibOptions: { level: 1 },
  }); // https://quixdb.github.io/squash-benchmark/ https://tools.paulcalvano.com/compression.php
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
