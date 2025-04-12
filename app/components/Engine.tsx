import { EngineProvider } from "@/app/providers/EngineProvider";

export const Engine = ({ children }: { children: React.ReactNode }) => {
    return (
        <EngineProvider width='50vw' height='60vh'>
            {children}
        </EngineProvider>
    );
}