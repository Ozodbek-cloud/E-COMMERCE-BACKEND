import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Listing_Type } from '@prisma/client';

export class AccommodationDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  house_img?: string[];

  @IsBoolean()
  @Transform(({ value }) => value === 'true' || value === true)
  featured: boolean;
  
  @IsEnum(Listing_Type)
  listing_type: Listing_Type;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsOptional()
  features: any;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  discount: number;

  @IsNumber()
  @Transform(({ value }) => Number(value))
  total_price: number;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  categoryId?: number;
}
