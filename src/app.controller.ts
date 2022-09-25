import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './api/auth/guards/local-auth.guard';
import { AuthService } from './api/auth/auth.service';
import { JwtAuthGuard, Public } from './api/auth/guards/jwt-auth.guard';

@Controller()
export class AppController {

  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  async validateToken(@Request() req) {
    return req.user;
  }

}
