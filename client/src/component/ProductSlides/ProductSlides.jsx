import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constant/QuerieKeys";
import { getApi } from "@/http/api";
import ProductsCards from "@/component/shared/ProductsCards/ProductsCards";
import SectionHeading from "@/component/shared/SectionHeading/SectionHeading";
import BlackButton from "@/component/shared/Buttons/BlackButton";
import LightButton from "@/component/shared/Buttons/LightButton";

const ProductSlides = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.products],
    queryFn: () => getApi(`/products?populate=*`),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div className="px-4 pt-4 relative">
      <div className="flex items-center justify-between px-4 pt-8 mb-4">
        <SectionHeading title="New Arrivals" />
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
      >
        {data?.data?.map((card) => {
          const product = {
            id: card.id,
            name: card.name,
            finalprice: card.finalprice,
            oldprice: card.oldprice,
            mainimage: `http://localhost:1337${card.mainimage?.url}`,
            hoverimage: `http://localhost:1337${card.hoverimage?.url}`,
          };

          return (
            <SwiperSlide key={card.id}>
              <ProductsCards {...product} />
              <div className="mx-5 my-5">
                <BlackButton title="Quick add" product={product} />
              </div>
            </SwiperSlide>
          );
        })}
        <div className="flex justify-center items-center gap-4 mb-10">
          <LightButton title="Shop All" />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlides;
