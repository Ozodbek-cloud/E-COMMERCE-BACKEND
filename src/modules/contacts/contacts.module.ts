import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService, PrismaService],
})
export class ContactsModule {}
