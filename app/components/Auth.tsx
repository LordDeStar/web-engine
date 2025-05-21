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


    const classes = 'cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-linear-60 hover:from-cyan-400 hover:to-emerald-400 dark:hover:from-red-500 dark:hover:to-orange-500 transition-all duration-500';

    const authClasses = `${classes} ${isAuth ? 'scale-[1.25] text-transparent bg-clip-text bg-linear-60 from-cyan-400 to-emerald-400 dark:from-red-500 dark:to-orange-500' : ''}`;
    const regClasses = `${classes} ${isAuth ? '' : 'scale-[1.25] text-transparent bg-clip-text bg-linear-60 from-cyan-400 to-emerald-400 dark:from-red-500 dark:to-orange-500'}`;



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
        <div className="flex h-[100vh] bg-transparent text-white flex-col justify-center items-center">
            <div className="flex flex-col w-full max-w-md p-8 rounded-2xl bg-gray-400 dark:bg-neutral-700 shadow-lg transition-colors duration-300 ">
                <h1 className="text-2xl flex justify-between font-bold text-center mb-6">
                    <span onClick={() => setIsAuth(true)} className={authClasses}>Авторизация</span>
                    |
                    <span onClick={() => setIsAuth(false)} className={regClasses}>Регистрация</span>
                </h1>
                {/* Отображение ошибки */}
                {error && (
                    <div className="flex items-center gap-2 p-3 mb-4 bg-red-500/20 border border-red-500 rounded-lg text-red-500 font-medium text-sm transition-opacity duration-300">
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
                            className="p-3 rounded-lg outline-transparent bg-neutral-600 text-white outline-3 hover:outline-emerald-500
                            dark:hover:outline-amber-500 placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300"
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
                            className="p-3 rounded-lg outline-transparent bg-neutral-600 text-white outline-3 hover:outline-emerald-600
                            dark:hover:outline-amber-500 placeholder-neutral-400 focus:outline-none focus:ring-3 focus:ring-cyan-500 dark:focus:ring-red-700 transition-colors duration-300"
                        />
                    </div>

                    {/* Кнопка входа */}
                    {
                        (isAuth) ? <button
                            type="submit"
                            onClick={() => handleAuth()}
                            className="mt-6 py-3 px-6 active-element text-white bg-neutral-500 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400"
                        >
                            Войти
                        </button> : <button
                            type="submit"
                            onClick={() => handleRegister()}
                            className="mt-6 py-3 px-6 active-element text-white bg-neutral-500 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400"
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