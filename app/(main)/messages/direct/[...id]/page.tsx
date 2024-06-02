"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, Loader2 } from "lucide-react";
import Link from "next/link";
import MessageForm from "./message-form";
import MessageOutput from "./message-output";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

interface Props {
  params: {
    id: string;
  };
}

const page = ({ params: { id } }: Props) => {
  const [messages, setMessages] = useState<MessageParam[]>([]);
  const { user } = useUser();

  if (!user) {
    return (
      <div className="py-4">
        <Loader2 className="animate-spin h-8 w-8 text-soft-black" />
      </div>
    );
  }

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

      <MessageOutput
        sender={user?.id!}
        setMessages={setMessages}
        receiver={id}
        messages={messages}
      />
      <MessageForm userId={id} setMessages={setMessages} />
    </div>
  );
};

export default page;
