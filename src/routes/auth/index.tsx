import ForgotPassword from "../../components/views/forgot-password";
import Login from "../../components/views/login";
import SetPassword from "../../components/views/set-password";
import  Auth from "../../layouts/auth";


const authRoutes = [
  {
    path: "/auth/",
    element: <Auth/>,
    children: [
      {
        path: 'login',
        element:<Login/>,

      },{
        path:'forgot-password',
        element:<ForgotPassword/>
      },{
        path:'set-password',
        element:<SetPassword/>
      }
    ],
  },
];

export default authRoutes
