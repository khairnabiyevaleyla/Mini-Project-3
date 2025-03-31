import React from "react";
import Banner from "@/component/shared/Banner/Banner";
import MarqueeList from "@/component/MarqueeList/MarqueeList";
import PrimaryCategories from "@/component/PrimaryCategories/PrimaryCategories";

const HomeTemplate = () => {
  return (
    <>
      {" "}
      <Banner
        image="https://new-ella.myshopify.com/cdn/shop/files/slideshow-1.png?v=1733293884&width=1880"
        title="BEST ELLA ROASTED COFFEE"
        text="Explore Our Enchanted Collection: Deep Dark Coffee Bean Season"
      />
      <MarqueeList />
      <PrimaryCategories />
    </>
  );
};

export default HomeTemplate;
