import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/ijara";
import ReverseTransaction from "@/pages/dashboard/ReverseTransaction";
//import QuestionsPage from "@/pages/dashboard/questions";
//port PromptPage from "@/pages/dashboard/prompt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout><DashboardPage /></DashboardLayout>,
  },
  {
    path: "/ijara",
    element: <DashboardLayout><DashboardPage /></DashboardLayout>,
  },
  {
    path: "/reversetransactions",
    element: <DashboardLayout><ReverseTransaction /></DashboardLayout>,
  },

]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;