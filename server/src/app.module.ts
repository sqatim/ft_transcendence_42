import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import config from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),AuthModule, ModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
