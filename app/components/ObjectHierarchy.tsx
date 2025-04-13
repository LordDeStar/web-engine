'use client';
import { useState, useRef } from 'react';
import { ObjectItem } from './partials/ObjectItem';
import { useEngine } from '../providers/EngineProvider';
export const ObjectHierarchy = () => {
    const { engine, sdk, selectObject } = useEngine();
    const [objects, setObjects] = useState<any[]>([]);
    const nameBox = useRef<HTMLInputElement>(null);
    const handleCreateClick = async () => {
        if (nameBox.current) {
            const name = nameBox.current.value;
            if (name == "") {
                alert('Сперва введите название объекта!');
                return;
            }

            const geometry = await sdk.TemplateGeometry.loadFromOBJ('/assets/models/cube/cube.obj');
            const renderer = new sdk.Renderer(geometry, '/assets/models/cube/default.mtl', true);
            const box = new sdk.GameObject(name);
            box.transform.position[0] = 0;
            box.transform.position[1] = 0;
            box.transform.position[2] = 15;

            box.transform.rotation[1] = 0.5;
            box.AddComponent(renderer);
            engine._objects.push(box);
            nameBox.current.value = "";
            setObjects([...engine._objects]);
        }
    }
    const handleRemoveClick = (object: any) => {
        engine._objects = engine._objects.filter((obj: any) => obj !== object);
        setObjects([...engine._objects]);
    }
    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <h1 className='flex items-center justify-center text-2xl min-w-fit w-2/5 h-25 rounded-br-4xl bg-neutral-600 '>Hierarchy</h1>
            <div className='flex mx-3 mt-5 items-center gap-2.5'>
                <input ref={nameBox} className='p-3 w-50 rounded-2xl shadow-inset' placeholder='Enter the object name' />
                <button onClick={() => { handleCreateClick() }} className='flex justify-center items-center rounded-[6px] mr-2 w-8 h-8 text-2xl bg-green-600 transition-colors duration-300 hover:bg-green-800'>+</button>
            </div>

            <div className='flex flex-col h-full my-5 mx-3 overflow-y-scroll scrollable p-5 border rounded-2xl border-neutral-500 shadow-inset'>
                {
                    objects.map((item: any, index: number) => (
                        <ObjectItem key={index} gameObject={item} select={selectObject} removeClick={() => { handleRemoveClick(item) }} />
                    ))
                }
            </div>
        </div>
    );
}