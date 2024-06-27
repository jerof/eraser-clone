import React, { useContext, useEffect, useState } from "react";
import SideNavTopSection from "./SideNavTopSection";
import SideNavBottomSection from "./SideNavBottomSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FileListContext";

function SideNav() {
  const { user } = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState();
  const [totalFiles, setTotalFiles] = useState();
  const { fileList_, setFileList_ } = useContext(FileListContext);

  const onFileCreate = (fileName) => {
    console.log("File: ", fileName);
    console.log("Active Team: ", activeTeam);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archived: false,
      document: "" /* TODO */,
      whiteboard: "" /* TODO */,
    }).then((res) => {
      toast("File created successfully");
      getFiles();
    }),
      (e) => {
        toast("Error while creating file.");
      };
  };

  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log("Get Files: ", result);
    setTotalFiles(result?.length);
    setFileList_(result);
  };

  return (
    <div className="h-screen fixed w-64 border-r p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SideNavBottomSection
          onFileCreate={onFileCreate}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
}

export default SideNav;
