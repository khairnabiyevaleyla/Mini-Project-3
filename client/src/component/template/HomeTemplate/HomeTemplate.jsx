import React from "react";
import Banner from "@/component/shared/Banner/Banner";
import MarqueeList from "@/component/MarqueeList/MarqueeList";
import PrimaryCategories from "@/component/PrimaryCategories/PrimaryCategories";
import SplitHeroSection from "@/component/shared/SplitHeroSection/SplitHeroSection";
import ProductSlides from "@/component/ProductSlides/ProductSlides";
import CollectionBanner from "@/component/CollectionBanner/CollectionBanner";

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
      <SplitHeroSection
        backgroundImage="https://new-ella.myshopify.com/cdn/shop/files/slideshow-5.png?v=1733293884&width=1880"
        title="SPECIALTY ICED COFFEE AND COLD BREW KITS"
        description="Our meticulous roasting process ensures a cup that is rich, smooth, and full of flavor."
        reverse="true"
      />
      <CollectionBanner />
      <Banner
        image="https://new-ella.myshopify.com/cdn/shop/files/slideshow-8.png?v=1733293885&width=1880"
        title="BEST ESPRESSO EXPERIENCE"
        text="Our beans are carefully roasted to deliver a perfect balance of flavor and aroma, making every cup extraordinary."
      />
    </>
  );
};

export default HomeTemplate;
