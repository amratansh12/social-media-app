import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const page = () => {
  return (
    <ScrollArea className="w-full bg-slate-300 h-[80vh] my-4 rounded-md shadow-sm ">
      <div className="flex flex-col space-y-4 p-2"></div>
    </ScrollArea>
  );
};

export default page;
