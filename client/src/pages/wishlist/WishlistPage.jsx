import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import ProductsCards from "@/component/shared/ProductsCards/ProductsCards";

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600">
            Start adding some products to your wishlist!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductsCards key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
