import Message from "app/Message";
import Room from "app/Room";
import User from "app/User";

export interface ForInteractingWithRoom {
  update(message: Message, sender: User, room: Room): void;
}