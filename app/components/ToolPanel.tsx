'use client';

import { sceneStore } from "../stores/scene-store";

export const ToolPanel = ({ projectId }: { projectId: number }) => {
    return (
        <div className="flex gap-2.5">
            <button className="active-element h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={() => { sceneStore.saveToJson(projectId) }}>Save</button>
        </div>
    );
}