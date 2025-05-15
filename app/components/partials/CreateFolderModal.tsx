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
            <div className="flex p-2.5 gap-2.5 flex-col z-11 rounded-2xl bg-linear-60 from-neutral-600 to-neutral-700" >
                <h1 className="text-2xl flex justify-between">
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
                <input onChange={(e) => setTitle(e.target.value)} className="text-2xl mt-1 block w-full px-3 py-2 bg-neutral-800  rounded-md text-white placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-red-700 transition-all duration-300" placeholder="Введите название сюда..." />

                <button className="active-element" onClick={createFolder}>Создать папку</button>
            </div>
        </div>
    );
}