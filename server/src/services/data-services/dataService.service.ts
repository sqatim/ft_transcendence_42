import { Injectable } from '@nestjs/common';
import { UserService } from '../../services/use-cases/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DataService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: any) {
    const payload = { login: user.login, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
