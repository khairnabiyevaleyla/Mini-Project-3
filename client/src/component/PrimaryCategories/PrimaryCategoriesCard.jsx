import React from "react";
import style from "./style.module.scss";

const PrimaryCategoriesCard = () => {
  const cards = [
    {
      id: "1",
      productname: "Best ELLA Arabica Coffee",
      image:
        "https://new-ella.myshopify.com/cdn/shop/collections/collection-list-1.png?v=1733294238",
      badge: "100% Natural",
    },
    {
      id: "2",
      productname: "Premium ELLA Robusta Blends",
      image:
        "https://new-ella.myshopify.com/cdn/shop/collections/collection-list-2.png?v=1733294314",
      badge: "Hot Stock",
    },
    {
      id: "3",
      productname: "Best ELLA Roasted Coffee",
      image:
        "https://new-ella.myshopify.com/cdn/shop/collections/collection-list-3.png?v=1733294342",
      badge: "New Release",
    },
    {
      id: "4",
      productname: "Bold ELLA Robusta Creations",
      image:
        "https://new-ella.myshopify.com/cdn/shop/collections/collection-list-4.png?v=1733294376",
      badge: "Best Seller",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-4">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center text-center">
          <div className={style.image}>
            <img src={card.image} alt={card.productname} />
            <span className={style.badge}>{card.badge}</span>
          </div>
          <div className={style.productname}>
            <p>{card.productname}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrimaryCategoriesCard;
