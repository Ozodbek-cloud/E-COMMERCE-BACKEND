import { PartialType } from '@nestjs/swagger';
import { CreateAccommodationDto } from './create-accommadation.dto';


export class UpdateAccommadationDto extends PartialType(CreateAccommodationDto) {}
