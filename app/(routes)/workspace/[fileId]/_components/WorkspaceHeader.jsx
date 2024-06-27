import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React from "react";

function WorkspaceHeader({ onSaveDocument }) {
  return (
    <div className="p-4 border-b flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        <Image src={"/logo-1.png"} width={40} height={40} alt="logo" />
        <p>File Name</p>
      </div>
      <div className="flex gap-2">
        <Button
          className="h-8 text-[12px] gap-2 bg-yellow-600 hover:bg-yellow-700"
          onClick={() => onSaveDocument()}
        >
          Save <Save className="w-4 h-4" />
        </Button>
        <Button className="h-8 text-[12px] gap-2 bg-blue-600 hover:bg-blue-700">
          Share <Link className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default WorkspaceHeader;
