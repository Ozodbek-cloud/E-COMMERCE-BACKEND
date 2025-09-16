import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prismaService: PrismaService) { }

  async create(createContact: CreateContactDto) {
    let data = await this.prismaService.contact.create({
      data: createContact
    })
    return {
      success: true,
      data: data,
      message: "Successfully Created Contacted"
    }
  }

  async findAll() {
    let data = await this.prismaService.contact.findMany()
    return {
      data: data,
      success: true,
      message: " Successfully Getted"
    }
  }

  async update(id: string, updateContact: UpdateContactDto) {
    let data = await this.prismaService.contact.update({
      where: {
        id: id
      },
      data: updateContact
    })
    if (!data) throw new NotFoundException(`${id} is  not found`)

    return {
      data: data,
      success: true,
      message: "Successfully Updated"
    }
  }

  async getId(id: string) {
    let data = await this.prismaService.contact.findFirst({
      where: {
        id: id
      },
      include: {
        accommodation: true
      }
    })
    if (!data) throw new NotFoundException(`${id} is  not found`)

    return {
      data: data,
      success: true,
      message: "Successfully Getted One Contact"
    }

  }

  async remove(id: string) {
    let data = await this.prismaService.contact.delete({
      where: {
        id: id
      }
    })
    if (!data) throw new NotFoundException(`${id} is  not found`)
    return {
      data: data,
      success: true,
      message: "Successfully Delted"
    }

  }
}
