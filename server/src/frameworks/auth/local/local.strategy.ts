import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DataService } from 'src/services/data-services/dataService.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  // constructor() {
  constructor(private dataService: DataService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // const user = {};
    const user = await this.dataService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
