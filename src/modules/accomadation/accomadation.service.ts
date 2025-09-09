import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/core/prisma/prisma.service";
import { AccommodationDto } from "./interfaces/accomadation";

@Injectable()
export class AccomadationService {
    constructor(private prismaService: PrismaService) { }

    async create(payload: Required<AccommodationDto>) {
        try {

            const data = await this.prismaService.accomadation.create({
                data: {
                    title: payload.title,
                    location: payload.location,
                    featured: payload.featured,
                    listing_type: payload.listing_type,
                    features: payload.features,
                    discount: payload.discount,
                    total_price: payload.total_price,
                    userId: payload.userId,
                    categoryId: payload.categoryId,
                    house_img: payload.house_img, 
                },
            });

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

    async getAll() {
        try {
            let data = await this.prismaService.accomadation.findMany()
            return { success: true, message: "Successfully Getted", data: data }
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