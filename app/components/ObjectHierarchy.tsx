'use client';
import { useState, useRef, useContext, useEffect } from 'react';
import { ObjectItem } from './partials/ObjectItem';
import { useEngine } from '../providers/EngineProvider';
import { ThemeContext } from '../providers/ThemeProvider';
import { sceneStore } from '../stores/scene-store';
import { observer } from 'mobx-react-lite';
export const ObjectHierarchy = observer(() => {
    const { selectObject, selectedObject } = useEngine();
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Object Hierarchy must be init in Theme Provider");
    const { theme } = context;
    const nameBox = useRef<HTMLInputElement>(null);
    const handleCreateClick = async () => {
        if (nameBox.current) {
            const name = nameBox.current.value;
            if (name == "") {
                alert('Сперва введите название объекта!');
                return;
            }
            sceneStore.addObject(name);
            nameBox.current.value = "";
        }
    }
    const handleRemoveClick = (object: any) => {
        if (selectedObject === object) {
            selectObject(null);
        }
        sceneStore.removeObject(object);
    }
    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <h1 className='flex items-center justify-center text-2xl min-w-fit w-2/5 h-25 rounded-br-4xl font-bold text-cyan-500 dark:text-amber-500 bg-gray-300 dark:bg-neutral-600 '>Иерархия</h1>
            <div className='flex mx-3 mt-5 items-center gap-2.5'>
                <input ref={nameBox} className='p-3 w-50 rounded-2xl outline-gray-400 outline-3 hover:outline-emerald-600
                dark:text-white
                            dark:hover:outline-amber-500 placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300' placeholder='Введите название...' />
                <button onClick={() => { handleCreateClick() }} className='flex justify-center items-center rounded-[6px] mr-2 w-8 h-8 text-2xl bg-green-600 transition-colors duration-300 text-white hover:bg-green-800'>+</button>
            </div>

            <div className='flex flex-col h-full my-5 mx-3 overflow-y-scroll scrollable p-5 border rounded-2xl border-neutral-500 shadow-inset gap-1.5'>
                {
                    sceneStore.objects.map((item: any, index: number) => (
                        <ObjectItem key={index} gameObject={item} select={selectObject} removeClick={() => { handleRemoveClick(item) }} />
                    ))
                }
            </div>
        </div>
    );
});