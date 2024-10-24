import { Controller, Get, Query, Res, Session, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { GetChatDto } from 'src/dto/get-chat.dto';
import { AuthGuard } from 'src/guard/auth.guard';
import { ChatService } from 'src/service/chat.service';
import { Index as Chat } from 'view/chat'
import { Error } from 'view/error';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async getChat(@Query() param: GetChatDto, @Res() res: any) {
    console.log('param', param)
    const room = await this.chatService.getRoom(param.roomId);
    console.log('room', typeof room)

    return res.send(
      <Error title='Room not found' message={(room as Error).stack} />
    )
    if(room instanceof Error) {
      return res.send(
        <Error title='Room not found' message={(room as Error).stack} />
      )
    }
    console.log('room', room)
    const props = {
      room: 'Room 1',
      rooms: ['Room 1'],
      chats: [
        {
          date: '2021-09-01',
          user: 'user-1',
          message: 'Hello'
        }
      ]
    }
    return res.send(<Chat {...props} />)
  }
}
