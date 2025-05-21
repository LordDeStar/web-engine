'use client';

import { useRouter } from "next/navigation";

export const ProjectItem = ({ project }: any) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`projects/${project.id}`);
    }

    return (
        <div
            onClick={handleClick}
            className="relative text-gray-500 dark:text-white rounded-2xl h-40 overflow-hidden bg-gradient-to-r from-gray-200 dark:from-neutral-700 from-50% to-cyan-400 dark:to-rose-800 hover:scale-[1.02]
                        transition-all duration-300 ease-in-out"
        >
            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-6 flex flex-col justify-center h-full">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-sm text-neutral-500">{project.description}</p>
            </div>
        </div>
    );
}