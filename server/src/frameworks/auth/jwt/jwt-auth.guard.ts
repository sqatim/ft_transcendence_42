import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // handleRequest(err, user, info, context) {
  //   console.log("wa fen a jemi");
  //   return user;
  // }
}
