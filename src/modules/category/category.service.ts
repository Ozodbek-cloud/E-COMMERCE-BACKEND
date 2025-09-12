import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CategoryDTO } from './interfaces/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async create(payload: CategoryDTO) {
    try {
      let data = await this.prismaService.category.create({
        data: payload,
      });
      return {
        success: true,
        data: data,
        message: 'Successfully created',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async getall() {
    try {
      let data = await this.prismaService.category.findMany({include: {Accommodations: true} })
      return {
        success: true,
        data: data,
        message: 'Successfully Getted',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
