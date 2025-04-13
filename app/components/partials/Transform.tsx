'use client';

import { useRef } from "react";

export const Transform = ({transform}:any) => {
    const xScale = useRef<any>(null);
    const yScale = useRef<any>(null);
    const zScale = useRef<any>(null);


    const onScaleUpdate = ()=>{
        if (xScale.current) transform.scale[0] = xScale.current.value;
        if (yScale.current) transform.scale[1] = yScale.current.value;
        if (zScale.current) transform.scale[2] = zScale.current.value;
    }

    return (
        <div className="flex flex-col p-2">
            <div className="flex flex-col">
                <h1 className="text-2xl">Scale:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">
                    <div className="flex gap-2">
                        <h1>X</h1>
                        <input className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate} ref={xScale}/>
                    </div>
                    <div className="flex gap-2">
                        <h1>Y</h1>
                        <input className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate}  ref={yScale}/>
                    </div>
                    <div className="flex gap-2" >
                        <h1>Z</h1>
                        <input className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate} ref={zScale}/>
                    </div>
                </div>

            </div>
        </div>
    );
}