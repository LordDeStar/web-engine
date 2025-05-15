import { Canvas } from "@/app/components/Canvas";
import { Engine } from "@/app/components/Engine";
import { FileExplorer } from "@/app/components/FileExplorer";
import { Inspector } from "@/app/components/Inspector";
import { ObjectHierarchy } from "@/app/components/ObjectHierarchy";
import { ToolPanel } from "@/app/components/ToolPanel";

type Props = {
    params: Promise<{ projectId: string }>
}

const Project = async ({ params }: Props) => {
    const id = Number((await params).projectId);
    return (
        <Engine>
            <div className="flex flex-col h-screen text-white border-collapse">
                <div className="w-full h-12 border-b-1 border-white border-collapse">
                    <ToolPanel />
                </div>
                <div className="flex w-full h-[calc(100vh-248px)] ">
                    <div className="w-1/4 border-r-1 border-white border-collapse">
                        <ObjectHierarchy />
                    </div>
                    <div className="w-2/4 border-collapse">
                        <Canvas />
                    </div>
                    <div className="w-1/4 border-l-1 border-white border-collapse">
                        <Inspector />
                    </div>
                </div>
                <div className="w-full h-50 border-t-1 border-white border-collapse">
                    <div>
                        <FileExplorer project={id} />
                    </div>
                </div>
            </div>
        </Engine>
    );
}

export default Project;