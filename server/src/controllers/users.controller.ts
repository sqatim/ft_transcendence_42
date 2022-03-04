import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Friend } from 'src/core/entities/friend.entity';
import { User } from 'src/core/entities/user.entity';
import { FriendService } from 'src/services/use-cases/friend/friend.service';
import { UserService } from 'src/services/use-cases/user/user.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UserService,
    private friendsService: FriendService,
  ) {}

  @Get()
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.usersService.remove(id);
  }

  @Get(':id/friends')
  findAllFriends() {
    return this.friendsService.findAll();
  }

  @Post(':id/friends/:friendId')
  async findAllFriend(
    @Param('id') userId: number,
    @Param('friendId') friendId: number,
  ) {
    let newUser: User;
    await this.usersService
      .findOneById(userId)
      .then((data) => (newUser = data));
    // return user;
    const friend: Friend = { idFriend: friendId, user: newUser.id };
    return this.friendsService.save(friend);
  }
}
