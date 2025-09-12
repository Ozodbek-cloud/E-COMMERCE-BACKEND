import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLikeDto } from './interfaces/create-like.dto';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prismaService: PrismaService) {}

  async create(createLike: CreateLikeDto) {
    try {
      let data = await this.prismaService.likes.create({ data: createLike });
      return {
        success: true,
        message: 'Successfully Liked',
        data: data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    try {
      let data = await this.prismaService.likes.findMany({include: {accommodation: {select: {title: true, price: true, house_img:true, user_id: true}}, user: true}});
      return {
        success: true,
        message: 'Successfully Retrieved Likes',
        data: data,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      let data = await this.prismaService.likes.delete({
        where: { id: id },
      });
      return {
        success: true,
        message: 'Successfully Deleted Like',
        data: data,
      };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Like with id ${id} not found`);
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
