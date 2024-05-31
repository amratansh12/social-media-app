"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";
import MessageForm from "./message-form";
import MessageOutput from "./message-output";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getMessageByUserAndSender } from "@/actions/message-actions";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessageByUserAndSender(user?.id!, id);

        if (!data) {
          throw new Error("Internal server error");
        }

        //todo: fetch message
        console.log(JSON.parse(data!));
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="h-full py-4">
      <div className="p-2 bg-slate-300 border-b-2 flex items-center justify-between border-slate-200">
        <span className="text-lg font-semibold">{id}</span>
        <Link href="/messages">
          <Button variant="ghost" size="icon" className="hover:bg-slate-200/30">
            <ArrowLeftFromLine className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <MessageOutput id={id} messages={messages} />
      <MessageForm userId={id} />
    </div>
  );
};

export default page;
