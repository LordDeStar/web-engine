'use client';
import { useEngine } from "../providers/EngineProvider";
import { useRef } from 'react';
import { Select } from "./partials/Select";
import { Component } from "./partials/Component";


export const Inspector = () => {
    const { sdk, selectedObject } = useEngine();
    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden">
            <h1 className='flex items-center justify-center text-2xl min-w-fit w-2/5 h-25 rounded-br-4xl bg-neutral-600 '>Inspector</h1>
            <div className='flex mx-3 mt-5 items-center gap-2.5'>
                <Select values={['123', 'test', 'test 123']} />
                <button className='flex justify-center items-center rounded-[6px] mr-2 w-8 h-8 text-2xl bg-green-600 transition-colors duration-300 hover:bg-green-800'>+</button>
            </div>

            <div className='flex flex-col h-full my-5 mx-3 overflow-y-scroll scrollable p-5 border rounded-2xl border-neutral-500 shadow-inset gap-2.5'>
                <Component key={0} keyName="transform" componentObj={selectedObject?.transform} />
                {
                    selectedObject?.components.map((element: any, index: number) => (
                        <Component key={index + 1} componentObj={element} />
                    ))
                }
            </div>
        </div>
    );
}