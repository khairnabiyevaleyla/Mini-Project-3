import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const LightButton = ({ title }) => {
  return (
    <Link to="/products">
      {" "}
      <button className={style.lightbtn}>{title}</button>
    </Link>
  );
};

export default LightButton;
