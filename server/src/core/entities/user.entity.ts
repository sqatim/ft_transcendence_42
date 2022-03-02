import { Column, Entity, OneToMany, JoinColumn, PrimaryColumn } from 'typeorm';
import { Friend } from '../../core/entities/friend.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  avatar: string;

  // @JoinColumn()
  @OneToMany((type) => Friend, (friend) => friend.user)
  friend: Friend[];
}
