import { Module } from "@nestjs/common";
import { AccomadationService } from "./accomadation.service";
import { PrismaModule } from "src/core/prisma/prisma.module";
import { PrismaService } from "src/core/prisma/prisma.service";
import { AccommodationController } from "./accomadation.controller";


@Module({
    imports: [PrismaModule],
    providers: [AccomadationService, PrismaService],
    controllers: [AccommodationController]
})
export  class Accomadation {}