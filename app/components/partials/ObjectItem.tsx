'use client';
import { useState } from "react";


export const ObjectItem = ({ removeClick, select, gameObject }: any) => {
    const [isClicked, setIsClicked] = useState(false);
    const rotate = (isClicked) ? 'rotate-90' : 'rotate-0';
    const handleSelect = () => {
        select(gameObject);
    }
    return (
        <div className="flex justify-between p-2.5 text-white items-center rounded-2xl bg-gray-400 dark:bg-neutral-700 hover:bg-neutral-600 dark:hover:bg-neutral-500 transition-colors duration-300">
            <div onClick={handleSelect} className='flex w-full justify-between' >
                <div className="flex gap-2">
                    <h1 className="text-3xl">{gameObject.tag}</h1>
                </div>
            </div>
            <button onClick={removeClick} className='bg-red-500 flex justify-center items-center rounded-[6px] text-3xl w-8 h-8 transition-colors duration-300 hover:bg-red-800'>-</button>
        </div>
    );
}