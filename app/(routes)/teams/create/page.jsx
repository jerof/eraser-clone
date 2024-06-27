"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const createTeam = useMutation(api.teams.createTeam);

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((res) => {
      console.log(res);
      if (res) {
        toast("Team created successfully!");
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="px-6 md:px-16 my-16">
      <Image src="/logo-black.png" width={200} height={200} alt="logo" />
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold py-3">
          What should we call your team?
        </h1>
        <p className="text-muted-foreground">
          You can always change this later from settings.
        </p>
        <div className="mt-7 w-[40%]">
          <label className="text-muted-foreground">Team Name</label>
          <Input
            placeholder="Team name"
            className="mt-3"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <Button
          className="bg-blue-500 mt-9 w-[40%] hover:bg-blue-600"
          disabled={!(teamName && teamName?.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
