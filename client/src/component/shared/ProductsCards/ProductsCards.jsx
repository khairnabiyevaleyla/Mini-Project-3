import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import ProductModal from "@/component/ProductModal/ProductModal";
import BlackButton from "@/component/shared/Buttons/BlackButton";
import { Link } from "react-router-dom";
const ProductsCards = ({
  id,
  mainimage,
  hoverimage,
  name,
  oldprice,
  finalprice,
  LinkId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, mainimage, hoverimage, name, oldprice, finalprice });
    }
  };

  const product = {
    id,
    mainimage,
    hoverimage,
    name,
    oldprice,
    finalprice,
  };

  return (
    <>
      <div className="relative group">
        <div className="relative overflow-hidden">
          <img
            src={mainimage}
            alt={name}
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
          />

          <div className="absolute inset-0">
            <img
              src={hoverimage}
              alt={name}
              className="w-full h-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          <div className="absolute top-4 left-4">
            <span className="bg-black text-white px-3 py-1 text-sm">Sale</span>
          </div>

          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
              onClick={handleWishlistClick}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart
                size={22}
                className={
                  inWishlist ? "fill-black stroke-black" : "stroke-black"
                }
              />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <Eye size={22} className="stroke-black" />
            </button>
          </div>
        </div>

        <div className="mt-4 px-1 pb-4">
          <Link to={`/products/${LinkId}`}>
            {" "}
            <h6 className="text-lg font-medium truncate">{name}</h6>{" "}
          </Link>
          <p className="flex gap-2 mt-1">
            {oldprice && (
              <span className="text-gray-500 line-through">${oldprice}</span>
            )}
            <span className="font-bold">${finalprice}</span>
          </p>
          <div className="mt-3">
            <BlackButton title="Quick add" product={product} />
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductsCards;
