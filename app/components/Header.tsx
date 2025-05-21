'use client'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { userStore } from '../stores/user-store';
import { useRouter } from 'next/navigation';
import { ThemeToggler } from './partials/ThemeToggler';
import { ThemeContext } from '../providers/ThemeProvider';
export const Header = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('Что-то пошло не так');
    const { theme } = context;


    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleExit = () => {
        userStore.clearToken();
        router.push('/');
    }

    return (
        <header className="bg-gray-300 transition-colors duration-300 dark:bg-neutral-900 dark:text-white w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-5xl h-full text-cyan-500 dark:text-amber-500">
                    Web Engine
                </div>
                <nav className="hidden md:flex space-x-4 md:items-center">
                    <Link href="/projects">
                        <p className="active-element text-white bg-neutral-400 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400">
                            Проекты
                        </p>
                    </Link>

                    <a href="#" className="active-element text-white bg-neutral-400 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400">
                        Документация
                    </a>
                    <button onClick={() => { handleExit() }} className="active-element text-white bg-neutral-400 dark:bg-neutral-800 before:bg-linear-45 before:content-[''] before:from-cyan-500 before:to-emerald-500 dark:before:from-red-600 dark:before:to-orange-400">
                        Выйти
                    </button>

                    <ThemeToggler />
                </nav>
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden bg-neutral-800">
                    <a href="#" className="block active-element">
                        Главная
                    </a>
                    <a href="#" className="block active-element">
                        Документация
                    </a>
                </nav>
            )}
        </header>
    );
};
