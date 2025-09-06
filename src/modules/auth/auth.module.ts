import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessTokenModule } from 'src/common/jwt/jwt.access.module';
import { JwtRefreshTokenModule } from 'src/common/jwt/jwt.refresh.module';
import { MailModule } from 'src/common/mail/mail.module'; 
import { RedisModule } from 'src/common/redis/redis.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/core/prisma/prisma.service';
@Module({
  imports: [JwtAccessTokenModule, JwtRefreshTokenModule, MailModule, RedisModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService]
})
export class AuthModule {}
