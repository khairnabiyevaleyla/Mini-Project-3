import React from "react";
import style from "./style.module.scss";
import GreenButton from "@/component/shared/Buttons/GreenButton";
import WhiteButton from "@/component/shared/Buttons/WhiteButton";

const Banner = ({ title, text }) => {
  return (
    <div className={style.banner}>
      <img
        src="https://new-ella.myshopify.com/cdn/shop/files/slideshow-1.png?v=1733293884&width=1880"
        alt="banner"
      />
      <div className={style.bannerText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center sm:items-start">
          <GreenButton title="Shop Now" />
          <WhiteButton title="Discover Recipes" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
