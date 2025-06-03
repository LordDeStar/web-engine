'use client';

import { EngineProvider } from "@/app/providers/EngineProvider";
import { sceneStore } from "../stores/scene-store";
import { useEffect } from "react";

export const Engine = ({ projectId, children }: { projectId: number, children: React.ReactNode }) => {

    useEffect(() => { sceneStore.loadFromJson(projectId) }, []);
    return (
        <EngineProvider width='50vw' height='60vh'>
            {children}
        </EngineProvider>
    );
}