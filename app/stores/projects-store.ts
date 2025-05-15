import { makeAutoObservable } from "mobx";

export class ProjectsStore {
    public projects: any[] = [];
    constructor() {
        makeAutoObservable(this);
    }
    setProjects(projects: any[]) {
        this.projects = projects
    }
}

export const projectsStore = new ProjectsStore();