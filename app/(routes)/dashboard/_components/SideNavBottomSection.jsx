import { Button } from "@/components/ui/button";
import { FlagIcon, GroupIcon, User2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Constant from "@/app/_constant/Constant";
import PricingDialog from "@/app/_components/PricingDialog";

function SideNavBottomSection({ onFileCreate, totalFiles }) {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: FlagIcon,
      path: "",
    },
    {
      id: 2,
      name: "Github",
      icon: User2,
      path: "",
    },
    {
      id: 3,
      name: "Archive",
      icon: GroupIcon,
      path: "",
    },
  ];
  const [fileInput, setFileInput] = useState("");

  /* useEffect(() => {
    console.log("File Input: ", fileInput);
  }, [fileInput]); */

  const totalFilesPerc = (totalFiles / 5) * 100;

  return (
    <div>
      {menuList.map((menu, index) => (
        <p
          key={index}
          className="flex gap-2 p-2 px-4 text-[14px] hover:bg-slate-100 rounded-md cursor-pointer items-center"
        >
          <menu.icon className="w-4 h-4" />
          {menu.name}
        </p>
      ))}
      {/* Add New File Button */}

      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="rounded-sm my-3 w-full bg-blue-600 hover:bg-blue-700 justify-start">
            New File
          </Button>
        </DialogTrigger>
        {totalFiles < Constant.MAX_FREE_FILES ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a new file</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="Give a file name"
                  className="mt-3"
                  value={fileInput}
                  onChange={(e) => setFileInput(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!(fileInput && fileInput.length > 0)}
                  onClick={() => onFileCreate(fileInput)}
                >
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <PricingDialog />
        )}
      </Dialog>

      {/* Progress Bar */}
      <div className="h-4 w-full bg-slate-200 rounded-full mt-5">
        <div
          className="h-4 bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${totalFilesPerc}%` }}
        ></div>
      </div>
      <p className="text-[12px] mt-2">
        <strong>{totalFiles}</strong> out of{" "}
        <strong>{Constant.MAX_FREE_FILES}</strong> files used.
      </p>
      <p className="text-[12px] mt-1">
        <span className="underline">Upgrade</span> your plan for unlimited
        access.
      </p>
    </div>
  );
}

export default SideNavBottomSection;
