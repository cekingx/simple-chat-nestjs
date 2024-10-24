import { Controller, Get, Res, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { Layout } from 'view';

@Controller('chat')
export class ChatController {
  @Get()
  @UseGuards(AuthGuard)
  async getChat(
    @Session() session: Record<string, any>,
    @Res() res: any
  ) {
    return res.send(
      <Layout>
        <div>
          <h1>Chat</h1>
          <p safe>Welcome, {session.username}</p>
        </div>
      </Layout>
    )
  }
}
