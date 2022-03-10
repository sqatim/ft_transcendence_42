import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Friend } from 'src/core/entities/friend.entity';
import { User } from 'src/core/entities/user.entity';
import { DataService } from 'src/services/data/data.service';
import { FriendService } from 'src/services/use-cases/friend/friend.service';
import { UserService } from 'src/services/use-cases/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { Observable, of } from 'rxjs';
import {
  saveImageToStorage,
  fullImagePath,
} from 'src/services/helpers/image-storage';

@Controller('users')
export class UsersController {
  constructor(
    private dataService: DataService,
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

  @Get(':id/friends')
  async findAllFriends(@Param('id') id: number) {
    return await this.usersService.findOneById(id).then((user) => {
      return this.dataService.findAllFriendOfUser(user);
    });
  }

  @Get(':id/stats')
  async findStatsOfUser(@Param('id') id: number) {
    return this.dataService.findStatsOfUser(id);
  }

  @Post(':id/friends/:friendId')
  async findAllFriend(
    @Param('id') userId: number,
    @Param('friendId') friendId: number,
  ) {
    this.dataService.addFriend(userId, friendId);
  }

  @Put(':id/avatar')
  @UseInterceptors(FileInterceptor('file', saveImageToStorage))
  uploadAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ): Object {
    if (!file) return of({ error: 'haram walah haram' });
    this.usersService.updateAvatar(id, fullImagePath(file.filename));
    return { succes: 'avatar is updated' };
  }

  @Put(':id/stats/:stat')
  async updateStats(@Param('id') id: number, @Param('stat') stat: string) {
    return this.dataService.updateStats(id, stat); // khasni n9ad hadi
  }

  @Delete(':id')
  removeUser(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
