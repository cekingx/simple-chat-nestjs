import { ForInteractingWithRoom } from "./driven/ForInteractingWithRoom";
import Message from "./Message";
import User from "./User";

class Room {
  id: string;
  participants: User[];
  roomInteractor: ForInteractingWithRoom;

  constructor(param: Partial<Room>) {
    this.id = param.id;
  }

  setParticipants(participants: User[]) {
    this.participants = participants;
  }

  setRoomInteractor(roomInteractor: ForInteractingWithRoom) {
    this.roomInteractor = roomInteractor;
  }

  update(message: Message, sender: User) {
    this.roomInteractor.update(message, sender, this);
  }
}

export default Room;