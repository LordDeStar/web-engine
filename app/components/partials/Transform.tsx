'use client';

import { useEffect, useRef, useState } from "react";

export const Transform = ({ transform }: any) => {
    const [scale, setScale] = useState<number[]>([...transform.scale]);
    const [position, setPosition] = useState<number[]>([...transform.position]);
    const [rotation, setRotation] = useState<number[]>([...transform.rotation]);

    const xScale = useRef<any>(null);
    const yScale = useRef<any>(null);
    const zScale = useRef<any>(null);

    const xRotation = useRef<any>(null);
    const yRotation = useRef<any>(null);
    const zRotation = useRef<any>(null);

    const xPosition = useRef<any>(null);
    const yPosition = useRef<any>(null);
    const zPosition = useRef<any>(null);

    useEffect(() => {
        setScale([...transform.scale]);
        setPosition([...transform.position]);
        setRotation([...transform.rotation]);
    }, [transform]);


    const onScaleUpdate = () => {
        if (xScale.current) transform.scale[0] = xScale.current.value;
        if (yScale.current) transform.scale[1] = yScale.current.value;
        if (zScale.current) transform.scale[2] = zScale.current.value;
        setScale([...transform.scale]);
    }
    const onPositionUpdate = () => {
        if (xPosition.current) transform.position[0] = xPosition.current.value;
        if (yPosition.current) transform.position[1] = yPosition.current.value;
        if (zPosition.current) transform.position[2] = zPosition.current.value;
        setPosition([...transform.position]);
    }
    const onRotationUpdate = () => {
        if (xRotation.current) transform.rotation[0] = xRotation.current.value;
        if (yRotation.current) transform.rotation[1] = yRotation.current.value;
        if (zRotation.current) transform.rotation[2] = zRotation.current.value;
        setRotation([...transform.rotation]);
    }

    return (
        <div className="flex flex-col p-2 gap-y-2.5">

            <div className="flex flex-col">
                <h1 className="text-2xl">Scale:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">
                    <div className="flex gap-2">
                        <h1>X</h1>
                        <input value={scale[0]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate} ref={xScale} />
                    </div>
                    <div className="flex gap-2">
                        <h1>Y</h1>
                        <input value={scale[1]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate} ref={yScale} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Z</h1>
                        <input value={scale[2]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onScaleUpdate} ref={zScale} />
                    </div>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className="flex flex-col">
                <h1 className="text-2xl">Rotation:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">
                    <div className="flex gap-2">
                        <h1>X</h1>
                        <input value={rotation[0]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onRotationUpdate} ref={xRotation} />
                    </div>
                    <div className="flex gap-2">
                        <h1>Y</h1>
                        <input value={rotation[1]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onRotationUpdate} ref={yRotation} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Z</h1>
                        <input value={rotation[2]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onRotationUpdate} ref={zRotation} />
                    </div>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className="flex flex-col">
                <h1 className="text-2xl">Position:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">
                    <div className="flex gap-2">
                        <h1>X</h1>
                        <input value={position[0]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onPositionUpdate} ref={xPosition} placeholder={transform.position[0].toString()} />
                    </div>
                    <div className="flex gap-2">
                        <h1>Y</h1>
                        <input value={position[1]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onPositionUpdate} ref={yPosition} placeholder={transform.position[1].toString()} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Z</h1>
                        <input value={position[2]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onPositionUpdate} ref={zPosition} placeholder={transform.position[2].toString()} />
                    </div>
                </div>

            </div>
        </div>
    );
}