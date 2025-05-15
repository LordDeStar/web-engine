import axios from "axios";
import { userStore } from "../stores/user-store";
import { apiUrl } from "@/settings";

const api = axios.create({
    baseURL: apiUrl
});

api.interceptors.request.use((config) => {
    userStore.loadTokenFormStorage();
    if (userStore.isAuthenticated) {
        config.headers.Authorization = `Bearer ${userStore.token}`;
    }
    return config;
});

api.interceptors.response.use(
    // Успешный ответ
    (response) => {
        return response; // Просто возвращаем успешный ответ
    },
    // Обработка ошибок
    (error) => {
        // Если ошибка связана с HTTP-статусом (например, 400 Bad Request)
        if (error.response) {
            if (error.response.status === 401) {
                userStore.clearToken();
            }
            // Возвращаем объект ошибки без выброса исключения
            return Promise.resolve(error.response); // или Promise.reject(error.response), если хотите передать ошибку дальше
        }

        // Если ошибка не связана с HTTP (например, проблемы с сетью)
        return Promise.reject(error);
    }
);


export default api;