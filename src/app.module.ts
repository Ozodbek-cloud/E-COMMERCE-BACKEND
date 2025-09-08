import { Module } from '@nestjs/common';
import { RedisModule } from './common/redis/redis.module';
import { MailModule } from './common/mail/mail.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { Accomadation } from './modules/accomadation/accomadation.module';
import { CategoryModule } from './modules/category/category.module';



@Module({
  imports: [RedisModule, MailModule, PrismaModule, AuthModule, UserModule, Accomadation, CategoryModule],

})
export class AppModule {}
