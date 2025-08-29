import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "../App";
import RegisterPage from "../Pages/login/register";
import LoginPage from "../Pages/login/login";

const AppRouter = () => {

  const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
  },

  {
    path:"/register",
    element:<RegisterPage />
  },
  {
    path:"/",
    element:<LoginPage />
  }
]);

  return (
      <RouterProvider router={router} />
  );
};

export default AppRouter;
