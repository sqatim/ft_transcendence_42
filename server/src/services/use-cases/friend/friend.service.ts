import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friend } from '../../../core/entities/friend.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendsRepository: Repository<Friend>,
  ) {}

  findAll(): Promise<Friend[]> {
    return this.friendsRepository.find();
  }

  // findAllOfUser():  Promise<Friend[]> {
  //     // return this.friendsRepository.find({userId :});
  // }
  findOne(id: string): Promise<Friend> {
    return this.friendsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.friendsRepository.delete(id);
  }

  save(friend: Friend): Promise<any> {
    // console.log(user);
    return this.friendsRepository.save(friend);
  }
}
