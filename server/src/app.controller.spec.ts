import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PrismaService', () => {
  let appService: AppService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    appService = module.get<AppService>(AppService);
    prismaService = module.get<PrismaService>(PrismaService);
  });
  it('should be defined', () => {
    expect(appService).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
const mockPrismaService = {
  user: {
    findMany: jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe' }]),
  },
};
