import React, { useEffect, useState } from "react";
import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function SideNavTopSection({ user, setActiveTeamInfo }) {
  const [teamList, setTeamList] = useState([]);
  const router = useRouter();
  const convex = useConvex();
  const menu = [
    { id: 1, name: "Create Team", path: "/teams/create", icon: Users },
    { id: 2, name: "Settings", path: "/settings", icon: Settings },
  ];
  const [activeTeam, setActiveTeam] = useState();

  useEffect(() => {
    user && getTeamsList();
  }, [user]);

  useEffect(() => {
    activeTeam && setActiveTeamInfo(activeTeam);
  }, [activeTeam]);

  const getTeamsList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    console.log("TeamList: ", result);
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuClick = (item) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <>
      <div>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-3 hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
              <Image src="/logo-1.png" width={40} height={40} alt="logo" />
              <h2 className="flex gap-x-2 items-center font-semibold text-sm">
                {activeTeam?.teamName}
                <ChevronDown className="w-3 h-3" />
              </h2>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-1 w-48">
            {/* Team section */}
            <div>
              {teamList.map((team, index) => (
                <p
                  className={`flex gap-2 items-center p-2 hover:bg-slate-100 rounded-lg text-sm cursor-pointer mb-1 ${activeTeam?._id === team._id && "bg-slate-100"}`}
                  onClick={() => setActiveTeam(team)}
                  key={index}
                >
                  {team.teamName}
                </p>
              ))}
              <Separator className="my-1 bg-slate-100" />
              {menu.map((item, index) => (
                <p
                  key={index}
                  className="flex gap-2 items-center p-2 hover:bg-slate-100 rounded-lg text-sm cursor-pointer"
                  onClick={() => onMenuClick(item)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </p>
              ))}
              <LogoutLink>
                <p className="flex gap-2 items-center p-2 hover:bg-slate-100 rounded-lg text-sm cursor-pointer">
                  <LogOut className="h-4 w-4" />
                  Logout
                </p>
              </LogoutLink>
            </div>
            <Separator className="my-1 bg-slate-100" />
            {/* User Info Section */}
            {user && (
              <div className="p-2 flex gap-2 items-center">
                <Image
                  src={user?.picture}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] font-semibold">
                    {user?.given_name} {user?.family_name}
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Button
          variant="outline"
          className="w-full justify-start gap-2 mt-4 font-semibold bg-slate-100 border-slate-100"
        >
          <LayoutGrid className="w-3 h-3" />
          All Files
        </Button>
      </div>
    </>
  );
}

export default SideNavTopSection;
