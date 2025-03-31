import React from "react";
import SectionHeading from "@/component/shared/SectionHeading/SectionHeading";
import GreenButton from "@/component/shared/Buttons/GreenButton";
import PrimaryCategoriesCard from "@/component/PrimaryCategories/PrimaryCategoriesCard";

const PrimaryCategories = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col md:flex-row justify-between items-center pt-10 px-4 gap-4">
        <SectionHeading title="Primary Categories" />
        <GreenButton title="Shop All Collections" />
      </div>
      <>
        <PrimaryCategoriesCard />
      </>
    </>
  );
};

export default PrimaryCategories;
