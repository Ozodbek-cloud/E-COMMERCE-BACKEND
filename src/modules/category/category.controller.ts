import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './interfaces/category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {
    }

    @Post('create')
    CreateCAt(@Body() payload: Required<CategoryDTO>) {
        return this.categoryService.create(payload)
    }

}
