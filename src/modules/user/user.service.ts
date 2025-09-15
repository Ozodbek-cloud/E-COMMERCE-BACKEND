import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateUserDto } from './interfaces/updated';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async getall() {
        return await this.prismaService.user.findMany()
    }
    
    async update(id: string, payload: UpdateUserDto, avatar: Express.Multer.File) {
        try {
            let avatarOrigin = avatar.originalname

            let data = await this.prismaService.user.update({
                where: {
                    id: id
                },
                data: { ...payload, avatar: avatarOrigin }
            })

            return {
                succuss: true,
                data: data,
                message: "Successfully Updated"
            }
        } catch (error) {
            throw new InternalServerErrorException(error.message);

        }
    }
}
