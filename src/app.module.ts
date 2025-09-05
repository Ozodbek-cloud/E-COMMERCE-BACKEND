import { Module } from '@nestjs/common';
import { RedisModule } from './common/redis/redis.module';
import { MailModule } from './common/mail/mail.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [RedisModule, MailModule, PrismaModule],
 
})
export class AppModule {}
