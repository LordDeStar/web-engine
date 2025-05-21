import api from "../utils/api";
import { userStore } from "../stores/user-store";

export class UserService {
    public static async registration(username: string, password: string): Promise<any> {
        const { data } = await api.post("users/create-user", { username, password });
        if (data.message == "success") return await UserService.authorization(username, password);
        else if (data.message[0]) {
            return { error: data.message[0] };
        }
        return { error: data.error }
    }

    public static async authorization(username: string, password: string): Promise<any> {
        const { data } = await api.post('users/auth', { username, password });
        if (data.access_token) {
            userStore.setToken(data.access_token);
            console.log(data);
            return { message: "ok" };
        }
        return { error: data.message[0] };
    }
}