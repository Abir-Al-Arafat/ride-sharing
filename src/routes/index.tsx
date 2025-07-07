import { createBrowserRouter, Navigate } from "react-router-dom";
import adminRoutes from "./admin";


const routes = [
  {
    path: "",
    element: <Navigate replace to="/" />,
  },
  ...adminRoutes,
];

const router = createBrowserRouter(routes);

export default router;
