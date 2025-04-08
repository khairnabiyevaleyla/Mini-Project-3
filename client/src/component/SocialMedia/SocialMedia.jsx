import React from "react";
import styles from "./style.module.scss";
import SectionHeading from "@/component/shared/SectionHeading/SectionHeading";

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      <div className="flex justify-start">
        <SectionHeading title="@ELLA_INSTA" />
      </div>
      <div className={styles.title}>
        <p>Explore Our Enchanted Collection: Deep Dark Coffee Bean Season</p>
        <span>
          Discover Insta <i className="ri-instagram-line"></i>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 my-5">
        <div className={styles.image}>
          <img
            src="https://new-ella.myshopify.com/cdn/shop/files/instagram-1.png?v=1733293884"
            alt="Instagram"
          />
        </div>
        <div className={styles.image}>
          <img
            src="https://new-ella.myshopify.com/cdn/shop/files/instagram-2.png?v=1733293885"
            alt="Instagram"
          />
        </div>
        <div className={styles.slogan}>
          <span>Great Man</span>
          <span>Has</span>
          <span>Great Taste</span>
        </div>
        <div className={styles.image}>
          <img
            src="https://new-ella.myshopify.com/cdn/shop/files/instagram-3.png?v=1733293885"
            alt="Instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
