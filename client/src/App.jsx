import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  return <RouterProvider router={router} />;
};

export default App;
