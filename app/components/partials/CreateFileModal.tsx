import { ProjectService } from "@/app/services/project-service";
import { useState } from "react";

export const CreateFileModal = ({ project, parent, onClose }: any) => {
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const handleDrag = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === 'dragenter' || event.type === 'dragover') {
            setIsDrag(true);
        }
        else if (event.type === 'dragleave') {
            setIsDrag(false);
        }
    }
    const handleDrop = async (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer.files) {
            if (event.dataTransfer.files.length != 1) {
                alert('Файл должен быть один!');
                return;
            }
            const formData = new FormData();
            formData.append('file', event.dataTransfer.files[0]);
            formData.append('parentId', parent);
            formData.append('projectId', project);

            const response = await ProjectService.uploadFile(project, parent, formData);
            if (response?.error) {
                alert(response.error);
                return;
            }

            setIsDrag(false);
            onClose(false);
        }
    }

    return (
        <div className='fixed flex justify-center items-center top-0 left-0 h-screen w-screen z-10'>

            <div className="absolute h-screen w-screen top-0 left-0 opacity-45 bg-black">
            </div>

            <div className="z-11 w-[30%] rounded-2xl flex flex-col gap-2.5 bg-neutral-600 p-2.5">
                <button
                    className="relative left-[95%] p-1 w-8 rounded-md text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
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
                <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className='flex justify-center items-center h-[10vh] bg-neutral-800 rounded-2xl border-dashed border-5 border-neutral-900' >
                    <h1 className="text-2xl w-fit flex justify-center items-center">Перетащите файл сюда</h1>
                </div>


            </div>

        </div>
    )
}