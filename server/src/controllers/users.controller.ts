import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Friend } from 'src/core/entities/friend.entity';
import { FriendService } from 'src/services/use-cases/friend/friend.service';
import { UserService } from 'src/services/use-cases/user/user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService, private friendsService: FriendService) {}

  @Get()
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Get(':id/friends')
  findAllFriends() {
    return 'sahbi ussef lwa3ar';
  }

  @Post(':id/friends/:friendId')
  findAllFriend(@Param('id') userId: string, @Param('friendId') friendId: string) {
    // const friend : Friend = {}
    // this.friendsService.
  }
}
