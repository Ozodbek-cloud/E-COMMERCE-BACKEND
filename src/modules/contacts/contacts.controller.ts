import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('create')
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get('all')
  findAll() {
    return this.contactsService.findAll();
  }

  @Patch(':id/update')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Get(':id/one')
  get(@Param('id') id: string) {
    return this.contactsService.getId(id);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
