import { makeAutoObservable, observable } from "mobx";
import SDK from '@/public/assets/scripts/engine';
import { ProjectService } from "../services/project-service";
class SceneStore {
    public engine: any;
    private currentTheme: string;
    @observable public objects: any[] = []; // Наблюдаемый массив объектов

    constructor() {
        makeAutoObservable(this);
        this.currentTheme = 'light';
    }

    public initEngine(): void {
        this.engine = new SDK.Engine();
    }

    public setTheme(theme: string): void {
        this.currentTheme = theme;
        if (this.engine) this.engine.start(theme);
    }

    public async addObject(tag: string): Promise<void> {
        const geometry = await SDK.TemplateGeometry.loadFromOBJ('/assets/models/cube/cube.obj');
        const renderer = new SDK.Renderer(geometry, '/assets/models/cube/default.mtl', true);
        const box = new SDK.GameObject(tag);
        box.transform.position[0] = 0;
        box.transform.position[1] = 0;
        box.transform.position[2] = 15;

        box.AddComponent(renderer);

        // Добавляем объект в наблюдаемый массив
        this.objects.push(box);

        // Синхронизируем с движком
        this.engine._objects = this.objects;
        this.engine.start(this.currentTheme);
    }

    public removeObject(object: any): void {
        // Удаляем объект из наблюдаемого массива
        this.objects = this.objects.filter((obj: any) => obj !== object);

        // Синхронизируем с движком
        this.engine._objects = this.objects;
    }

    public async saveToJson(projectId: number): Promise<void> {
        const jsonObjects = await Promise.all(
            this.objects.map(async (object) => {
                return await object.toJson()
            })
        );
        const response = await ProjectService.saveProject(projectId, jsonObjects);
    }
    public async loadFromJson(projectId: number): Promise<void> {

        const path = await ProjectService.loadProject(projectId);

        const response = await fetch(path);
        if (response.ok) {
            const objects: any[] = JSON.parse(await response.text());

            let json = objects.map((object) => {
                return JSON.parse(object);
            });
            console.log(json);
        }

    }
}

export const sceneStore = new SceneStore();