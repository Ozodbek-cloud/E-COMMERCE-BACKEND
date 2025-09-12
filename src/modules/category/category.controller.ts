import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './interfaces/category.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('create')
  @ApiOperation({ summary: 'Yangi kategoriya yaratish' })
  @ApiResponse({ status: 201, description: 'Kategoriya muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz ma\'lumot.' })
  createCat(@Body() payload: CategoryDTO) {
    return this.categoryService.create(payload);
  }
}
