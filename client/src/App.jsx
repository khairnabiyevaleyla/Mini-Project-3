import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { useTranslation } from "react-i18next";
import { CartProvider } from "@/context/CartContext";

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
