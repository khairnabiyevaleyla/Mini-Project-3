import React from "react";
import styles from "./style.module.scss";

const PolicySection = () => {
  const services = [
    {
      icon: "https://new-ella.myshopify.com/cdn/shop/files/free-shipping-1_1.png?v=1733451798",
      title: "Free Shipping US Order $499",
    },
    {
      icon: "https://new-ella.myshopify.com/cdn/shop/files/return-1_1.png?v=1733451799",
      title: "90 Day Free Returns",
    },
    {
      icon: "https://new-ella.myshopify.com/cdn/shop/files/callendar-1_1.png?v=1733451799",
      title: "Lifetime Warranty Guarantee*",
    },
    {
      icon: "https://new-ella.myshopify.com/cdn/shop/files/box-1_1.png?v=1733451799",
      title: "Free In-Store Pickup / Giftcards",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#01312d] p-5">
      {services.map((service, index) => (
        <div className={styles.block} key={index}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <img src={service.icon} alt="icon" />
            </div>
            <div className={styles.text}>
              <span>{service.title}</span>
              <p>More Details</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicySection;
