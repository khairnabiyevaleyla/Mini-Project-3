import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constant/QuerieKeys";
import { getApi } from "@/http/api";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [cookies, setCookie] = useCookies(["lang"]);
  const [lang, setLang] = useState(cookies.lang ?? "en");
  const location = useLocation();
  const [term, setTerm] = useState("");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const handleLangChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    setCookie("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  const { data } = useQuery({
    queryKey: [QueryKeys.products],
    queryFn: () =>
      getApi(`/products?populate=*&filters[name][$contains]=${term}`),
  });

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const LeftLinks = [
    { name: t("navbar.home"), url: "/" },
    { name: t("navbar.shop"), url: "/products" },
    { name: t("navbar.product"), url: "/products" },
    { name: t("navbar.blog"), url: "/blog" },
  ];

  const RightLinks = [
    { name: t("navbar.account"), url: "/login" },
    { name: t("navbar.wishlist"), url: "/wishlist" },
    { name: t("navbar.cart"), url: "/cart" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`${style.container} ${
        isHomePage ? style.homeHeader : style.defaultHeader
      }`}
    >
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
                src={
                  isHomePage
                    ? "https://new-ella.myshopify.com/cdn/shop/files/ELLA-white_230x.png?v=1733293883"
                    : "https://new-ella.myshopify.com/cdn/shop/files/ELLA-black_230x.png?v=1733293883"
                }
                alt="ELLA"
                className="h-8 object-contain"
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
              value={term}
              onChange={handleChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && term.trim()) {
                  e.preventDefault();
                  window.location.href = `/search?query=${encodeURIComponent(
                    term
                  )}`;
                }
              }}
            />
          </div>

          <div className="flex items-center gap-5">
            {/* Right Links */}
            <ul className={style.links}>
              {RightLinks.map((link) => (
                <li key={link.name} className={style.linksitem}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <select
              className={style.languageSelect}
              onChange={handleLangChange}
              value={lang}
            >
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
