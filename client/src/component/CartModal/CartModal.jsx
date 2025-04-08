import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import style from "./style.module.scss";
import {
  ShoppingBag,
  Gift,
  Truck,
  Tag,
  X,
  Plus,
  Minus,
  Edit2,
} from "lucide-react";

const CartModal = () => {
  const { cart, isCartOpen, setIsCartOpen, getCartTotal, updateQuantity } =
    useCart();
  const [termsAccepted, setTermsAccepted] = useState(false);

  if (!isCartOpen) return null;

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = getCartTotal();
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;

  return (
    <div className={style.modalOverlay} onClick={() => setIsCartOpen(false)}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.modalHeader}>
          <div className={style.headerTitle}>
            <h2>Shopping Cart</h2>
            <span>{itemCount} items</span>
          </div>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className={style.shippingProgress}>
          <div className={style.progressBar}>
            <div className={style.progressFill} style={{ width: "100%" }}></div>
          </div>
          <p>You qualify for free shipping!</p>
        </div>

        <div className={style.cartItems}>
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className={style.cartItem}>
              <div className={style.productImage}>
                <img src={item.mainimage} alt={item.name} />
              </div>
              <div className={style.itemDetails}>
                <h3>{item.name}</h3>
                <div className={style.packSize}>
                  {item.size}{" "}
                  <span className={style.editIcon}>
                    <Edit2 size={14} />
                  </span>
                </div>
                <div className={style.priceQuantity}>
                  <div className={style.quantity}>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className={style.price}>
                    ${(item.finalprice * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              <button
                className={style.removeButton}
                onClick={() => updateQuantity(item.id, item.size, 0)}
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className={style.features}>
          <div className={style.feature}>
            <ShoppingBag size={24} />
          </div>
          <div className={style.feature}>
            <Gift size={24} />
          </div>
          <div className={style.feature}>
            <Truck size={24} />
          </div>
          <div className={style.feature}>
            <Tag size={24} />
          </div>
        </div>

        <div className={style.modalFooter}>
          <div className={style.priceBreakdown}>
            <div className={style.subtotal}>
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={style.discount}>
              <span>Discount:</span>
              <span>Sale off 10% (-${discount.toFixed(2)})</span>
            </div>
            <div className={style.total}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className={style.terms}>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I agree with <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <div className={style.buttons}>
            <button className={style.checkoutButton}>Checkout</button>
            <button className={style.viewCartButton}>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
