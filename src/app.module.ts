import { Module } from '@nestjs/common';
import { RedisModule } from './common/redis/redis.module';
import { MailModule } from './common/mail/mail.module';
import { PrismaModule } from './core/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { AccommadationModule } from './modules/accommadation/accommadation.module';
import { LikesModule } from './modules/likes/likes.module';



@Module({
  imports: [RedisModule, MailModule, PrismaModule, AuthModule, UserModule, CategoryModule, AccommadationModule, LikesModule],

})
export class AppModule {}
