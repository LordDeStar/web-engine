'use client';
import { useState, useRef } from 'react';
export const Select = ({ values }: { values: any[] }) => {
    const [text, setText] = useState<string>('');
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const options = ['', ...values];

    const handleOpen = () => {
        setIsClicked(!isClicked);
    };

    const handleSelect = (newText: string) => {
        setText(newText);
        setIsClicked(false);
    };

    return (
        <div className={`relative flex flex-col w-full p-3 ${isClicked ? 'rounded-t-[6px]' : 'rounded-[6px]'} text-white  bg-gray-400 dark:bg-neutral-700`}>
            {/* Заголовок */}
            <div
                className="flex px-2.5 justify-between items-center cursor-pointer"
                onClick={handleOpen}
            >
                <h1 className="text-2xl w-3/4">{text || 'Выберите компонент'}</h1>
                <img
                    height="16px"
                    width="16px"
                    className={`pt-1.5 transition-transform duration-300 ${isClicked ? '-rotate-90' : 'rotate-90'
                        }`}
                    src="/icons/arrow-right.svg"
                    alt="Dropdown arrow"
                />
            </div>

            {/* Выпадающий список */}
            <div
                className={`absolute top-14 left-0 border-t-2 border-t-transparent w-full overflow-hidden transition-all duration-300 rounded-b-2xl ${isClicked ? 'max-h-56 opacity-100  border-t-neutral-200' : 'max-h-0 opacity-0'
                    }`}
            >
                {options.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => handleSelect(item)}
                        className="text-2xl px-2.5 py-0.5 bg-gray-400 dark:bg-neutral-700 hover:bg-neutral-500 cursor-pointer"
                    >
                        {item || 'Empty'}
                    </p>
                ))}
            </div>
        </div>
    );
};