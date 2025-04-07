import React from "react";
import Banner from "@/component/shared/Banner/Banner";
import MarqueeList from "@/component/MarqueeList/MarqueeList";
import PrimaryCategories from "@/component/PrimaryCategories/PrimaryCategories";
import SplitHeroSection from "@/component/shared/SplitHeroSection/SplitHeroSection";
import ProductSlides from "@/component/ProductSlides/ProductSlides";

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
      <SplitHeroSection
        backgroundImage="https://new-ella.myshopify.com/cdn/shop/files/slideshow-2.png?v=1733305166&width=1880"
        title="PINNACLE INSTANT COFFEE, REINVENTED"
        description="Each batch is roasted to highlight the unique characteristics of the beans, making every cup a true delight."
      />
      <ProductSlides />
    </>
  );
};

export default HomeTemplate;
