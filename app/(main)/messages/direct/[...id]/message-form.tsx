"use client";

import { createMessage } from "@/actions/message-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const MessageForm = ({ userId }: { userId: string }) => {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    try {
      const newMessage = await createMessage(message, user!.id, userId);

      if (!newMessage) {
        throw new Error("Server error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full flex justify-center items-center mt-2"
      onSubmit={handleSubmit}
    >
      <Input
        className="bg-slate-100 flex-1 max-w-screen-md rounded-r-none"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={loading}
      />
      <Button disabled={loading} className="rounded-l-none">
        {loading ? (
          <Loader2 className="h-5 w-5 text-dark-blue-100 animate-spin" />
        ) : (
          <span className="text-dark-blue-100">Send</span>
        )}
      </Button>
    </form>
  );
};

export default MessageForm;
