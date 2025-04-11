import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CommentSide from "@/component/CommentSide/CommentSide";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:1337/api/products/${id}?populate=*`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto">
        <div className="flex-1 flex justify-center">
          <img
            src={`http://localhost:1337${data?.data?.[0]?.mainimage?.url}`}
            alt={data?.data?.[0]?.categories?.[0]?.name}
            className="w-full max-w-md object-cover"
          />
        </div>

        <div className="flex-1 p-6 space-y-4">
          <h1 className="text-3xl font-bold">{data?.data?.[0]?.name}</h1>
          <p className="text-red-500">🔥 7 sold in last 35 hours</p>
          <p className="text-gray-600">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos
            solicitud felis. Pellentesque diam dolor, elementum etos lobortis...
          </p>
          <p className="text-sm text-gray-500">Vendor: new-ella-demo-14 </p>
          <p className="text-sm text-gray-500">Availability: Out Of Stock</p>

          <div className="text-xl font-semibold">
            <span className="text-gray-500 line-through mr-2">
              ${data?.data?.[0]?.oldprice}
            </span>
            <span className="text-black">${data?.data?.[0]?.finalprice}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-2 py-1 bg-gray-200"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-2 py-1 bg-gray-200"
            >
              +
            </button>
          </div>

          <p className="text-lg">
            Subtotal: ${(data?.data?.[0]?.finalprice * quantity).toFixed(2)}
          </p>

          <button className="text-blue-500 underline">Size guide</button>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="px-4 py-2 bg-black text-white font-medium rounded">
              Add To Cart
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mr-2"
              />
              <label>
                I agree with{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              className="px-4 py-2 bg-gray-300 text-black font-medium rounded"
              disabled={!termsAccepted}
            >
              Buy It Now
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            👁️ 18 customers are viewing this product
          </p>
        </div>
      </div>

      <CommentSide />
    </div>
  );
};

export default ProductDetail;
