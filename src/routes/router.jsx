import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Category from "../pages/category";
import Home from "../pages/home";

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
    ],
  },
]);

export default router;
