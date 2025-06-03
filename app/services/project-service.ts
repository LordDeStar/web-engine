import { error } from 'console';
import { fileStore } from "../stores/file-store";
import api from "../utils/api";

export class ProjectService {

    public static async getProjects(): Promise<any> {
        const { data } = await api.get('/projects/all');
        return data;
    }

    public static async createProject(title: string, description: string): Promise<any> {
        const { data } = await api.post('/projects/create', { title, description });

        if (data.error) {
            return { error: data.error };
        }
        return await this.getProjects();
    }

    public static async getStartFolders(project: number): Promise<any> {
        const { data } = await api.get(`/projects/${project}/start-folders`);

        if (data.error) {
            return { error: data.error };
        }
        fileStore.setFolders(data);

    }

    public static async getFolders(folderId: number): Promise<any> {
        const { data } = await api.get(`/projects/${folderId}/folders`);
        if (data.error) {
            return { error: data.error };
        }
        fileStore.setFolders(data);
    }


    public static async createFolder(projectId: number, title: string, parentId: number | undefined) {
        const { data } = await api.post('/projects/create-folder', { title, projectId, parentId });
        if (data.error) {
            return { error: data.error };
        }
        if (parentId) {
            await this.getFolders(parentId);
        }

        else await this.getStartFolders(projectId);
    }


    public static async getFiles(parentId: number | undefined) {
        const { data } = await api.get(`/projects/${parentId}/files`);
        if (data.error) {
            return { error: data.error };
        }
        fileStore.setFiles(data);
    }
    public static async getStartFiles(projectId: number) {
        const { data } = await api.get(`/projects/${projectId}/start-files`);
        if (data.error) {
            return { error: data.error };
        }
        fileStore.setFiles(data);
    }

    public static async uploadFile(projectId: number, parentId: number, formData: any) {
        const { data } = await api.post('/projects/upload-file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (data.error) {
            return { error: data.error };
        }
        if (parentId == 0) {
            await this.getStartFiles(projectId);
        }
        await this.getFiles(parentId);

    }

    public static async saveProject(projectId: number, json: string[]) {
        const { data } = await api.post(`/projects/${projectId}/save`, { json });

        if (data.error) {
            return { error: data.error };
        }
        return { message: data.message };
    }


    public static async loadProject(projectId: number) {
        const { data } = await api.get(`/projects/${projectId}/load`);

        if (data.error) {
            return { error: data.error };
        }
        return data;
    }
    public static async downloadArchive(projectId: number) {
        const response = await api.get(`/projects/${projectId}/export`, {
            responseType: 'blob'
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'project.zip');
        document.body.appendChild(link);
        link.click();

        // Очищаем ссылку
        link.remove();

    }

}