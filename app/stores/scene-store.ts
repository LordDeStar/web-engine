import { Transform } from './../components/partials/Transform';

import { makeAutoObservable, observable } from "mobx";
import SDK from '@/public/assets/scripts/engine';
import { ProjectService } from "../services/project-service";
import { GameService } from '../services/game-service';
class SceneStore {
    public engine: any;
    private currentTheme: string;
    @observable public allowedToStart: boolean;
    @observable public objects: any[] = []; // Наблюдаемый массив объектов

    constructor() {
        makeAutoObservable(this);
        this.currentTheme = 'light';
        this.allowedToStart = false;
    }

    public initEngine(): void {
        this.engine = new SDK.Engine();
    }

    public setTheme(theme: string): void {
        this.currentTheme = theme;
        if (this.engine) this.engine.start(theme);
    }

    public clearObjects(): void {
        this.objects = [];
        this.engine._objects = [];
    }

    public addComponent(object: any, componentName: string, data?: any, subname?: string) {
        switch (componentName) {
            case 'script':
                if (!data) throw new Error('DATA required for script');
                const script = new SDK.Script(data);
                object.AddComponent(script);
                break;
            case 'camera':
                const camera = new SDK.Camera(subname);
                object.AddComponent(camera);
                break;

        }
        this.engine.start(this.currentTheme);
    }

    public start(): void {
        this.allowedToStart = !this.allowedToStart;

        this.engine._objects.forEach((element: any) => {
            element.components.forEach((component: any) => {
                component.allowedToStart = this.allowedToStart;
            });
        });
    }

    public async addObject(tag: string): Promise<void> {
        const renderer = new SDK.Renderer('/assets/models/cube/cube.obj', '/assets/models/cube/default.mtl', true, undefined, [1, 1, 1, 1]);
        const box = new SDK.GameObject(tag);
        box.transform.position[0] = 0;
        box.transform.position[1] = 0;
        box.transform.position[2] = 15;

        box.AddComponent(renderer);

        // Добавляем объект в наблюдаемый массив

        if (this.objects.length == 0) {
            const cameraObject = new SDK.GameObject("camera-object");
            cameraObject.transform.position[0] = 0;
            cameraObject.transform.position[1] = 0;
            cameraObject.transform.position[2] = 0;

            this.addComponent(cameraObject, 'camera', undefined, 'main-camera');

            this.objects.push(cameraObject);
        }
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
        console.log(path);
        const response = await fetch(path.path);
        if (response.ok) {
            this.objects = [];
            const objects: any[] = await response.json();

            let json = objects.map((object) => {
                return JSON.parse(object);
            });
            this.objects = await Promise.all(json.map(async (obj) => {
                return await GameService.createObjectsFromJson(obj);
            }))
            console.log(this.objects)
            this.engine._objects = this.objects;

            console.log(this.engine._objects);
            this.engine.start(this.currentTheme);
        }

    }

}

export const sceneStore = new SceneStore();