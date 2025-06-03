import { makeAutoObservable } from "mobx";

export class ProjectsStore {
    public projects: any[] = [];
    public filterString: string = ""
    constructor() {
        makeAutoObservable(this);
    }

    getProjects() {
        if (this.filterString == "") return this.projects;
        else return this.projects.filter((project) => project.title.includes(this.filterString))
    }

    setProjects(projects: any[]) {
        this.projects = projects
    }
}

export const projectsStore = new ProjectsStore();