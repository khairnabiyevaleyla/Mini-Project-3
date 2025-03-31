import React from "react";
import styles from "./style.module.scss";

const MarqueeList = () => {
  const data = [
    { text: "Easy and free in-store returns" },
    { text: "Secure checkout guaranteed" },
    { text: "Free shipping orders over $99" },
  ];

  return (
    <div className="border-b border-black overflow-hidden flex gap-10">
      {[...Array(4)].map((_, i) => (
        <div key={i} className={styles.marqueelist}>
          {data.map((item, index) => (
            <p key={index} className={styles.marqueeItem}>
              {item.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MarqueeList;
