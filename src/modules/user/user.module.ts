import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
