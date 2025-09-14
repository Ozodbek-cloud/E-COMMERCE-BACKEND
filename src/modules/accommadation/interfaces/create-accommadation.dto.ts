import { ListingType } from '@prisma/client';
import { IsString, IsOptional, IsNumber, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAccommodationDto {
  @ApiProperty({ example: 'Luxury Apartment', description: 'Uy-joy sarlavhasi' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Idk', description: 'Message' })
  @IsString()
  @IsOptional()
  message?: string;

  @ApiPropertyOptional({ example: 'example.png', description: 'Img Of House', format: "binary" })
  @IsOptional()
  @IsString()
  house_img?: string;

  @ApiProperty({ example: 'RENT', enum: ListingType, description: 'Listing turi (RENT yoki SALE)' })
  @IsEnum(ListingType)
  listing_type: ListingType;

  @ApiPropertyOptional({ example: 'Toshkent sh., Chilonzor', description: 'Manzil' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 500, description: 'Narxi (USD yoki boshqa valyutada)' })
  @Type(() => Number)
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ example: 10, description: 'Chegirma foizi (%)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  discount?: number;

  @ApiPropertyOptional({ example: 2020, description: 'Qurilgan yil' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  build_year?: number;

  @ApiPropertyOptional({ example: 'Shinam va zamonaviy kvartira.', description: 'Uy-joy tavsifi' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ example: 'https://maps.google.com/xyz', description: 'Xarita URL' })
  @IsOptional()
  @IsString()
  map_url?: string;

  @ApiPropertyOptional({ example: 41.311081, description: 'Latitude (kenglik)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ example: 69.240562, description: 'Longitude (uzunlik)' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ example: 'Uzbekistan', description: 'Davlat nomi' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ example: true, description: 'Faol yoki faol emasligini ko‘rsatadi' })
  @Type(() => Boolean)
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ example: 'user-uuid-123', description: 'Foydalanuvchi ID-si (bog‘lanadi)' })
  @IsString()
  user_id: string;

  @ApiProperty({ example: 2, description: 'Kategoriya ID-si (bog‘lanadi)' })
  @Type(() => Number)
  @IsNumber()
  category_id: number;


  @ApiPropertyOptional({
    type: 'string',
    format: 'binary',
    isArray: true,
    description: 'Multiple Images of House',
  })
  @IsOptional()
  img?: any;


  @ApiPropertyOptional({ example: { beds: 3, size: '120m2', parking: 1, baths: 3 }, description: 'Qo‘shimcha xususiyatlar (features) JSON formatda' })
  @IsOptional()
  features?: any;


  @ApiPropertyOptional({
    type: 'string',
    format: 'binary',
    description: 'Multiple Documents of House',
  })
  @IsOptional()
  documents?: any;


}
