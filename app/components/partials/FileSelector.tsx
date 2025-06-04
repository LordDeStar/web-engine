'use client';

import { fileStore } from "@/app/stores/file-store";
import { useState } from "react";
import { observer } from "mobx-react-lite";
const SelectItem = ({ file, changeSelected }: any) => {
    return (
        <p className="m-1 p-2 hover:bg-gray-600 dark:hover:bg-neutral-400 rounded-[6px]" onClick={changeSelected}>{file.title}</p>
    );
}


export const FileSelector = observer(({ selected, handleSelect, allowed }: any) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const classes = `${isClicked ? 'rotate-90 ' : ''} transition-transform  duration-300`;
    const isAllowed = (file: any) => {
        return allowed.includes(file.title.split('.')[1]);
    }
    const roundedClasses = `${isClicked ? 'rounded-tl-2xl rounded-tr-2xl z-10' : 'rounded-2xl z-1'} `
    return (
        <div onClick={() => setIsClicked(!isClicked)} className={`flex relative h-12 p-2 items-center text-white justify-between ${roundedClasses} bg-gray-400 dark:bg-neutral-600 transition-all duration-300 z-1`}>

            <h1 className="text-xl text-white">{selected.title}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classes} viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>

            {
                isClicked && <div className="absolute top-[50px] left-0 w-full rounded-bl-2xl rounded-br-2xl bg-gray-400 dark:bg-neutral-600 min-h-8 z-11">
                    {
                        fileStore.files.filter(f => isAllowed(f)).map((file: any, index: number) => (
                            <SelectItem key={index} file={file} changeSelected={() => handleSelect(file)} />
                        ))
                    }
                </div>
            }
        </div>
    );
});