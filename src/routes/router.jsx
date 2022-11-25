import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Category from "../pages/category";
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
