import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategyStrategy } from './42.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, FortyTwoStrategyStrategy],
})
export class AuthModule {}
