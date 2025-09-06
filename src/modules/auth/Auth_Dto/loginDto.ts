import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    @ApiProperty({example: 'abuhoshim99@gmail.com'})
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({example: 'benazir99'})
    @IsString()
    @IsNotEmpty()
    password: string
}