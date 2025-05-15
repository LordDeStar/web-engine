'use client';

import { useState } from "react";
import { CreateProjectModal } from './CreateProjectModal';

export const ProjectPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleAdd = () => {
        setIsModalOpen(true);
    }

    return (
        <div className="mt-10 flex gap-2.5 items-center justify-between text-4xl rounded-tl-2xl rounded-tr-2xl text-white p-5 w-[80%] bg-neutral-700">
            <h1>Проекты</h1>

            <button onClick={() => handleAdd()} className="flex text-2xl justify-center items-center bg-green-700 rounded-[6px] h-[32px] w-[32px] transition-colors duration-300 hover:bg-emerald-800">+
            </button>

            {isModalOpen && <CreateProjectModal onClose={setIsModalOpen} />}
        </div>
    );
}