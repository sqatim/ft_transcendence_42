import {
  Controller,
  Get,
  Res,
  Req,
  UseGuards,
  Post,
  Redirect,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { FortyTwoStrategyAuthGuard } from './auth/42-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get('login')
  @UseGuards(FortyTwoStrategyAuthGuard)
  async fortyTwoStrategyStrategy(@Req() req) {}

  @Get('auth/intra-42/redirect')
  @UseGuards(FortyTwoStrategyAuthGuard)
  redirect(@Req() req, @Res() res) {
    const token = this.authService.login(req.user);
    // console.log(token);
    return res.redirect(`http://localhost:3000/loginSuccess?token=${token}`);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // if(req.user === null)
    // console.log(req.user);
    return req.user;
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
