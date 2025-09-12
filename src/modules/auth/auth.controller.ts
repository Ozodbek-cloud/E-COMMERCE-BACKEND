import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './interfaces/register.dto';
import { VerificationDto } from './interfaces/verify.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto } from './interfaces/loginDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService ) {}

    @ApiOperation({ summary: "Foydalanuvchini Register qilish va Emailga code jonatish"})
    @ApiResponse({ status: 201, description: 'Registered' })
    @ApiResponse({ status: 404, description: 'Not Registered' })
    @Post('register')
    Register(@Body() payload: RegisterDto) {
        return this.authService.register(payload)
    }

     
    @ApiOperation({ summary: "Foydalanuvchini Login qilish va Emaildagi code bilan tasdiqlash"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('login')
    Login(@Body() payload: LoginDto) {
        return this.authService.login(payload)
    }    
}
