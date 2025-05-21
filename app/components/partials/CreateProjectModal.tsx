'use client';

import { useState } from "react";
import { ProjectService } from "@/app/services/project-service";
import { projectsStore } from "@/app/stores/projects-store";
import { useRouter } from "next/navigation";
export const CreateProjectModal = ({ onClose }: any) => {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const handleClose = () => {
        onClose(false);
    }

    const handleCreate = async () => {
        const response = await ProjectService.createProject(title, description);
        if (response.error) {
            alert(response.error);
            return;
        }
        if (response.statusCode === 401) {
            router.push('/');
            return;
        }
        projectsStore.setProjects(response);

        onClose(false);

    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Оверлей */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                aria-hidden="true"
            ></div>

            {/* Модальное окно */}
            <div className="relative z-50 bg-gray-300 dark:bg-neutral-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                {/* Заголовок и кнопка закрытия */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-cyan-500  dark:text-amber-500">Создать проект</h1>
                    <button
                        onClick={handleClose}
                        className="p-1 rounded-md text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
                        aria-label="Закрыть модальное окно"                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Форма */}
                <div className="space-y-4">
                    {/* Поле для названия проекта */}
                    <div>
                        <label
                            htmlFor="project-name"
                            className="block text-sm font-medium text-gray-500 dark:text-gray-300"
                        >
                            Название проекта:
                        </label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Введите название"
                            className="mt-1 block w-full px-3 py-2 rounded-2xl outline-transparent bg-neutral-400 dark:bg-neutral-600 text-white outline-3 hover:outline-emerald-600
                            dark:hover:outline-amber-500 placeholder-white dark:placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300"
                        />
                    </div>

                    {/* Поле для описания */}
                    <div>
                        <label
                            htmlFor="project-description"
                            className="block text-sm font-medium text-gray-500 dark:text-gray-300"
                        >
                            Краткое описание:
                        </label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Опишите ваш проект..."
                            rows={3}
                            className="mt-1 block w-full px-3 py-2 rounded-2xl outline-transparent bg-neutral-400 dark:bg-neutral-600 text-white outline-3 hover:outline-emerald-600
                            dark:hover:outline-amber-500 placeholder-white dark:placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300"
                        ></textarea>
                    </div>

                    {/* Кнопки */}
                    <div className="flex justify-end space-x-3 mt-6">
                        {/* Кнопка создания */}
                        <button
                            className="active-element text-white bg-neutral-400 dark:bg-neutral-600 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400 text-2xl"
                            onClick={handleCreate}
                        >
                            Создать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};