import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomModel } from 'src/model/room.model';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(RoomModel)
    private roomModel: Repository<RoomModel>
  ) {}

  async getRoom(chatId: number): Promise<RoomModel | Error> {
    const room = await this.roomModel.createQueryBuilder('room')
      .where('room.id = :id', { id: chatId })
      .leftJoinAndSelect('room.messages', 'message')
      .getOne();

    if(!room) {
      return new NotFoundException('Room not found');
    }

    return room;
  }
}
