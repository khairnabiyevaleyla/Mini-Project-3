import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Header = () => {
  const LeftLinks = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/products" },
    { name: "Product", url: "/products" },
    { name: "Blog", url: "/blog" },
  ];

  const RightLinks = [
    { name: "Account", url: "/login" },
    { name: "Wishlist", url: "/wishlist" },
    { name: "Cart", url: "/cart" },
  ];

  return (
    <header className={style.container}>
      <nav>
        <div className="grid grid-cols-4 gap-5 justify-center items-center">
          {/* Left Links */}
          <ul className={style.links}>
            {LeftLinks.map((link) => (
              <li key={link.name} className={style.linksitem}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          <Link to="/">
            <div className={style.logo}>
              <img
                src="https://new-ella.myshopify.com/cdn/shop/files/ELLA-white_230x.png?v=1733293883"
                alt="logo"
              />
            </div>
          </Link>

          {/* Search Input */}
          <div className={style.search}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-5">
            {/* Right Links*/}
            <ul className={style.links}>
              {RightLinks.map((link) => (
                <li key={link.name} className={style.linksitem}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <select className={style.languageSelect}>
              <option value="en">EN</option>
              <option value="az">AZ</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
