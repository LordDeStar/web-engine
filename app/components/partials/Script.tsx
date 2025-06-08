'use client'
import { useEffect, useState } from "react"
import { FileSelector } from "./FileSelector"


const ScriptParameter = ({ keyName, value, onChange }: { keyName: string, value: any, onChange: Function }) => {
    const [data, setData] = useState<any>(value);
    return (
        <div className="flex gap-2">
            <h1>{keyName}:</h1>
            <input value={data} className="rounded-[6px] px-2 py-0.5 shadow-inset" type={typeof value == "number" ? "number" : "text"} onChange={(e) => { onChange(keyName, e.target.value); setData(e.target.value) }} />
        </div>
    );
}

export const Script = ({ script }: any) => {
    const [scriptFile, setScript] = useState<any>({ title: 'Выбор файла' });
    const [scriptData, setData] = useState<any>();
    const [error, setError] = useState<string | null>("");
    const [params, setParams] = useState<any>({ ...script.params })
    const onValueChange = (key: string, value: any) => {
        script.params[key] = Number(value);
        script.OnStart();
        console.log(script);
    }

    const initScript = () => {
        if (!scriptData) return [];
        return Object.entries(params).map(([key, value], index) => {
            return <ScriptParameter key={index} keyName={key} value={value} onChange={onValueChange} />
        })
    }

    useEffect(() => {
        const load = async () => {
            if (scriptFile.fileUrl) {
                const response = await fetch(scriptFile.fileUrl);
                if (!response.ok) throw new Error(`Ошибка при загрузке скрипта: ${response.status}`);

                const content = await response.text();
                try {
                    const data = new Function(content)();
                    if (!data.name || !data.init || !data.onStart || !data.onUpdate) {
                        setError("Неверный формат скрипта");
                        return;
                    }
                    setData(data);
                    setParams(data.init());
                    script.data = data;
                    script.fileUrl = scriptFile.fileUrl;
                    script.setParams(data.init());
                    script.OnStart();
                }
                catch (err) {
                    console.log(err)
                    setError("Ошибка при попытке загрузки скрипта!");
                }

            }
        }
        load();
    }, [scriptFile])
    return (
        <div className="flex flex-col p-2 gap-y-2.5 ">

            <div className="flex flex-col">
                <div className='flex flex-col'>
                    <h1 className='text-2xl mb-2'>Файл со скриптом:</h1>
                    <FileSelector selected={scriptFile} handleSelect={(file: any) => setScript(file)} allowed={['js']} />
                </div>
                {
                    (scriptData || error) && <div>
                        <h1 className="text-2xl">Начальные Параметры:</h1>
                        <div className="flex flex-col ml-2.5 gap-y-2">
                            {initScript()}
                        </div>
                        {error && <div className="border-3 mt-2 flex justify-center items-center2 border-red-800 rounded-[6px] bg-red-600/20 text-[1.15rem] text-red-500 dark:text-red-400">
                            {error}
                        </div>}
                    </div>

                }

            </div>
            <hr className="border-neutral-800" />


        </div>
    )
}