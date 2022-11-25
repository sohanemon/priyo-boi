import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Category from "../pages/category";
import Dashboard from "../pages/dashboard";
import AddProduct from "../pages/dashboard/add-product";
import Home from "../pages/home";
import Login from "../pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/add-product",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Login reg />,
      },
    ],
  },
]);

export default router;
