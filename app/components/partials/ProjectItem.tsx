'use client';

import { useRouter } from "next/navigation";

export const ProjectItem = ({ project, modalControl }: any) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`projects/${project.id}`);
    }

    return (
        <div

            className="flex justify-between text-gray-500 dark:text-white rounded-2xl min-h-40 overflow-hidden bg-gradient-to-r from-gray-200 dark:from-neutral-700 from-50% to-cyan-400 dark:to-rose-800 hover:scale-[1.02]
                        transition-all duration-300 ease-in-out"
        >

            <div onClick={handleClick} className="relative z-10 p-6 w-[80%] flex flex-col justify-center h-full">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-sm text-neutral-500">{project.description}</p>
            </div>
            <div className="flex flex-col justify-between items-end p-3">
                <h1 className="text-2xl m-2 font-bold">{project.createdAt.slice(0, 10)}</h1>
                <button onClick={() => modalControl({ isOpen: true, projectId: project.id })} className="bg-red-500 outline-2 outline-white text-white text-xl font-bold rounded-md px-3 py-1 hover:scale-105 transition-transform duration-200 ease-in-out ">Удалить</button>
            </div>


        </div>
    );
}