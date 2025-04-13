'use client'
import Link from 'next/link';
import { useState } from 'react';
export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-neutral-900 text-white w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-5xl font-bold">
                    Web Engine
                </div>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/editor">
                        <p className="active-element">
                            Редактор
                        </p>
                    </Link>

                    <a href="#" className="active-element">
                        Документация
                    </a>
                    <a href="#" className="active-element">
                        Профиль
                    </a>
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
