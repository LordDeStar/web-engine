import { ProjectService } from "@/app/services/project-service";
import { useState } from "react";

export const CreateFolderModal = ({ project, parent, onClose }: any) => {
    const [title, setTitle] = useState<string>("");


    const createFolder = async () => {
        if (title == "") {
            alert("Название не должго быть пустым!");
            return;
        }
        const response = await ProjectService.createFolder(project, title, parent);
        if (response?.error) {
            alert(response.error);
            console.log(response.error);
            return;
        };
        onClose(false);

    }

    return (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-10" >
            <div className="absolute h-screen w-screen bg-black opacity-40" >
            </div>
            <div className="flex p-2.5 gap-2.5 flex-col z-11 rounded-2xl text-white bg-gray-300 dark:bg-neutral-600" >
                <h1 className="text-2xl flex justify-between text-cyan-500">
                    Название папки:
                    <button
                        className="p-1 rounded-md text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
                        aria-label="Закрыть модальное окно"
                        onClick={() => onClose(false)}                   >
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
                </h1>
                <input onChange={(e) => setTitle(e.target.value)} className="text-2xl mt-1 block w-full px-3 py-2 rounded-md outline-3 hover:outline-emerald-600
                            dark:hover:outline-amber-500 placeholder-gray-300 outline-transparent bg-gray-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300" placeholder="Введите название сюда..." />


                <button className="active-element text-white bg-neutral-500 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={createFolder}>Создать папку</button>
            </div>
        </div>
    );
}