import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../utils/extractTime";
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromUser = authUser._id === message.senderId;
  const chatClass = fromUser ? "chat chat-end" : "chat chat-start";
  const profilePic = fromUser
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleBgColor = fromUser ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <>
      <div className={`${chatClass}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={profilePic} alt="Tailwind css chat bubble component" />
          </div>
        </div>
        <div
          className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
        >
          {message.message}
        </div>
        <div
          className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}
        >
          {extractTime(message.createdAt)}
        </div>
      </div>
    </>
  );
};

export default Message;
