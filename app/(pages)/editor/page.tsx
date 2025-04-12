import { ObjectHierarchy } from "@/app/components/ObjectHierarchy";
import { Engine } from "@/app/components/Engine";
import { Canvas } from "@/app/components/Canvas";
import { ToolPanel } from "@/app/components/ToolPanel";
import { Inspector } from "@/app/components/Inspector";
const Editor = () => {

    return (
        <Engine>
            <div className="flex flex-col h-screen text-white border-1 border-white border-collapse">
                <div className="w-full h-12 border-1 border-white border-collapse">
                    <ToolPanel />
                </div>
                <div className="flex w-full h-[calc(100vh-248px)] border-1 border-white border-collapse">
                    <div className="w-1/4 border-1 border-white border-collapse">
                        <ObjectHierarchy />
                    </div>
                    <div className="w-2/4 border-1 border-white border-collapse">
                        <Canvas />
                    </div>
                    <div className="w-1/4 border-1 border-white border-collapse">
                        <Inspector />
                    </div>
                </div>
                <div className="w-full h-50 border-1 border-white border-collapse">
                    bottom
                </div>
            </div>
        </Engine>

    );
}
export default Editor;