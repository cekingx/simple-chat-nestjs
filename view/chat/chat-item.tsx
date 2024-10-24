export type ChatItemProps = {
  date: string;
  user: string;
  message: string;
};

export const ChatItem = (props: ChatItemProps) => {
  return (
    <div className="p-2 mb-1 border border-black chat-item">
      <div className="flex flex-row justify-between">
        <p className="text-xs" safe>{props.user}</p>
        <p className="text-gray-600 text-xs" safe>{props.date}</p>
      </div>
      <div>
        <p safe>{props.message}</p>
      </div>
    </div>
  );
};
