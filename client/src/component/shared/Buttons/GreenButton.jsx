import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const GreenButton = ({ title }) => {
  return (
    <Link to="/products">
      {" "}
      <button className={style.greenbtn}>{title}</button>
    </Link>
  );
};

export default GreenButton;
