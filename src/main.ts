import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './api/handlers/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PROD == 'prod' ? 3001 : 3001;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Ambiente rodando na porta ${PORT}`));
}
bootstrap();
