import { IsBoolean, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLikeDto {
  @ApiProperty({
    example: true,
    description: 'Like qiymati (true = yoqtirish, false = yoqtirmaslik)',
  })
  @IsBoolean()
  like: boolean;

  @ApiProperty({
    example: 'user-uuid-123',
    description: 'Like qilgan foydalanuvchi ID-si',
  })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'accommodation-uuid-456',
    description: 'Like qilingan uy-joy (accommodation) ID-si',
  })
  @IsString()
  accommodationId: string;
}
