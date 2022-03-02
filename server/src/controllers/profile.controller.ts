import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { DataService } from '../services/data-services/dataService.service';
import { JwtAuthGuard } from '../frameworks/auth/jwt/jwt-auth.guard';

@Controller('profile')
export class AppController {
  constructor(private readonly dataService: DataService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  getProfile(@Req() req) {
    return req.user;
  }
}
