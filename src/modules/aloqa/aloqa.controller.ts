import { Body, Controller, Post } from '@nestjs/common';
import { AloqaService } from './aloqa.service';
import { CreateMainContactDto } from './interfaces/createDto';

@Controller('aloqa')
export class AloqaController {
    constructor(private aloqaService: AloqaService) { }

    @Post('create')
    CreateAloq(@Body() payload: CreateMainContactDto) {
        return this.aloqaService.create(payload)
    }
}
