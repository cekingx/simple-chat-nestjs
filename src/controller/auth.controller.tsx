import { Body, Controller, Get, Post, Render, Res, Session } from '@nestjs/common';
import { Login } from 'view/login/login';

@Controller('auth')
export class AuthController {
  @Get('login')
  async loginView() {
    return (
      <Login link="/auth/login" />
    )
  }

  @Post('login')
  async login(
    @Body() param: any,
    @Session() session: Record<string, any>,
    @Res() res: any
  ) {
    session.username = param.username;
    res.redirect('/chat');
  }
}
