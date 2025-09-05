import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import RegisterPage from "../Pages/login/register";
import LoginPage from "../Pages/login/login";
import ProjectList from "../Pages/ProjectList";
import AddProject from "../Pages/add-product";
import DashBoard from "../Pages/DashBoard";
import AuthLayout from "../layout/AuthLayout";
import AppLayout from "../layout/AppLayout";

const AppRouter = () => {

  const router = createBrowserRouter([

{
  path:"/",
  element:<AuthLayout />,
  children:[
    {index:true,element:<LoginPage/>},
  {path:"/register",element:<RegisterPage />},
]
},

{
  path:"/",
  element:<AppLayout />,
  children:[
    {path:"/dashboard",element:<DashBoard/>},
      { path:"/projectList", element:<ProjectList /> },
      {path:"/add-project",element:<AddProject />}
  ]
}

]);

  return (
      <RouterProvider router={router} />
  );
};

export default AppRouter;
