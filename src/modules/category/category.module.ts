import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService]
})
export class CategoryModule {}
