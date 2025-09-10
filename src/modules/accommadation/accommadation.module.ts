import { Module } from '@nestjs/common';
import { AccommadationController } from './accommadation.controller';
import { AccommadationService } from './accommadation.service';
import { PrismaModule } from '../../core/prisma/prisma.module';
import { PrismaService } from '../../core/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [AccommadationController],
  providers: [AccommadationService, PrismaService],
})
export class AccommadationModule {}
