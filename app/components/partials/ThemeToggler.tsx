'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/app/providers/ThemeProvider';
import { sceneStore } from '@/app/stores/scene-store';

export const ThemeToggler = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('Toggler must be used within a ThemeProvider');

    const { theme, toggleTheme } = context;
    sceneStore.setTheme(theme);
    return (
        <div
            onClick={toggleTheme}
            className='relative w-14 h-7 rounded-full cursor-pointer bg-gray-300 overflow-hidden '
        >
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-amber-600 dark:to-red-700 transition-color duration-300 z-9"></div>
            <div className="toggle-circle"></div>
        </div>
    );
};