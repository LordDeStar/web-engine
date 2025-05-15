'use client';
import { useRef, useEffect, useState } from 'react';
import { Select } from './Select';
import { fileStore } from '@/app/stores/file-store';
import { FileSelector } from './FileSelector';
export const Renderer = ({ renderer }: any) => {
    const [color, setColor] = useState<number[]>([...renderer.color]);
    const [geometry, setGeometry] = useState<any>({ title: 'Выбор файла' });
    const red = useRef<any>(null);
    const green = useRef<any>(null);
    const blue = useRef<any>(null);
    const alpha = useRef<any>(null);
    useEffect(() => {
        setColor([...renderer.color]);
    }, [renderer]);

    if (geometry?.fileUrl) {
        renderer.loadFromUrl(geometry.fileUrl);
    }

    const onChangeColor = () => {
        const result: number[] = [];
        if (red.current) result.push(red.current.value);
        if (green.current) result.push(green.current.value);
        if (blue.current) result.push(blue.current.value);
        if (alpha.current) result.push(alpha.current.value);

        renderer.setColor(result[0], result[1], result[2], result[3]);
        setColor([...result]);


    }

    return (
        <div className="flex flex-col p-2 gap-y-2.5">

            <div className="flex flex-col">
                <h1 className="text-2xl">Color:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">

                    <div className="flex gap-2">
                        <h1>Red</h1>
                        <input value={color[0]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={red} />
                    </div>
                    <div className="flex gap-2">
                        <h1>Green</h1>
                        <input value={color[1]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={green} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Blue</h1>
                        <input value={color[2]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={blue} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Alpha</h1>
                        <input value={color[3]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={alpha} />
                    </div>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className='flex flex-col'>
                <h1 className='text-2xl'>Geometry</h1>
                <FileSelector selected={geometry} handleSelect={(file: any) => setGeometry(file)} />
            </div>
        </div>
    );
}