import React from "react";
import style from "./style.module.scss";

const WhiteButton = ({ title }) => {
  return <button className={style.whitebtn}>{title}</button>;
};

export default WhiteButton;
