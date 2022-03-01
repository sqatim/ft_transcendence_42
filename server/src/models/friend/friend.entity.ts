import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  // @JoinColumn({ referencedColumnName: 'friendListId' })
  @ManyToOne((type) => User, (user) => user.friendListId)
  Userid: number;

  // @Column()
}
