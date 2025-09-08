import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async getall() {
        return await this.prismaService.user.findMany()
    }
}
