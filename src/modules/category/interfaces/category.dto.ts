import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CategoryDTO {


  @ApiProperty({
    example: 'Uy-joy',
    description: 'Kategoriya nomi',
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'https://example.com/images/house.png',
    description: 'Kategoriya rasmi (ixtiyoriy)',
    format: "binary"
  })
  @IsOptional()
  @IsString()
  img?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/icons/house.svg',
    description: 'Kategoriya ikonkasi (ixtiyoriy)',
    format: "binary"
  })
  @IsOptional()
  @IsString()
  icon_img?: string;
}
