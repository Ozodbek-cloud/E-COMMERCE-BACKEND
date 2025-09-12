import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Houzing Platform')
    .setDescription('Houzing UI')
    .setVersion('1.0') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api_houz1ng_swagger', app, document);
}