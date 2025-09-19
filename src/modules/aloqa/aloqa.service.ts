import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateMainContactDto } from './interfaces/createDto';

@Injectable()
export class AloqaService {
    constructor(private prismaService: PrismaService) {
    }
    async create(payload: CreateMainContactDto) {
        let data = await this.prismaService.mainContact.create({
            data: payload
        })
        return {
            success:true,
            message: "Successfully Created",
            data: data
        }
    }


}
