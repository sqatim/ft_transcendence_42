import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/user.entity';
import { AuthModule } from 'src/frameworks/auth/auth.module';
import { JwtStrategy } from 'src/frameworks/auth/jwt/jwt.strategy';
import { UserService } from '../use-cases/user/user.service';
import { DataServicesService } from './data-services.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  providers: [DataServicesService, UserService],
  exports: [DataServicesService],
})
export class DataServicesModule {}
