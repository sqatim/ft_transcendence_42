import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-42';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';

config();
@Injectable()
export class FortyTwoStrategyStrategy extends PassportStrategy(Strategy) {
  constructor() {
    //   constructor(private authService: AuthService) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URI,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    cb: VerifyCallback,
  ): Promise<any> {
    // console.log(profile);
    // console.log('acces token' + accessToken);
    // console.log('refresh token' + refreshToken);
    return { user: 'salam' };
    // return await this.authService.validateUser(profile);
  }
}
