import { Navigate } from "react-router-dom";
import MainLayout from "../../layouts/main";
import Dashboard from "../../components/views/dashbord";
import Parents from "../../components/views/parents";
import Drivers from "../../components/views/drivers";
import Transactions from "../../components/views/transactions";
import Notifications from "../../components/views/notifications";

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
        index: true,
        element: <Dashboard />,
      }, {
        path: '/parents',
        element: <Parents />,

      }, {
        path: '/drivers',
        element: <Drivers />,
      }, {
        path: "/transactions",
        element: <Transactions />,
      },{
        path:'/notifications',
        element:<Notifications/>
      }
    ],
  },
];

export default adminRoutes;
