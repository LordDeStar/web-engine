'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import SDK from '../../public/assets/scripts/engine';

// Создаем контекст
const EngineContext = createContext<any>(null);

// Хук для использования контекста
export const useEngine = () => {
    const context = useContext(EngineContext);
    if (!context) {
        throw new Error('useEngine must be used within an EngineProvider');
    }
    return context;
};

// Провайдер контекста
export const EngineProvider = ({ children }: any) => {
    const [engine, setEngine] = useState<any>(null);
    const [selectedObject, setSelectedObject] = useState<any>(null);

    // Функция для выбора объекта
    const handleSelect = (gameObject: any) => {
        setSelectedObject(gameObject); // Обновляем состояние
    };

    // Инициализация движка
    useEffect(() => {
        const initializeEngine = async () => {
            const newEngine = new SDK.Engine();
            setEngine({ engine: newEngine, sdk: SDK, selectObject: handleSelect });
        };

        initializeEngine();
    }, []);

    // Если движок еще не инициализирован, показываем загрузку
    if (!engine) {
        return <div>Loading...</div>;
    }

    // Передаем в контекст движок и выбранное состояние
    return (
        <EngineContext.Provider value={{ ...engine, selectedObject }}>
            {children}
        </EngineContext.Provider>
    );
};