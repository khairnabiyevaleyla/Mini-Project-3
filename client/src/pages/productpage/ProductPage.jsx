import React, { useState } from "react";
import Categories from "@/component/Categories/Categories";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constant/QuerieKeys";
import { getApi } from "@/http/api";
import ProductsCards from "@/component/shared/ProductsCards/ProductsCards";
import Price from "@/component/Price/Price";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const ProductPage = () => {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(1000);
  const [categoryName, setCategoryName] = useState("");
  const [pageSize, setPageSize] = useState(3);
  const [pageLimit, setPageLimit] = useState(1);

  const { data } = useQuery({
    queryKey: [
      QueryKeys.products,
      pageSize,
      pageLimit,
      categoryName,
      startValue,
      endValue,
    ],
    queryFn: () =>
      getApi(
        `/products?pagination[pageSize]=${pageSize}&pagination[page]=${pageLimit}&populate=*&filters[categories][name][$contains]=${categoryName}&filters[finalprice][$gte]=${startValue}&filters[finalprice][$lte]=${endValue}`
      ),
  });

  const totalPage = Math.ceil(data?.meta?.pagination?.total / pageSize);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
      <div className="col-span-1 sm:col-span-2 px-5 py-5">
        <Categories setCategory={setCategoryName} />
        <Price />
        <div>
          <RangeSlider
            min={0}
            max={1000}
            defaultValue={[0, 1000]}
            value={[startValue, endValue]}
            onInput={(value) => {
              setStartValue(value[0]);
              setEndValue(value[1]);
            }}
          />
          <div className="flex justify-between items-center gap-3 my-3">
            <button>{startValue}</button>
            <button>{endValue}</button>
          </div>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-10 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data &&
            data?.data?.map((card) => (
              <ProductsCards
                key={card.id}
                id={card.id}
                mainimage={`http://localhost:1337${card.mainimage?.url}`}
                hoverimage={`http://localhost:1337${card.hoverimage?.url}`}
                name={card.name}
                finalprice={card.finalprice}
                oldprice={card.oldprice}
                LinkId={card.id}
              />
            ))}
        </div>

        <div className="flex justify-center mt-8">
          {totalPage > 1 && (
            <ul className="flex items-center space-x-2">
              <li
                className={`p-2 border rounded ${
                  pageLimit === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (pageLimit > 1) {
                    setPageLimit(pageLimit - 1);
                  }
                }}
              >
                <i className="ri-arrow-left-s-line block leading-none"></i>
              </li>
              {[...Array(totalPage).keys()].map((page) => {
                const pageNumber = page + 1;
                return (
                  <li
                    key={pageNumber}
                    onClick={() => setPageLimit(pageNumber)}
                    className={`px-3 py-1 border rounded text-sm ${
                      pageLimit === pageNumber
                        ? "bg-black text-white border-black"
                        : "cursor-pointer hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </li>
                );
              })}
              <li
                className={`p-2 border rounded ${
                  pageLimit === totalPage
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (pageLimit < totalPage) {
                    setPageLimit(pageLimit + 1);
                  }
                }}
              >
                <i className="ri-arrow-right-s-line block leading-none"></i>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
