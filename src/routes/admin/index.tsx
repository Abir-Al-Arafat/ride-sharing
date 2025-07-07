import { Navigate } from "react-router-dom";
import MainLayout from "../../layouts/main";
import Dashboard from "../../components/views/dashbord";

const adminRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Navigate replace to="dashboard" />,
      },
      {
         index:true,
        element: <Dashboard/>,
      }
    ],
  },
];

export default adminRoutes;
