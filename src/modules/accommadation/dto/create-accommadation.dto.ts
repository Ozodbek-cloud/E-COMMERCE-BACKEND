import { ListingType } from '@prisma/client';
import { IsString, IsOptional, IsNumber, IsBoolean, IsEnum } from 'class-validator';

export class CreateAccommodationDto {
  @IsString()
  title: string;

  @IsEnum(ListingType)
  listing_type: ListingType;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsNumber()
  build_year?: bigint;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  map_url?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  user_id?: string;

  @IsOptional()
  category_id?: number;
}

export class UpdateAccommodationDto extends CreateAccommodationDto {}
