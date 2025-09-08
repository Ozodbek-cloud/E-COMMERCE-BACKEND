import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/common/mail/mail.service';
import { RedisService } from 'src/common/redis/redis.service';
import { JwtAccessToken, JWtRefreshToken } from 'src/common/utils/jwt-utils';
import * as bcrypt from "bcrypt"
import { RegisterDto } from './Auth_Dto/register.dto';
import { VerificationDto } from './Auth_Dto/verify.dto';
import { LoginDto } from './Auth_Dto/loginDto';
import { PrismaService } from 'src/core/prisma/prisma.service';
interface JwtPayload {
  id: string,
  role: string
}


@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService, private jwtService: JwtService, private mailerService: MailService, private redisService: RedisService) { }

  private async generateToken(payload: JwtPayload, accessTokenOnly = false) {
    const accessToken = await this.jwtService.signAsync(payload, JwtAccessToken);
    if (accessTokenOnly) {
      return { accessToken };
    }

    const refreshToken = await this.jwtService.signAsync(
      { id: payload.id },
      JWtRefreshToken
    );

    return { accessToken, refreshToken };
  }

  async register(payload: Required<RegisterDto>) {
    try {
      let username = await this.prismaService.user.findFirst({ where: { firstName: payload.firstName } })
      if (username) throw new ConflictException(`${payload.firstName} is already registered!`)
      let email = await this.prismaService.user.findFirst({ where: { email: payload.email } })
      if (email) throw new ConflictException(`${payload.email} is already exists!`)
      console.log("Register payload:", payload);
      let hashed = await bcrypt.hash(payload.password, 10)
      let user = await this.prismaService.user.create({
        data: { ...payload, password: hashed }
      })


      return {
        message: `Successfully Registered!`,
      }
    } catch (error) {
      if (error instanceof BadRequestException ||
        error instanceof ConflictException ||
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException) {
        throw error;
      }
      console.log(error.message)

      throw new BadRequestException(error.message);
    }
  }




  async login(payload: Required<LoginDto>) {
    try {
      let exists = await this.prismaService.user.findFirst({
        where: {
          email: payload.email
        }
      })
      if (!exists) throw new NotFoundException(`this ${payload.email} is not match`)
      let compare = await bcrypt.compare(payload.password, exists.password)
      if (!compare) throw new NotFoundException(`this ${payload.password} is not match`)

      let token = await this.generateToken({ id: exists.id, role: exists.role })
      return { success: true, data: exists, token: token }
    } catch (error) {
      if (error instanceof BadRequestException ||
        error instanceof ConflictException ||
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException) {
        throw error;
      }

      throw new BadRequestException(error.message);
    
  }
}


}




