import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateAccommadationDto } from './dto/update-accommadation.dto';

@Controller('accommadation')
export class AccommadationController {
  // constructor(private readonly accommadationService: AccommadationService) {}

  // @Post()
  // create(@Body() createAccommadationDto: CreateAccommadationDto) {
  //   return this.accommadationService.create(createAccommadationDto);
  // }

  // @Get()
  // findAll() {
  //   return this.accommadationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.accommadationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccommadationDto: UpdateAccommadationDto) {
  //   return this.accommadationService.update(+id, updateAccommadationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.accommadationService.remove(+id);
  // }
}
