import { Injectable } from '@nestjs/common';
import { UpdateAccommadationDto } from './dto/update-accommadation.dto';
import { CreateAccommodationDto } from './dto/create-accommadation.dto';

@Injectable()
export class AccommadationService {
  create(createAccommadationDto: CreateAccommodationDto) {
    return 'This action adds a new accommadation';
  }

  findAll() {
    return `This action returns all accommadation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accommadation`;
  }

  update(id: number, updateAccommadationDto: UpdateAccommadationDto) {
    return `This action updates a #${id} accommadation`;
  }

  remove(id: number) {
    return `This action removes a #${id} accommadation`;
  }
}
