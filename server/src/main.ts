import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import compression from '@fastify/compress';
import fs from 'fs';
import path from 'path';

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
    }),
  );
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.listen(3000);
}
bootstrap();
