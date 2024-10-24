import { ChatItem } from "./chat-item";

export type ChatRoomProps = {
  rooms: string[];
  chats: {
    date: string;
    user: string;
    message: string;
  }[];
};

export const Chat = (props: ChatRoomProps) => {
  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-none flex-col w-48 border border-black scrollable">
        {props.rooms.map((room, index) => (
          <div className="p-2 mb-1 border border-black" safe>{room}</div>
        ))}
      </div>
      <div
        className="flex flex-1 flex-col p-2 border border-black scrollable"
        id="chat-list"
        hx-ext="ws"
        ws-connect="/chat/ws"
      >
        {props.chats.map((chat, index) => <ChatItem {...chat} />)}
      </div>
    </div>
  );
};
