import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const CheckoutButton = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/checkout" } });
    } else {
      navigate("/checkout");
    }
  };

  return (
    <button className={style.checkoutButton} onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
