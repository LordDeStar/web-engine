'use client';
import { useEngine } from "../providers/EngineProvider";

export const ToolPanel = () => {
    const { engine, sdk } = useEngine();

    return (
        <div className="flex gap-2.5">
            <button className="active-element" onClick={() => { engine.start() }}>Start</button>
        </div>
    );
}