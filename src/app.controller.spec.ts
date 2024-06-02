import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';

describe('AppController', () => {
  let appController: AppController;

  describe('root (Using Nest TestModule)', () => {
    it('should return "Hello World!"', async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [AppService],
      }).compile();

      appController = app.get<AppController>(AppController);

      assert.equal(appController.getHello(), 'Hello World!');
    });
  });

  describe('root (Using Mocks)', () => {
    it('runs with a mocked service component', () => {
      const service = {
        getHello: mock.fn(() => 'Hello World!'),
      };

      const controller = new AppController(service);

      assert.equal(controller.getHello(), 'Hello World!');
      assert.equal(service.getHello.mock.calls.length, 1);
    });
  });
});
