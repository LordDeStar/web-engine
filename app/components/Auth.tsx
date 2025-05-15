'use client';
import { UserService } from "@/app/services/user-service";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();


    const classes = 'cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-linear-60 hover:from-red-500 hover:to-orange-500 transition-all duration-500';

    const authClasses = `${classes} ${isAuth ? 'active' : ''}`;
    const regClasses = `${classes} ${isAuth ? '' : 'active'}`;



    const handleAuth = async () => {
        const response = await UserService.authorization(username, password);
        if (response.message) {
            router.push('/projects');
        }
        else {
            setError(response.error);
        }
    }

    const handleRegister = async () => {
        const response = await UserService.registration(username, password)
        if (response.message) {
            router.push('/projects');
        }
        else {
            setError(response.error);
        }
    }

    return (
        <div className="flex h-[100vh] bg-gradient-to-br from-neutral-800 to-neutral-900 text-white flex-col justify-center items-center">
            <div className="flex flex-col w-full max-w-md p-8 rounded-2xl bg-neutral-700 shadow-lg border border-neutral-600">
                <h1 className="text-2xl flex justify-between font-bold text-center mb-6">
                    <span onClick={() => setIsAuth(true)} className={authClasses}>Авторизация</span>
                    |
                    <span onClick={() => setIsAuth(false)} className={regClasses}>Регистрация</span>
                </h1>
                {/* Отображение ошибки */}
                {error && (
                    <div className="flex items-center gap-2 p-3 mb-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 font-medium text-sm transition-opacity duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-red-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-3 2.25v-3m0 0V15m0-3h3m-3 3h-3"
                            />
                        </svg>
                        {error}
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    {/* Поле для никнейма */}
                    <div className="flex flex-col">
                        <label htmlFor="nickname" className="text-lg font-medium mb-1">
                            Никнейм:
                        </label>
                        <input
                            id="nickname"
                            type="text"
                            placeholder="Введите никнейм"
                            onChange={(e) => setUsername(e.target.value)}
                            className="p-3 rounded-lg bg-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-red-700 transition-all duration-300"
                        />
                    </div>

                    {/* Поле для пароля */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-medium mb-1">
                            Пароль:
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Введите пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-3 rounded-lg bg-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-red-700 transition-all duration-300"
                        />
                    </div>

                    {/* Кнопка входа */}
                    {
                        (isAuth) ? <button
                            type="submit"
                            onClick={() => handleAuth()}
                            className="mt-6 py-3 px-6 active-element"
                        >
                            Войти
                        </button> : <button
                            type="submit"
                            onClick={() => handleRegister()}
                            className="mt-6 py-3 px-6 active-element"
                        >
                            Зарегистрироваться
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Auth;