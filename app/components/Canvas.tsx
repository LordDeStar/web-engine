'use client';
import { useEffect } from "react";
import { useEngine } from "../providers/EngineProvider";
export const Canvas = () => {
    const { engine, sdk } = useEngine();

    useEffect(() => {
        if (!engine.isInited) {
            engine.init("main");
        }
    }, []);

    return (
        <div className="w-full h-full" id="main">

        </div>
    );
}