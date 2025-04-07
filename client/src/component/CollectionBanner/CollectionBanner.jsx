import React from "react";
import styles from "./style.module.scss";
import GreenButton from "@/component/shared/Buttons/GreenButton";
import { Link } from "react-router-dom";
const CollectionBanner = () => {
  const cards = [
    {
      id: 1,
      title: "SHE'S BEAUTIFUL TASTE",
      image:
        "https://new-ella.myshopify.com/cdn/shop/files/spotlight-2_570x.png?v=1733293884",
    },
    {
      id: 2,
      title: "SOFT & WARM MORNING",
      image:
        "https://new-ella.myshopify.com/cdn/shop/files/spotlight-3_570x.png?v=1733293884",
    },
    {
      id: 3,
      title: "RUNNING START FLAVOR",
      image:
        "https://new-ella.myshopify.com/cdn/shop/files/spotlight-4_570x.png?v=1733293884",
    },
  ];
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <h1>TREAT YOUR DAY WITH BEST ROASTED COFFEE</h1>
        <p>
          Explore Our Enchanted Collection: Deep Dark Brown Coffee Bean Season
        </p>
        <GreenButton title="Shop All Collections" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-25 mt-20">
        {cards.map((card) => (
          <div className={styles.image} key={card.id}>
            <img src={card.image} alt="collection" />
            <div className={styles.title}>
              <h4>{card.title}</h4>
              <Link to="/">
                <span>
                  Discover Collection{" "}
                  <i className="ri-arrow-right-long-line"></i>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionBanner;
