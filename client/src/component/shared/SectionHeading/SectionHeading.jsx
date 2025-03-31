import React from "react";
import style from "./style.module.scss";

const SectionHeading = ({ title }) => {
  return (
    <div className={style.heading}>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeading;
