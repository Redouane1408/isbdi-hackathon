import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/ijara";
//import QuestionsPage from "@/pages/dashboard/questions";
//port PromptPage from "@/pages/dashboard/prompt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout><DashboardPage /></DashboardLayout>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout><DashboardPage /></DashboardLayout>,
  },

]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;