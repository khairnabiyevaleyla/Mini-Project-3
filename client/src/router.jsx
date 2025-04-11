import { createBrowserRouter } from "react-router";
import Layout from "@/layout/index";
import HomePage from "@/pages/homepage/HomePage";
import WishlistPage from "@/pages/wishlist/WishlistPage";
import ProductPage from "@/pages/productpage/ProductPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductDetail from "@/pages/product/ProductDetail";
import SearchResults from "@/pages/SearchResults/SearchResults";
import ProtectedRoute from "@/components/ProtectedRoute";
import Checkout from "@/pages/checkout/Checkout";

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
        element: <ProductPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/blog/:id",
        element: <div>Blog Detail</div>,
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: <div>Cart</div>,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
