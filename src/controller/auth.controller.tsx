import { Body, Controller, Get, Post, Render, Res, Session } from '@nestjs/common';
import { UserService } from 'src/service/user.service';
import { Error } from 'view/error';
import { Login } from 'view/login/login';
import { Unauthorized } from 'view/unauthorized';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

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
    const user = await this.userService.login(param.username);

    if(user instanceof Error) {
      return res.send(
        <Error title='Unautorized' message={user.message}/>
      )
    }

    session.username = param.username;
    return res.redirect('/chat');
  }
}
