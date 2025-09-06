import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterDto {
  @ApiProperty({
    example: 'golden_user123',
    description: 'Foydalanuvchi nomi',
  })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    example: 'golden_user123',
    description: 'Foydalanuvchi familyisi',
  })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    example: 'example.png',
    description: 'Foydalanuvchi Avatari',
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;


  @ApiProperty({
    example: 'user@example.com',
    description: 'Foydalanuvchi email manzili',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'SecureP@ssw0rd',
    description: 'Foydalanuvchi paroli (kamida 8 belgidan iborat)',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
