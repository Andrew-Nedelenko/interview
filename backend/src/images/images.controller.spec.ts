import { Test, TestingModule } from '@nestjs/testing';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

describe('ImagesController', () => {
  let controller: ImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ImagesController],
      providers: [ImagesService, ConfigService],
    }).compile();

    controller = module.get<ImagesController>(ImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
