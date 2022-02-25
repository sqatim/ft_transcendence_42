import { Controller, Get, Res, Req, UseGuards, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { FortyTwoStrategyAuthGuard } from './auth/42-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('login')
  @UseGuards(FortyTwoStrategyAuthGuard)
  fortyTwoStrategyStrategy(@Req() req, @Res() res) {
    // async fortyTwoStrategyStrategy(@Req() req) {
    console.log('------------------------------------------------------------');
    return 'samir';
  }
  @Get('auth/intra-42/redirect')
  @UseGuards(FortyTwoStrategyAuthGuard)
  redirect(@Req() req): any {
    // console.log('washayb');
    return req.user;
    // return 'dsadasdasdsaadsdsadsaadsads';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
