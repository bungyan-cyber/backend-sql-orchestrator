import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  username: string;

  @Column()
  city: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'friend' })
  friend: User;
}
