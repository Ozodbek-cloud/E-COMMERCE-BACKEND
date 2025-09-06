import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './Auth_Dto/register.dto';
import { VerificationDto } from './Auth_Dto/verify.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { LoginDto } from './Auth_Dto/loginDto';

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

    @ApiOperation({ summary: "Foydalanuvchini Emaildagi code bilan tasdiqlash"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('verify')
    Verify(@Body() payload: VerificationDto) {
        return this.authService.verify(payload)
    }
     
    @ApiOperation({ summary: "Foydalanuvchini Login qilish va Emaildagi code bilan tasdiqlash"})
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 404, description: 'UnSuccess' })
    @Post('login')
    Login(@Body() payload: LoginDto) {
        return this.authService.login(payload)
    }    
}
