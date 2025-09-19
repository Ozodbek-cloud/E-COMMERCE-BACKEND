import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsString, IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateContactDto {


    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    message: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @ApiProperty()
    @IsUUID()
    @IsNotEmpty()
    accommodationId: string;
}

export class UpdateContactDto {

    @IsString()
    time?: string;

    @IsString()
    phone?: string;

    @IsEmail()
    email?: string;

    @IsString()
    message?: string;

    @IsUUID()
    userId?: string;

    @IsUUID()
    accommodationId?: string;
}
