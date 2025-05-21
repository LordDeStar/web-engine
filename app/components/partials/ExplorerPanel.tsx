import { ProjectService } from "@/app/services/project-service"
import { useState } from "react";
import { CreateFolderModal } from "./CreateFolderModal";
import { CreateFileModal } from "./CreateFileModal";

export const ExplorerPanel = ({ project, path, changePath }: any) => {
    const [isFolderOpen, setIsFolderOpen] = useState<boolean>(false);
    const [isFileOpen, setIsFileOpen] = useState<boolean>(false);
    const currentId = path[path.length - 1].id;
    const parent = (currentId == 0) ? undefined : currentId;

    const handleClick = (id: number) => {
        const count = path.length;
        const temp = [...path];

        temp.splice(id + 1, count - id);
        changePath([...temp])
    }
    return (
        <div className="flex m-2 h-10 text-gray-500 dark:text-white w-[99%]">
            <div className="h-full w-full  p-2 rounded-tl-2xl rounded-bl-2xl shadow-inset overflow-scroll">
                <h1 className="text-xl flex">
                    {
                        path.map((item: any, index: number) => (
                            <p key={index} onClick={() => { handleClick(index) }} className="hover:underline w-fit">{item.title + ' > '}</p>
                        ))
                    }
                </h1>
            </div>
            <button onClick={() => setIsFolderOpen(true)} className="flex border-r-2 text-white border-white justify-center items-center h-full w-15 bg-green-600 
            hover:bg-green-800 transition-colors duration-300" >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
                    <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                    <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                </svg>
            </button>
            <button onClick={() => setIsFileOpen(true)} className="flex rounded-tr-2xl text-white rounded-br-2xl justify-center items-center h-full w-15 bg-green-600 
            hover:bg-green-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                    <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                </svg>
            </button>


            {
                isFolderOpen && <CreateFolderModal project={project} parent={parent} onClose={setIsFolderOpen} />
            }

            {
                isFileOpen && <CreateFileModal project={project} parent={parent} onClose={setIsFileOpen} />
            }
        </div>
    );
}