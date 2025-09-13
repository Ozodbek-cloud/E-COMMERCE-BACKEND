import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CategoryDTO } from './interfaces/category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) { }

  async create(payload: CategoryDTO, img: Express.Multer.File, icon_img: Express.Multer.File) {
    try {
      const img_originalName = img.originalname
      const icon_originalName = icon_img.originalname
      let data = await this.prismaService.category.create({
        data: { ...payload, img: img_originalName, icon_img: icon_originalName },
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
      let data = await this.prismaService.category.findMany({ include: { Accommodations: true } })
      return {
        success: true,
        data: data,
        message: 'Successfully Getted',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async delete_cat(id: number) {
    try {
      let data = await this.prismaService.category.delete({
        where: {
          id: id
        }
      })
      if(!data) {
        throw new NotFoundException(`${id} is not Found`)
      }
      return {
        success: true,
        data: data,
        message: 'Successfully Deleted',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

