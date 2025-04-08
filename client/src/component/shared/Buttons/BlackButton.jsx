import React from "react";
import style from "./style.module.scss";
import { useCart } from "@/context/CartContext";

const BlackButton = ({ title, product }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    console.log("Button clicked");
    console.log("Product data:", product);
    if (product) {
      addToCart(product);
      console.log("Product added to cart");
    } else {
      console.log("No product data available");
    }
  };

  return (
    <button className={style.blackbtn} onClick={handleClick}>
      {title}
    </button>
  );
};

export default BlackButton;
