import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ServerConfig } from './infraestructure/shared/config/server.config';

const getServerConfig = (app: INestApplication): ServerConfig => {
  const config: ConfigService = app.get(ConfigService);
  return config.get<ServerConfig>('server');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = getServerConfig(app);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Boardlify')
    .setDescription('Boardlify main back-end for web page and movile app.')
    .setVersion('1.0.0')
    .addTag('Home')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/v1', app, document);

  app.useGlobalPipes(new ValidationPipe ({
    transform: true, // Habilitar la conversión automática de tipos
  }));

  await app.listen(config.port);

}
bootstrap();
