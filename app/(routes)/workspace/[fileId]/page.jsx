"use client";
import React, { useEffect, useState } from "react";
import WorkspaceHeader from "./_components/WorkspaceHeader";
import Editor from "./_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import Canvas from "./_components/Canvas";

function Workspace({ params }) {
  const [triggerSaveDocument, setTriggerSaveDocument] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState();

  useEffect(() => {
    params.fileId && getFileData();
  }, []);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
  };

  return (
    <div>
      <WorkspaceHeader
        onSaveDocument={() => setTriggerSaveDocument(!triggerSaveDocument)}
      />

      {/* Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen p-10">
          <Editor
            onSaveTrigger={triggerSaveDocument}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
        {/* Whiteboard */}
        <div className="h-screen border-l">
          <Canvas
            onSaveTrigger={triggerSaveDocument}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
