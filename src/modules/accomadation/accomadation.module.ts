import { Module } from "@nestjs/common";
import { AccomadationService } from "./accomadation.service";
import { AccomadationController } from "./accomadation.controller";
import { PrismaModule } from "src/core/prisma/prisma.module";
import { PrismaService } from "src/core/prisma/prisma.service";


@Module({
    imports: [PrismaModule],
    providers: [AccomadationService, PrismaService],
    controllers: [AccomadationController]
})
export  class Accomadation {}