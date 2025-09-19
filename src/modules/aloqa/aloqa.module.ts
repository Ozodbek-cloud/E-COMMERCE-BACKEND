import { Module } from '@nestjs/common';
import { AloqaService } from './aloqa.service';
import { AloqaController } from './aloqa.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  providers: [AloqaService, PrismaService],
  controllers: [AloqaController]
})
export class AloqaModule {}
