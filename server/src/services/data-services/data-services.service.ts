import { Injectable } from '@nestjs/common';
import { UserService } from '../use-cases/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/entities/user.entity';

@Injectable()
export class DataServicesService {
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
  async save(newUser: User) {
    const user = await this.usersService.findOne(newUser.username);
    if (!user) this.usersService.save(newUser);
    else console.log('wala a sahbi ma blansh');
  }

  login(user: any) {
    const payload = { login: user.login, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
