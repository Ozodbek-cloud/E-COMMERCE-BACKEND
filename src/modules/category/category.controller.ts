import { Body, Controller, Delete, Get, Param, Post, UnsupportedMediaTypeException, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './interfaces/category.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  @Post('create')
  @ApiOperation({ summary: 'Yangi kategoriya yaratish' })
  @ApiResponse({ status: 201, description: 'Kategoriya muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz ma\'lumot.' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img', maxCount: 1 },
        { name: 'icon_img', maxCount: 1 }
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            if (file.fieldname === 'img') {
              cb(null, './uploads/images');
            } else if (file.fieldname === 'icon_img') {
              cb(null, './uploads/icon_imges');
            } else {
              cb(new UnsupportedMediaTypeException('Invalid file field'), "null");
            }
          },
          filename: (req, file, cb) => {
            const fileName = file.originalname;
            cb(null, fileName);
          }
        }),
        fileFilter: (req, file, callback) => {
          if (file.fieldname === 'img') {
            const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowed.includes(file.mimetype)) {
              return callback(new UnsupportedMediaTypeException('File type must be .jpg | .jpeg | .png'), false);
            }
          }

          if (file.fieldname === 'icon_img') {
            const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
            if (!allowed.includes(file.mimetype)) {
              return callback(new UnsupportedMediaTypeException('File type must be .jpg | .jpeg | .png'), false);
            }
          }

          callback(null, true);
        }
      }
    )
  )
  create(@Body() createCourseDto: CategoryDTO, @UploadedFiles() files: { img?: Express.Multer.File[]; icon_img?: Express.Multer.File[] }) {
    const imgFile = files.img?.[0];
    const icon_imgFile = files.icon_img?.[0];

    if (!imgFile || !icon_imgFile) {
      throw new UnsupportedMediaTypeException('Both banner and introVideo files are required');
    }

    return this.categoryService.create(createCourseDto, imgFile, icon_imgFile);
  }

  @Get('all')
  @ApiOperation({ summary: 'Categorilar' })
  @ApiResponse({ status: 200, description: 'Kategoriya muvaffaqiyatli oqildi' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz ma\'lumot.' })
  GetCat() {
    return this.categoryService.getall();
  }
  @Delete(':id/delete')
  @ApiOperation({ summary: 'Delete Categorilar' })
  @ApiResponse({ status: 200, description: 'Kategoriya muvaffaqiyatli ochirildi' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz ma\'lumot.' })
  DeleteCat(@Param('id') id : number) {
    return this.categoryService.delete_cat(id);
  }
}
