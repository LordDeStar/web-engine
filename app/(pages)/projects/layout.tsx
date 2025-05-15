import { AuthProvider } from "@/app/providers/AuthProvider";

const ProjectsLayout = ({ children }: any) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default ProjectsLayout;