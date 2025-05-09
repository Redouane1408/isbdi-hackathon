import { AppSidebar } from "@/Components/app-sidebar";
import { SidebarProvider } from "@/Components/ui/sidebar";

const Sidebar = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  );
};

export default Sidebar;