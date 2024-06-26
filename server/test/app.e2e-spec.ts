import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import request from 'supertest';
import { AppModule } from './../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyView from '@fastify/view';
import handlebars from 'handlebars';
import { join } from 'path';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    app.register(fastifyView, {
      root: join(__dirname, 'views'),
      engine: { handlebars },
    });
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    const result = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(result.statusCode).toEqual(200);
    // expect(result.payload).toEqual('Hello World!');
  });
});
