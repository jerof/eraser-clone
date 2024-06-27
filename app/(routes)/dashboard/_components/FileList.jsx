import { FileListContext } from "@/app/_context/FileListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ArchiveIcon, MoreHorizontalIcon } from "lucide-react";
import moment from "moment/moment";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

function FileList() {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState();
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    fileList_ && setFileList(fileList_);
    console.log("File list: ", fileList_);
  }, [fileList_]);

  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              File Name
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Created at
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Edited
            </td>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Author
            </td>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {fileList &&
            fileList.map((file, index) => (
              <tr
                className="odd:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/workspace/${file._id}`)}
              >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {file.fileName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {moment(file._creationTime).format("DD MMM YYYY")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {moment(file._creationTime).format("DD MMM YYYY")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <Image
                    src={user?.picture}
                    width={30}
                    height={30}
                    alt="user"
                    className="rounded-full"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontalIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-2">
                        <ArchiveIcon className="h-4 w-4" /> Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;
