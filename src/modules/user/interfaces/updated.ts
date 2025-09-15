import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Roles } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({})
    @IsOptional()
    @IsString()
    firstName?: string;

    @ApiProperty({})
    @IsOptional()
    @IsString()
    lastName?: string;

    @ApiProperty({})
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({})
    @IsOptional()
    role?: Roles;

    @ApiProperty({})
    @IsOptional()
    @IsString()
    password?: string;

    @ApiProperty({format: "binary"})
    @IsOptional()
    @IsString()
    avatar?: string;
}
