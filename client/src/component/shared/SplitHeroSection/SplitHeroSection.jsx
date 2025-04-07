import React from "react";
import styles from "./style.module.scss";
import LightButton from "@/component/shared/Buttons/LightButton";

const SplitHeroSection = ({
  backgroundImage,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={`${styles.section} ${reverse ? styles.reverse : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <LightButton title="Shop Now" />
      </div>
    </div>
  );
};

export default SplitHeroSection;
