import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendService } from './friend.service';

@Module({
  providers: [FriendService]
})
export class FriendModule {}
