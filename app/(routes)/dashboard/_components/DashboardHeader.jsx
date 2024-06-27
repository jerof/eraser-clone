import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

function DashboardHeader({ user }) {
  return (
    <div className="flex justify-end gap-2 w-full items-center">
      <div className="relative flex items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-400" />
        </span>
        <Input
          type="text"
          placeholder="Search"
          className="pl-10 border rounded-lg w-full"
        />
      </div>
      <div>
        <Image
          src={user?.picture}
          width={40}
          height={40}
          className="rounded-full"
          alt="user"
        />
      </div>
      <Button className="flex gap-2 bg-blue-600 hover:bg-blue-700">
        <Send className="h-4 w-4" /> Invite
      </Button>
    </div>
  );
}

export default DashboardHeader;
