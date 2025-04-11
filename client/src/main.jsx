import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./i18n";
import { CookiesProvider } from "react-cookie";
import "remixicon/fonts/remixicon.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const ShowDevToolsInDevelopment = import.meta.env.MODE === "development" && (
  <ReactQueryDevtools initialIsOpen={false} />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          {" "}
          <CartProvider>
            {" "}
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </CookiesProvider>
        {ShowDevToolsInDevelopment}
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
