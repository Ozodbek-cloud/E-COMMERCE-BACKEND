import { IsInt, IsString, IsOptional, IsUrl } from 'class-validator';

export class CategoryDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  img?: string;

  @IsOptional()
  @IsString()
  icon_img?: string;
}
