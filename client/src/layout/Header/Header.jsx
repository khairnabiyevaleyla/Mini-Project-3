import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Header = () => {
  const LeftLinks = [
    {
      name: "Home",
      url: "/",
    },
    { name: "Shop", url: "/products" },
    { name: "Product", url: "/products" },
    { name: "New In", url: "/products" },
    { name: "Blog", url: "/blog" },
  ];

  const RightLinks = [
    { name: "Account", url: "/login" },
    { name: "Wishlist", url: "/wishlist" },
    { name: "Cart", url: "/cart" },
  ];

  return (
    <header
      className="
    bg-black"
    >
      <nav>
        <div className="grid grid-cols-3">
          <div>
            {" "}
            <ul className={style.leftLinks}>
              {LeftLinks.map((link) => (
                <li key={link.name} className={style.links}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.logo}>
            <img
              src="https://new-ella.myshopify.com/cdn/shop/files/ELLA-white_230x.png?v=1733293883"
              alt="logo"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
