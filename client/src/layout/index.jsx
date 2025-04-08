import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
import CartModal from "@/component/CartModal/CartModal";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartModal />
    </>
  );
};

export default Layout;
