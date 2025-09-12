import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { UpdateAccommadationDto } from './interfaces/update-accommadation.dto';
import { CreateAccommodationDto } from './interfaces/create-accommadation.dto';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class AccommadationService {
  constructor(private prismaService: PrismaService) {}

  async create(createAccommadation: CreateAccommodationDto, house_img: Express.Multer.File) {
    try {
      const house_img_original = house_img.originalname
      let data = await this.prismaService.accommodation.create({
        data: {...createAccommadation, house_img: house_img_original},
      });
      return {
        success: true,
        message: 'Successfully Created Accommodation',
        data: data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      let data = await this.prismaService.accommodation.findMany({include: {user: true, category:true}});
      return {
        success: true,
        message: 'Successfully Got All Accommodations',
        data: data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, updateAccommadation: UpdateAccommadationDto) {
    try {
      let data = await this.prismaService.accommodation.update({
        where: {
          id: id,
        },
        data: updateAccommadation,
      });
      return {
        success: true,
        message: 'Successfully Updated',
        data: data,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`${id} is not found`);
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      let data = await this.prismaService.accommodation.delete({
        where: {
          id: id,
        },
      });
      if (!data) {
        throw new NotFoundException(`${id} is not found`);
      }
      return {
        success: true,
        message: 'Successfully deleted accommodation',
        data: data,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`${id} is not found`);
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
