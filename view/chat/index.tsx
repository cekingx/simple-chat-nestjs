import { Layout } from "view/index";
import { SendChat } from "./send-chat";
import { Chat } from "./chat";

export type ChatProps = {
  room: string;
  rooms: string[];
  chats: {
    date: string;
    user: string;
    message: string;
  }[];
};

export const Index = (props: ChatProps) => {
  return (
    <Layout title="Chat">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-full max-w-screen-md h-dvh py-2">
          <div className="flex flex-row">
            <div className="flex flex-none w-48 p-2 border border-black">
              Room
            </div>
            <div className="flex flex-1 p-2 border border-black" safe>
              {props.room}
            </div>
          </div>
          <Chat rooms={props.rooms} chats={props.chats} />
          <SendChat />
        </div>
      </div>
    </Layout>
  );
};
