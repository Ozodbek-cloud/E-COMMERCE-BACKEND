import { PartialType } from '@nestjs/swagger';
import { CreateAccommadationDto } from './create-accommadation.dto';

export class UpdateAccommadationDto extends PartialType(CreateAccommadationDto) {}
