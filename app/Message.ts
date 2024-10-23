import Room from "./Room";
import User from "./User";

class Message {
  text: string;
  timestamp: string;

  constructor(param: Partial<Message>) {
    this.text = param.text;
    this.timestamp = param.timestamp;
  }
}

export default Message;