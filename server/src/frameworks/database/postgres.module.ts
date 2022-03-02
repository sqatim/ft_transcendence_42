import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from 'src/core/entities/friend.entity';
import { User } from '../../core/entities/user.entity';
import config from '../../configuration/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  ],
  exports: [TypeOrmModule],
})
export class PostgresModule {}
