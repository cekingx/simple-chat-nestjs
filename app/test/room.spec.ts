import { ForInteractingWithRoom } from "../driven/ForInteractingWithRoom";
import Message from "../Message";
import Room from "../Room";
import User from "../User";

describe('Room', () => {
  it('should be able to update', () => {
    const mockRoomInteractor: ForInteractingWithRoom = {
      update: jest.fn(),
      getAllMessages: jest.fn()
    };
    const room = new Room({ id: '1' });
    const user = new User({ username: 'user' });
    const message = new Message({ text: 'hello', timestamp: '2020-01-01' });
    room.setRoomInteractor(mockRoomInteractor);
    room.update(message, user);
    expect(mockRoomInteractor.update).toHaveBeenCalledWith(message, user, room);
  })
})