'use client';
import { useState } from "react";


export const ObjectItem = ({ removeClick, select, gameObject }: any) => {
    const [isClicked, setIsClicked] = useState(false);
    const rotate = (isClicked) ? 'rotate-90' : 'rotate-0';
    const handleSelect = () => {
        select(gameObject);
    }
    return (
        <div onClick={handleSelect} className="flex justify-between p-2.5 items-center rounded-2xl hover:bg-neutral-600 transition-colors duration-300">
            <div className='flex w-full justify-between' >
                <div className="flex gap-2">
                    <img onClick={() => setIsClicked(!isClicked)} className={`transition-transform duration-300 ${rotate}`} height='16px' width='16px' src="/icons/arrow-right.svg" alt="" />
                    <h1 className='text-3xl'>{gameObject.tag}</h1>
                </div>
            </div>
            <button onClick={removeClick} className='bg-red-500 flex justify-center items-center rounded-[6px] text-3xl w-8 h-8 transition-colors duration-300 hover:bg-red-800'>-</button>
        </div>
    );
}