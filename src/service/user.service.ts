import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/model/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userModel: Repository<UserModel>,
  ) {}

  async login(username: string): Promise<boolean | Error> {
    const user = await this.userModel
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getOne();

    if (!user) {
      return new NotFoundException('User not found');
    }

    return true;
  }
}
