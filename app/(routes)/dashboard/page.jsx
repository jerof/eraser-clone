"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQuery } from "convex/react";
import React, { useEffect } from "react";
import DashboardHeader from "./_components/DashboardHeader";
import FileList from "./_components/FileList";

function Dashboard() {
  const { user } = useKindeBrowserClient();
  const convex = useConvex();

  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (user && user.email) {
      checkUser();
    }
  }, [user]);

  const checkUser = async () => {
    const result = await convex.query(api.user.getUser, { email: user?.email });
    if (!result.length) {
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture,
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <div className="p-8">
      <DashboardHeader user={user} />
      <FileList />
    </div>
  );
}

export default Dashboard;
