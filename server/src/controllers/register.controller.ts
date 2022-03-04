import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/core/dtos/user.dto';
import { User } from 'src/core/entities/user.entity';
import { DataServicesService } from 'src/services/data-services/data-services.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly dataService: DataServicesService) {}

  @Post()
  async register(@Req() req, @Body() createCatDto: CreateUserDto) {
    // const user: User = {
    //   id: 1,
    //   username: 'usernane',
    //   avatar: 'avatar',
    //   password: 'password',
    //   friend: [],
    // };
    const user: User = { ...createCatDto, friend: [] };
    console.log(user);
    this.dataService.save(user);
    return createCatDto;
  }
}
