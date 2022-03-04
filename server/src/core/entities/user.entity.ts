import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Friend } from '../../core/entities/friend.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  password?: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  avatar?: string;

  // @JoinColumn()
  @OneToMany((type) => Friend, (friend) => friend.user)
  friend: Friend[];
}
