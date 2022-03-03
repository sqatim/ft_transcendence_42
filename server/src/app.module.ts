import { Module } from '@nestjs/common';
import { UserModule } from './services/use-cases/user/user.module';
import { FriendModule } from './services/use-cases/friend/friend.module';
import { DataServicesModule } from './services/data-services/data-services.module';
import { PostgresModule } from './frameworks/database/postgres/postgres.module';
import { AuthModule } from './frameworks/auth/auth.module';
import { AppController } from './controllers/app.controller';
import { LoginController } from './controllers/login.controller';
import { ProfileController } from './controllers/profile.controller';
import { RegisterController } from './controllers/register.controller';

@Module({
  imports: [
    UserModule,
    FriendModule,
    DataServicesModule,
    PostgresModule,
    AuthModule,
  ],
  controllers: [AppController, LoginController, ProfileController, RegisterController],
})
export class AppModule {}
