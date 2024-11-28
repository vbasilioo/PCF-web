import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

interface ILayout {
    children: React.ReactNode;
    className?: string;
}

export default function Layout({ children, className }: ILayout) {
    return (
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ${className}`}>
                {children}
            </div>
        </SidebarInset>
        </SidebarProvider>
    );
}