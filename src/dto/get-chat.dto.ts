import { IsNumberString } from "class-validator";

export class GetChatDto {
  @IsNumberString()
  roomId: number;
}