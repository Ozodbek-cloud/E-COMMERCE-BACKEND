import { IsString, IsOptional, IsBoolean, IsNumber, IsArray, IsUUID, IsUrl, IsDateString } from 'class-validator';

export class AccomadationDTO {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsOptional()
  img: any; 

  @IsBoolean()
  isActive: boolean;

  @IsBoolean()
  listing_type: boolean;

  @IsString()
  title: string;

  @IsString()
  address: string;

  @IsNumber()
  features: number;

  @IsNumber()
  price: number;

  @IsNumber()
  dissccount: number;

  @IsNumber()
  build_year: number;

  @IsString()
  description: string;

  @IsOptional()
  documents: any; // JSON

  @IsUrl()
  map_url: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  country: string;

  @IsNumber()
  extra_features: number;

  @IsString()
  userId: string;

  @IsNumber()
  categoryId: number;

  @IsOptional()
  @IsString()
  propertyId?: string;

  @IsOptional()
  @IsString()
  parentProperty?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsNumber()
  rooms?: number;

  @IsOptional()
  @IsNumber()
  beds?: number;

  @IsOptional()
  @IsNumber()
  baths?: number;

  @IsOptional()
  @IsNumber()
  garages?: number;

  @IsOptional()
  @IsNumber()
  homeAreaSqft?: number;

  @IsOptional()
  @IsString()
  lotDimensions?: string;

  @IsOptional()
  @IsNumber()
  lotAreaSqft?: number;

  @IsOptional()
  @IsString()
  pricePrefix?: string;

  @IsOptional()
  @IsString()
  priceSuffix?: string;

  @IsOptional()
  @IsString()
  priceCustom?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  friendlyAddress?: string;

  @IsOptional()
  @IsString()
  featuredImage?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gallery?: string[];

  @IsOptional()
  @IsString()
  attachment?: string;

  @IsOptional()
  @IsString()
  videoLink?: string;

  @IsOptional()
  @IsString()
  virtualTour?: string;

  @IsOptional()
  @IsBoolean()
  barbeque?: boolean;

  @IsOptional()
  @IsBoolean()
  microwave?: boolean;

  @IsOptional()
  @IsBoolean()
  fireplace?: boolean;

  @IsOptional()
  @IsBoolean()
  parking?: boolean;

  @IsOptional()
  @IsBoolean()
  dryer?: boolean;

  @IsOptional()
  @IsBoolean()
  outdoorShower?: boolean;

  @IsOptional()
  @IsBoolean()
  petsAllowed?: boolean;

  @IsOptional()
  @IsBoolean()
  doorman?: boolean;

  @IsOptional()
  @IsString()
  energyClass?: string;

  @IsOptional()
  @IsNumber()
  energyIndex?: number;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
