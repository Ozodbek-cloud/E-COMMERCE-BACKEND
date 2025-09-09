import {
  Controller,
  Post,
  Body,
  UploadedFiles,
  UseInterceptors,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as FormData from 'form-data';
import { AccommodationDto } from './interfaces/accomadation';
import { AccomadationService } from './accomadation.service';

@Controller('accommodations')
export class AccommodationController {
  constructor(private accommodationService: AccomadationService) {}
  private readonly imgbbApiKey = process.env.IMGBB_API_KEY;

  @Post('create')
  @UseInterceptors(FilesInterceptor('house_img', 5)) 
  async create(
    @Body() dto: AccommodationDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    if (!files || files.length === 0) {
      throw new UnsupportedMediaTypeException('At least one image is required');
    }

    const uploadedUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('image', file.buffer.toString('base64'));

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${this.imgbbApiKey}`,
        formData,
        { headers: formData.getHeaders() },
      );

      uploadedUrls.push(res.data.data.url);
    }

    dto.house_img = uploadedUrls;

    return this.accommodationService.create(dto as Required<AccommodationDto>);
  }
}
