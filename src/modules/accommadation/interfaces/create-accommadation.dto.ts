import { ListingType } from '@prisma/client';
import { IsString, IsOptional, IsNumber, IsBoolean, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAccommodationDto {
  @ApiProperty({ example: 'Luxury Apartment', description: 'Uy-joy sarlavhasi' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'RENT', enum: ListingType, description: 'Listing turi (RENT yoki SALE)' })
  @IsEnum(ListingType)
  listing_type: ListingType;

  @ApiPropertyOptional({ example: 'Toshkent sh., Chilonzor', description: 'Manzil' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ example: 500, description: 'Narxi (USD yoki boshqa valyutada)' })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({ example: 10, description: 'Chegirma foizi (%)' })
  @IsOptional()
  @IsNumber()
  discount?: number;

  @ApiPropertyOptional({ example: 2020, description: 'Qurilgan yil' })
  @IsOptional()
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
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({ example: 69.240562, description: 'Longitude (uzunlik)' })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiPropertyOptional({ example: 'Uzbekistan', description: 'Davlat nomi' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ example: true, description: 'Faol yoki faol emasligini ko‘rsatadi' })
  @IsBoolean()
  isActive: boolean;

  @ApiPropertyOptional({ example: 'user-uuid-123', description: 'Foydalanuvchi ID-si (bog‘lanadi)' })
  @IsString()
  user_id: string;

  @ApiPropertyOptional({ example: 2, description: 'Kategoriya ID-si (bog‘lanadi)' })
  @IsNumber()
  category_id: number;
}

