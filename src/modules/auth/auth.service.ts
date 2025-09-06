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
    let username = await this.prismaService.user.findFirst({ where: { firstname: payload.firstname } })
    if (username) throw new ConflictException(`${payload.firstname} is already registered!`)
    let email = await this.prismaService.user.findFirst({ where: { email: payload.email } })
    if (email) throw new ConflictException(`${payload.email} is already exists!`)

    let code = Math.floor(100000 + Math.random() * 900000);
    await this.mailerService.sendMail(payload.email, 'Verification', code)

    await this.redisService.set(`register:${payload.email}`, JSON.stringify({ ...payload, code }), 600)

    return {
      message: `Verification Successfully send to ${payload.email}`
    }
  }

  async verify(payload: Required<VerificationDto>) {
    let stored = await this.redisService.get(`register:${payload.email}`)
    if (!stored) throw new BadRequestException("Otp expire or not Found")

    let userData = JSON.parse(stored)
    if (userData.code != payload.code) throw new BadRequestException("Otp invalide")

    await this.redisService.del(`register:${payload.email}`)
    delete userData.code

    let hash = await bcrypt.hash(userData.password, 10)
    let user = await this.prismaService.user.create({ ...userData, password: hash })

    let token = await this.generateToken({ id: user.id, role: user.role })
    return { message: "SuccessFully Registered" }
  }

  async login(payload: Required<LoginDto>) {
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
  }



}



