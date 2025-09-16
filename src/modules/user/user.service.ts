import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service';
import { UpdateUserDto } from './interfaces/updated';
import * as bcrypt from "bcrypt"
@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) { }

    async getall() {
        return await this.prismaService.user.findMany()
    }

    async update(id: string, payload: UpdateUserDto, avatar?: Express.Multer.File) {
        try {
            let hashed = await bcrypt.hash(payload.password, 10);

            let updateData: any = {
                ...payload,
                password: hashed,
            };

            if (avatar) {
                updateData.avatar = avatar.originalname;
            }

            let data = await this.prismaService.user.update({
                where: { id },
                data: updateData,
            });

            return {
                success: true,
                data,
                message: "Successfully Updated",
            };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

}
