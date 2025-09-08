import { Body, Controller, Post } from "@nestjs/common";
import { AccomadationDTO } from "./interfaces/accomadation";
import { AccomadationService } from "./accomadation.service";


@Controller("accomadation")
export class AccomadationController{
    constructor(private accomService: AccomadationService) {}

    @Post("create")
    CreateAcc(@Body() payload: Required<AccomadationDTO>) {
         return this.accomService.create(payload)
    }

}