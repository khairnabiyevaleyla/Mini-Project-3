import React from "react";
import style from "./style.module.scss";

const GreenButton = ({ title }) => {
  return <button className={style.greenbtn}>{title}</button>;
};

export default GreenButton;
