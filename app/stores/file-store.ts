import { makeAutoObservable } from 'mobx';

class FileStore {
    public files: any[] = [];
    public folders: any[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setFolders(newFolders: any[]) {
        this.folders = newFolders;
    }

    setFiles(newFiles: any[]) {
        this.files = newFiles;
    }

    getFiles() {
        return this.files;
    }

    getFolders(): any[] {
        return this.folders;
    }
}


export const fileStore = new FileStore();