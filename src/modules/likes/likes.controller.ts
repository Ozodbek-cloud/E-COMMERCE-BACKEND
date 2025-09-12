import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './interfaces/create-like.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post('create')
  @ApiOperation({ summary: 'Yangi like yaratish' })
  @ApiResponse({ status: 201, description: 'Like muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz ma\'lumot.' })
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get('getAll')
  @ApiOperation({ summary: 'Barcha like-larni olish' })
  @ApiResponse({ status: 200, description: 'Like-lar ro‘yxati qaytarildi.' })
  findAll() {
    return this.likesService.findAll();
  }

  @Delete(':id/delete')
  @ApiOperation({ summary: 'Like o‘chirish' })
  @ApiParam({ name: 'id', type: Number, description: 'O‘chiriladigan like ID-si' })
  @ApiResponse({ status: 200, description: 'Like muvaffaqiyatli o‘chirildi.' })
  @ApiResponse({ status: 404, description: 'Like topilmadi.' })
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
