import React from "react";
import { useSelector } from "react-redux";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { user } = useSelector((state) => state.auth);
  const { cart, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex items-center space-x-4 py-4 border-b"
                >
                  <img
                    src={item.mainimage}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${(item.finalprice * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-base font-medium text-gray-900">
                    Total
                  </span>
                  <span className="text-base font-medium text-gray-900">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {user?.displayName}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#004d3f] focus:ring-[#004d3f] sm:text-sm"
                    placeholder="Enter your shipping address"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-[#004d3f] text-white py-2 px-4 rounded-md hover:bg-[#003a30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d3f]"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
