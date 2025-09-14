import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UnsupportedMediaTypeException, UploadedFiles, } from '@nestjs/common';
import { AccommadationService } from './accommadation.service';
import { CreateAccommodationDto } from './interfaces/create-accommadation.dto';
import { UpdateAccommadationDto } from './interfaces/update-accommadation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiConsumes, } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommadationController {
  constructor(private readonly accommadationService: AccommadationService) { }

  @Post('create')
  @ApiOperation({ summary: 'Yangi uy-joy (accommodation) yaratish' })
  @ApiResponse({ status: 201, description: 'Accommodation muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz maʼlumot.' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'house_img', maxCount: 1 },
        { name: 'img', maxCount: 10 },
        { name: 'documents', maxCount: 5 },
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            if (file.fieldname === 'house_img') cb(null, './uploads/house_images');
            else if (file.fieldname === 'img') cb(null, './uploads/images');
            else if (file.fieldname === 'documents') cb(null, './uploads/documents');
            else cb(null, './uploads/others');
          },
          filename: (req, file, cb) => {
            // originalname bilan saqlash
            cb(null, file.originalname);
          },
        }),
        fileFilter: (req, file, callback) => {
          const allowedImages = ['image/jpeg', 'image/jpg', 'image/png'];
          const allowedDocs = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ];

          if (file.fieldname === 'house_img' || file.fieldname === 'img') {
            if (!allowedImages.includes(file.mimetype)) {
              return callback(
                new UnsupportedMediaTypeException('Faqat .jpg | .jpeg | .png ruxsat etiladi'),
                false,
              );
            }
          }

          if (file.fieldname === 'documents') {
            if (!allowedDocs.includes(file.mimetype)) {
              return callback(
                new UnsupportedMediaTypeException('Faqat .pdf | .doc | .docx ruxsat etiladi'),
                false,
              );
            }
          }

          callback(null, true);
        },
      },
    ),
  )
  create(@Body() createAccommadation: CreateAccommodationDto, @UploadedFiles() files: { house_img?: Express.Multer.File[]; img?: Express.Multer.File[]; documents?: Express.Multer.File[]; },) {
    if (createAccommadation.features) {
      try {
        createAccommadation.features = JSON.parse(createAccommadation.features as any);
      } catch {
        throw new UnsupportedMediaTypeException('features must be valid JSON');
      }
    }

    return this.accommadationService.create(createAccommadation, files);
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
  update(
    @Param('id') id: string,
    @Body() updateAccommadationDto: UpdateAccommadationDto,
  ) {
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
