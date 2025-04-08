import { createBrowserRouter } from "react-router";
import Layout from "@/layout/index";
import HomePage from "@/pages/homepage/HomePage";
import WishlistPage from "@/pages/wishlist/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <div>Not Found</div>,
      },
      {
        path: "/products",
        element: <div>Products</div>,
      },
      {
        path: "/products/:id",
        element: <div>Products detail</div>,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/blog/:id",
        element: <div>Blog Detail</div>,
      },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/cart", element: <div>Cart</div> },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
]);
