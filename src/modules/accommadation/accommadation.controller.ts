import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AccommadationService } from './accommadation.service';
import { CreateAccommodationDto } from './interfaces/create-accommadation.dto';
import { UpdateAccommadationDto } from './interfaces/update-accommadation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommadationController {
  constructor(private readonly accommadationService: AccommadationService) {}

  @Post('create')
  @ApiOperation({ summary: 'Yangi uy-joy (accommodation) yaratish' })
  @ApiResponse({ status: 201, description: 'Accommodation muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz maʼlumot.' })
  create(@Body() createAccommadation: CreateAccommodationDto) {
    return this.accommadationService.create(createAccommadation);
  }

  @Get('get_all')
  @ApiOperation({ summary: 'Barcha uy-joylarni olish' })
  @ApiResponse({ status: 200, description: 'Accommodation roʻyxati qaytarildi.' })
  findAll() {
    return this.accommadationService.findAll();
  }

  @Put(':id/update')
  @ApiOperation({ summary: 'Uy-joyni yangilash' })
  @ApiParam({ name: 'id', type: String, description: 'Yangilanadigan accommodation ID-si' })
  @ApiResponse({ status: 200, description: 'Accommodation muvaffaqiyatli yangilandi.' })
  @ApiResponse({ status: 404, description: 'Accommodation topilmadi.' })
  update(@Param('id') id: string, @Body() updateAccommadationDto: UpdateAccommadationDto) {
    return this.accommadationService.update(id, updateAccommadationDto);
  }

  @Delete(':id/delete')
  @ApiOperation({ summary: 'Uy-joyni o‘chirish' })
  @ApiParam({ name: 'id', type: String, description: 'O‘chiriladigan accommodation ID-si' })
  @ApiResponse({ status: 200, description: 'Accommodation muvaffaqiyatli o‘chirildi.' })
  @ApiResponse({ status: 404, description: 'Accommodation topilmadi.' })
  remove(@Param('id') id: string) {
    return this.accommadationService.remove(id);
  }
}
