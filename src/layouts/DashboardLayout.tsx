import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "@/Components/Header";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

const DashboardLayout = ({ children, title = "Ijara" }: DashboardLayoutProps) => {
  const handleNewChat = () => {
    // Add your new chat logic here
    console.log("New chat clicked");
  };

  return (
    <div className="flex-1 flex bg-background w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={title} onNewChat={handleNewChat} />
        <main className="flex-1 flex justify-center">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;