import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  const port = Number(process.env.APP_PORT) || 3000;
  await app.listen(port);
  console.log(`application run on port: ${port}`);
}
bootstrap();
