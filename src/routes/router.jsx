import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Category from "../pages/category";
import Dashboard from "../pages/dashboard";
import AddProduct from "../pages/dashboard/add-product";
import AllBuyers from "../pages/dashboard/all-buyers";
import AllSellers from "../pages/dashboard/all-sellers";
import MyBuyers from "../pages/dashboard/my-buyers";
import MyOrders from "../pages/dashboard/my-orders";
import MyProducts from "../pages/dashboard/my-products";
import ReportedItems from "../pages/dashboard/reported-items";
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
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/add-product",
            element: <AddProduct />,
          },
          {
            path: "/dashboard/my-products",
            element: <MyProducts />,
          },
          {
            path: "/dashboard/my-buyers",
            element: <MyBuyers />,
          },
          {
            path: "/dashboard/my-orders",
            element: <MyOrders />,
          },
          {
            path: "/dashboard/all-sellers",
            element: <AllSellers />,
          },
          {
            path: "/dashboard/all-buyers",
            element: <AllBuyers />,
          },
          {
            path: "/dashboard/reported",
            element: <ReportedItems />,
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
