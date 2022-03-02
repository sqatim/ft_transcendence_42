import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Friend {
  @PrimaryColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.friend)
  user: User;

  @Column()
  idFriend: number;
}
