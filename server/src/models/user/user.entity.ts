import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Friend } from '../friend/friend.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  @Column({ unique: true })
  @OneToMany((type) => Friend, friend => friend.Userid)
  friendListId: number;
}
