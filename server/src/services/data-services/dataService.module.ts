import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/entities/user.entity';
import { AuthModule } from 'src/frameworks/auth/auth.module';
import { PostgresModule } from 'src/frameworks/database/postgres.module';
import { UserModule } from '../use-cases/user/user.module';
import { UserService } from '../use-cases/user/user.service';
import { DataService } from './dataService.service';

@Module({
  // imports: [UserModule, TypeOrmModule.forFeature([User])],
  imports: [UserModule],
  providers: [DataService],
  // providers: [DataService, UserService],
  exports: [DataService],
})
export class DataServiceModule {}
