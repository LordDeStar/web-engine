'use client';

import { useState, useEffect } from "react";
import { FolderItem } from "./partials/FolderItem";
import { ProjectService } from "../services/project-service";
import { ExplorerPanel } from "./partials/ExplorerPanel";
import { fileStore } from "../stores/file-store";
import { observer } from "mobx-react-lite";
import { FileItem } from "./partials/FileItem";

export const FileExplorer = observer(({ project }: { project: number }) => {
    const [path, setPath] = useState<{ id: number, title: string }[]>([{ id: 0, title: 'Main' }]);


    useEffect(() => {
        const id = path[path.length - 1].id;
        const bootstrap = async () => {
            if (id != 0) {
                await ProjectService.getFolders(id);
                await ProjectService.getFiles(id);
            }
            else {
                await ProjectService.getStartFolders(project);
                await ProjectService.getStartFiles(project);
            }
        }
        bootstrap();
    }, [path])

    return (
        <div className="m-2.5 flex flex-col">
            <ExplorerPanel project={project} path={path} changePath={setPath} />
            <div className="flex gap-2.5">
                {fileStore.getFolders().map((folder, index) => (
                    <FolderItem key={index} folder={folder} path={path} changePath={setPath} />
                ))}

                {
                    fileStore.getFiles().map((file, index) => (
                        <FileItem key={index} file={file} />
                    ))
                }
            </div>

        </div>
    );
});