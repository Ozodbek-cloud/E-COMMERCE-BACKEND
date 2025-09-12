import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UnsupportedMediaTypeException, UploadedFile } from '@nestjs/common';
import { AccommadationService } from './accommadation.service';
import { CreateAccommodationDto } from './interfaces/create-accommadation.dto';
import { UpdateAccommadationDto } from './interfaces/update-accommadation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommadationController {
  constructor(private readonly accommadationService: AccommadationService) { }

  @Post('create')
  @ApiOperation({ summary: 'Yangi uy-joy (accommodation) yaratish' })
  @ApiResponse({ status: 201, description: 'Accommodation muvaffaqiyatli yaratildi.' })
  @ApiResponse({ status: 400, description: 'Yaroqsiz maʼlumot.' })
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor('house_img', {
    storage: diskStorage({
      destination: "./uploads/house_images",
      filename: (req, file, cb) => {
        let posterName = uuidv4() + "_" + extname(file.originalname)
        cb(null, posterName)
      }
    }),
    fileFilter: (req, file, callback) => {
      let allowed: string[] = ['image/jpeg', 'image/jpg', 'image/png']
      if (!allowed.includes(file.mimetype)) {
        callback(new UnsupportedMediaTypeException("File tpe must be .jpg | .jpeg | .png "), false)

      }
      callback(null, true)
    }
  }))
  create(@Body() createAccommadation: CreateAccommodationDto, @UploadedFile() house_img: Express.Multer.File) {
    return this.accommadationService.create(createAccommadation, house_img);
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
