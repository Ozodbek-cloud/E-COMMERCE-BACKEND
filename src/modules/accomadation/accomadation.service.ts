import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/core/prisma/prisma.service";
import { AccomadationDTO } from "./interfaces/accomadation";

@Injectable()
export class AccomadationService {
    constructor(private prismaService: PrismaService) { }

    async create(payload: Required<AccomadationDTO>) {
        try {
            let data = await this.prismaService.accomadation.create({
                data: payload
            })
            return {
                success: true,
                data: data,
                message: "Successfully created!"
            }
        } catch (error) {
            if (error instanceof BadRequestException ||
                error instanceof ConflictException ||
                error instanceof NotFoundException ||
                error instanceof UnauthorizedException) {
                throw error;
            }
            console.log(error.message)

            throw new BadRequestException(error.message);
        }
    }


}