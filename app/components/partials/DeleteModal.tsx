export const DeleteModal = ({ onYesClick, onClose }: any) => {
    return (
        <div className='fixed flex justify-center items-center top-0 left-0 h-screen w-screen z-20'>

            <div className="absolute h-screen w-screen top-0 left-0 opacity-45 z-40 bg-black">
            </div>

            <div className="z-41 text-2xl w-[30%] rounded-2xl flex flex-col gap-2.5 bg-gray-300 dark:bg-neutral-600 p-2.5">
                <h1 className="text-center font-bold text-cyan-600 dark:text-amber-500">Вы уверены, что хотите удалить проект?</h1>
                <div className="flex justify-around mt-2.5">

                    <button className="active-element w-[30%] h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={() => { onYesClick(); onClose(); }}>Да</button>


                    <button className="active-element w-[30%] h-full text-white bg-neutral-400 dark:bg-neutral-700 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400" onClick={onClose}>Нет</button>
                </div>
            </div>

        </div>
    );
}