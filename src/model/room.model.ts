import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserModel } from "./user.model";
import { MessageModel } from "./message.model";

@Entity()
export class RoomModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => MessageModel, message => message.room)
  messages: MessageModel[];

  @ManyToMany(() => UserModel)
  @JoinTable()
  participants: UserModel[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}