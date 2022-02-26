import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  login(user: any) {
    // console.log('===> ' + user.login);
    const payload = { login: user.login, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
