'use client'

import { useState } from "react";
import { Transform } from "./Transform";
import { Renderer } from "./Renderer";

export const Component = ({ componentObj }: any) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const test = (obj: any) => {
        if (!obj?.name) {
            return (<Transform transform={obj} />)
        }
        switch (obj?.name) {
            case 'renderer':
                return <Renderer renderer={obj} />
        }
    };

    return (
        <div className="flex flex-col p-2 px-4 rounded-2xl text-gray-500 dark:text-white bg-gray-300 dark:bg-neutral-500">
            <div onClick={() => setIsClicked(!isClicked)} className="flex justify-between">
                <h1 className="font-bold text-cyan-500 dark:text-neutral-900 text-3xl border-b border-b-cyan-500 dark:border-b-neutral-800">
                    {(componentObj?.name) ? componentObj.name.toUpperCase() : "TRANSFORM"}
                </h1>
                <img
                    className={`transition-transform ${isClicked ? '-rotate-90' : 'rotate-90'}`}
                    height="16px"
                    width="16px"
                    src="/icons/arrow-right.svg"
                    alt=""
                />
            </div>
            <div className={`${isClicked ? 'block' : 'hidden'}`}>
                {test(componentObj)}
            </div>
        </div>
    );
};