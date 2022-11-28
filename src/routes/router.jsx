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
import MyWishlist from "../pages/dashboard/my-wishlist";
import ReportedItems from "../pages/dashboard/reported-items";
import Home from "../pages/home";
import Login from "../pages/login/login";
import NotFound from "../pages/not-found";
import Payment from "../pages/payment/payment";
import AdminRoute from "./admin-route";
import PrivateRoute from "./private-route";
import SellerRoute from "./seller-route";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/add-product",
            element: (
              <SellerRoute>
                <AddProduct />
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/my-products",
            element: (
              <SellerRoute>
                <MyProducts />
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/my-buyers",
            element: (
              <SellerRoute>
                <MyBuyers />
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/my-orders",
            element: <MyOrders />,
          },
          {
            path: "/dashboard/all-sellers",
            element: (
              <AdminRoute>
                <AllSellers />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/all-buyers",
            element: (
              <AdminRoute>
                <AllBuyers />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/reported",
            element: (
              <AdminRoute>
                <ReportedItems />
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/my-wishlist",
            element: <MyWishlist />,
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
