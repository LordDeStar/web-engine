'use client'

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { projectsStore } from "@/app/stores/projects-store";
import { ProjectService } from "@/app/services/project-service";
import { ProjectItem } from "@/app/components/partials/ProjectItem";
import { ProjectPanel } from "@/app/components/partials/ProjectPanel";
import { useRouter } from "next/navigation";


const Projects = observer(() => {
    const router = useRouter();
    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await ProjectService.getProjects();
            console.log(projects);
            if (projects.statusCode === 401) {
                router.push('/');
                return;
            }
            projectsStore.setProjects(projects);
        };

        fetchProjects();
    }, []);


    const getProjects = () => {

        if (projectsStore.projects) {
            console.log(projectsStore.projects)
            return projectsStore.projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))
        }
        else {
            return [];
        }


    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center h-[90vh] w-full">
            <ProjectPanel />
            <div className="p-10 flex flex-col gap-6 min-h-[500px] overflow-y-scroll h-[80%] w-[80%] rounded-br-3xl rounded-bl-3xl shadow-inset shadow-2xl">
                {/* Используем данные из MobX-хранилища */}
                {getProjects()}
            </div>
        </div>
    );
});

export default Projects;