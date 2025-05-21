'use client';
import { useEffect, useContext } from "react";
import { useEngine } from "../providers/EngineProvider";
import { ThemeContext } from "../providers/ThemeProvider";
export const Canvas = () => {
    const { engine, sdk } = useEngine();
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Engine must be init in Theme Provider");
    const { theme } = context;
    useEffect(() => {
        if (!engine.isInited) {


            engine.init("main", theme);
        }
    }, []);

    return (
        <div className="w-full h-full" id="main">

        </div>
    );
}