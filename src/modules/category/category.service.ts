import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { CategoryDTO } from './interfaces/category.dto';

@Injectable()
export class CategoryService {
    constructor(private prismaService: PrismaService) { }

    async create(payload: Required<CategoryDTO>) {
        try {
          let data= await this.prismaService.category.create({
            data: payload
          })
          return {success: true, data: data, message: "successfully created"}
        } catch (error) {

        }
    }
}
