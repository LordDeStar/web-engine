import { makeAutoObservable } from "mobx";

export class UserStore {
    public token: string | null = null;
    constructor() {
        makeAutoObservable(this);
    }
    setToken(someToken: string) {
        this.token = someToken
        localStorage.setItem('jwtToken', this.token);
    }

    clearToken() {
        this.token = null;
        localStorage.removeItem('jwtToken');
    }

    get isAuthenticated() {
        return !!this.token;
    }

    loadTokenFormStorage() {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            this.token = token
            return true;
        }
        else {
            return false
        }
    }
}

export const userStore = new UserStore();