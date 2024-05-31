"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

interface MessageOutputProps {
  id: string;
  messages: MessageParam[];
}

const MessageOutput = ({ id, messages }: MessageOutputProps) => {
  return (
    <ScrollArea className="bg-green-200 h-[67vh]">
      <div className="p-2 flex flex-col items-center space-y-2">
        <div className="bg-red-200 w-full text-end px-1 py-2 rounded-md">
          This is sent
        </div>
        <div className="bg-blue-200 w-full text-start px-1 py-2 rounded-md">
          This is received
        </div>
      </div>
    </ScrollArea>
  );
};

export default MessageOutput;
