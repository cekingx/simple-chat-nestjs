import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthController } from './controller/auth.controller';
import { ChatController } from './controller/chat.controller';
import { MessageModel } from './model/message.model';
import { RoomModel } from './model/room.model';
import { UserModel } from './model/user.model';
import { UserService } from './service/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASS'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        autoLoadEntities: true
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([MessageModel, RoomModel, UserModel]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'public'),
    })
  ],
  controllers: [AppController, AuthController, ChatController],
  providers: [AppService, UserService],
})
export class AppModule {}
