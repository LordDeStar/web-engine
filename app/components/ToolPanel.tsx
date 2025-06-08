'use client';

import { observer } from "mobx-react-lite";
import { ProjectService } from "../services/project-service";
import { sceneStore } from "../stores/scene-store";

export const ToolPanel = observer(({ projectId }: { projectId: number }) => {

    return (
        <div className="flex gap-2.5">
            <button className="active-element h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={() => { sceneStore.saveToJson(projectId) }}>Сохранить</button>
            <button className="active-element h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={() => { ProjectService.downloadArchive(projectId) }}>Экспортировать</button>
            <button className="active-element h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={() => sceneStore.start()}> {sceneStore.allowedToStart ? "Стоп" : "Старт"}</button>
        </div >
    );
});