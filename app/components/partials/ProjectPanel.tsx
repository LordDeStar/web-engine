'use client';

import { useState } from "react";
import { CreateProjectModal } from './CreateProjectModal';
import { projectsStore } from "@/app/stores/projects-store";

export const ProjectPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleAdd = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="mt-10 flex gap-2.5 items-center justify-between text-4xl rounded-tl-2xl rounded-tr-2xl text-cyan-500 dark:text-amber-500 p-5 w-[80%] bg-gray-300 dark:bg-neutral-700 transition-colors duration-300">
            <h1>Проекты</h1>
            <input onChange={(e) => {
                projectsStore.filterString = e.target.value;
            }} className="text-2xl mt-1 block w-full px-3 py-2 rounded-md outline-3 hover:outline-emerald-600
                            dark:hover:outline-amber-500 placeholder-gray-300 outline-transparent bg-gray-400 dark:bg-neutral-800 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300" placeholder="Поиск по названию" />
            <button onClick={() => handleAdd()} className=" text-white flex text-2xl justify-center items-center bg-green-700 rounded-[6px] h-[32px] w-[32px] transition-colors duration-300 hover:bg-emerald-800">+
            </button>

            {isModalOpen && <CreateProjectModal onClose={setIsModalOpen} />}
        </div>
    );
}