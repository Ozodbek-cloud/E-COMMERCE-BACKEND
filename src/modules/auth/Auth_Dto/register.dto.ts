import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {
  @ApiProperty({
    example: 'golden_user123',
    description: 'Foydalanuvchi nomi',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'golden_user123',
    description: 'Foydalanuvchi familyisi',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: Roles.User, enum: Roles, description: "Foydalanuvchi roli" })
  @IsEnum(Roles)
  @IsNotEmpty()
  role: Roles;
  
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
