import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        console.log(res);
        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await res.json();
        console.log(data);
        console.log("he;;ooo");
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data.length > 0 ? data : []);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessage;
