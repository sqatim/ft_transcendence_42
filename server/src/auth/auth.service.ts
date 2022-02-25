import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  FortyTwoStrategyLogin(req) {
    if (!req.user) {
      return 'No User from 42';
    }
    return {
      message: 'user information from 42',
      user: req.user,
    };
  }
}
