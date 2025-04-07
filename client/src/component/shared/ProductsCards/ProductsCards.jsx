import React from "react";
import styles from "./style.module.scss";

const ProductsCards = ({
  mainimage,
  hoverimage,
  name,
  oldprice,
  finalprice,
}) => {
  return (
    <div>
      <div>
        <div className={styles.mainimage}>
          <img src={mainimage} alt="product" />
          <div className={styles.hoverimage}>
            <img src={hoverimage} alt="product" />
          </div>
          <div className={styles.tag}>
            <span>Sale</span>
          </div>
          <div className={styles.actions}>
            <i className="ri-heart-3-line"></i>
            <i className="ri-eye-line"></i>
          </div>
          <div className={styles.content}>
            <h6>{name}</h6>
            <p>
              <span className={styles.oldprice}>${oldprice}</span>{" "}
              <span>${finalprice}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
