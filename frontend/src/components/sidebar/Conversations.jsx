import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../utils/emojis.js";
import useConversation from "../../zustand/useConversation.js";
const Conversations = () => {
  const { conversations, loading } = useGetConversations();

  console.log(conversations);
  console.log(getRandomEmoji());
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;
