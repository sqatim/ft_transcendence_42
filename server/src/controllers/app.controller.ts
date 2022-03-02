import {
  Controller,
  Get,
  Res,
  Req,
  UseGuards,
  Post,
  Redirect,
} from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { FortyTwoStrategyAuthGuard } from '../frameworks/auth/o-auth/42-auth.guard';
import { DataService } from '../services/data-services/dataService.service';
// import { JwtAuthGuard } from '../frameworks/auth/jwt/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getHello(): string {
    return 'Hi';
  }
}
