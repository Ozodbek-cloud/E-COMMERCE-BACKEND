import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Roles } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    firstName?: string;

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty({required:false})
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({required:false})
    @IsOptional()
    @IsString()
    password?: string;

    @ApiProperty({required:false,format: "binary"})
    @IsOptional()
    @IsString()
    avatar?: string;
}
