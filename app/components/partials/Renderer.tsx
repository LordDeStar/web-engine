'use client';
import { useRef, useEffect, useState } from 'react';
import { FileSelector } from './FileSelector';
export const Renderer = ({ renderer }: any) => {
    const [color, setColor] = useState<number[]>([...renderer.color]);
    const [geometry, setGeometry] = useState<any>({ title: 'Выбор файла' });
    const [texture, setTexture] = useState<any>({ title: 'Выбор файла' })
    const [isDrawingEdges, setDrawingEdges] = useState<boolean>(renderer.isDrawingEdges);
    const red = useRef<any>(null);
    const green = useRef<any>(null);
    const blue = useRef<any>(null);
    const alpha = useRef<any>(null);
    useEffect(() => {
        setColor([...renderer.color]);
        red.current.value = Number(color[0]);
        green.current.value = color[1];
        blue.current.value = color[2];
        alpha.current.value = color[3];
    }, [renderer]);

    if (geometry?.fileUrl) {
        renderer.loadFromUrl(geometry.fileUrl);
    }

    if (texture?.fileUrl) {
        renderer.loadTexture(texture.fileUrl);
    }
    renderer.isDrawingEdges = isDrawingEdges;
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


                <h1 className="text-2xl">Рисовать ребра: <span className='text-cyan-500 dark:text-amber-500' onClick={() => setDrawingEdges(!isDrawingEdges)}>{isDrawingEdges ? "Да" : "Нет"}</span></h1>
                <hr className="border-neutral-800" />

                <h1 className="text-2xl">Цвет:</h1>
                <div className="flex flex-col ml-2.5 gap-y-2">

                    <div className="flex gap-2">
                        <h1>Красный</h1>
                        <input value={color[0]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={red} />
                    </div>
                    <div className="flex gap-2">
                        <h1>Зеленый</h1>
                        <input value={color[1]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={green} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Синий</h1>
                        <input value={color[2]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={blue} />
                    </div>
                    <div className="flex gap-2" >
                        <h1>Альфа</h1>
                        <input value={color[3]} className="rounded-[6px] px-2 py-0.5 shadow-inset" type="number" onChange={onChangeColor} ref={alpha} />
                    </div>
                </div>
            </div>

            <hr className="border-neutral-800" />

            <div className='flex flex-col'>
                <h1 className='text-2xl mb-2'>Геометрия</h1>
                <FileSelector selected={geometry} handleSelect={(file: any) => setGeometry(file)} />
            </div>
            <hr className="border-neutral-800" />
            <div className='flex flex-col'>
                <h1 className='text-2xl mb-2'>Текстура</h1>
                <FileSelector selected={texture} handleSelect={(file: any) => setTexture(file)} />
            </div>
        </div>
    );
}