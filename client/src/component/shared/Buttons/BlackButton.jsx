import React from "react";
import style from "./style.module.scss";

const BlackButton = ({ title }) => {
  return (
    <>
      {" "}
      <button className={style.blackbtn}>{title}</button>
    </>
  );
};

export default BlackButton;
