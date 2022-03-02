import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategyStrategy } from './o-auth/42.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/constants';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LocalStrategy } from './local/local.strategy';
import { DataService } from 'src/services/data-services/dataService.service';
import { UserService } from 'src/services/use-cases/user/user.service';
import { PostgresModule } from '../database/postgres.module';
import { UserModule } from 'src/services/use-cases/user/user.module';

@Module({
  imports: [
    UserModule,
    // PostgresModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  providers: [
    FortyTwoStrategyStrategy,
    JwtStrategy,
    LocalStrategy,
    DataService,
  ],
})
export class AuthModule {}
