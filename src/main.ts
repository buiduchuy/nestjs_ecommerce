import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Cấu hình folder chứa views
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Cấu hình engine
  app.setViewEngine('hbs');

  await app.listen(3001);
}
bootstrap();
