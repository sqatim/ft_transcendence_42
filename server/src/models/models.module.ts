import { Module } from '@nestjs/common';
import { FriendService } from './friend/friend.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Friend } from './friend/friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Friend])],
  providers: [UserService, FriendService],
  exports: [TypeOrmModule],
})
export class ModelsModule {}
