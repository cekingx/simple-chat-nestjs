export const SendChat = () => {
  return (
    <div className="flex flex-col">
      <form>
        <div className="flex flex-row border border-black">
          <input
            type="text"
            name="chat"
            placeholder="Type your text"
            className="p-2 flex-1"
          />
          <button
            hx-post="/chat"
            hx-swap="none"
            className="button bg-black text-white py-2 px-3"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
