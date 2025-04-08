import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Heart, Minus, Plus, Eye, ShoppingCart } from "lucide-react";
import style from "./style.module.scss";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Pack 7");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (termsAccepted) {
      addToCart(product, quantity, selectedSize);
      onClose();
    } else {
      alert("Please accept the Terms & Conditions");
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing with email:", email);
  };

  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={style.productInfo}>
          <div className={style.productImage}>
            <img src={product.mainimage} alt={product.name} />
          </div>

          <div className={style.productDetails}>
            <h2 className={style.productTitle}>(Product 3) {product.name}</h2>

            <div className={style.soldInfo}>
              <div className={style.soldCount}>
                <span className={style.fireIcon}>🔥</span>8 sold in last 17
                hours
              </div>
            </div>

            <div className={style.infoRow}>
              <span className={style.label}>Vendor:</span>
              <span className={style.value}>new-ella-demo-14</span>
            </div>

            <div className={style.infoRow}>
              <span className={style.label}>Availability:</span>
              <span className={style.value}>Out Of Stock</span>
            </div>

            <div className={style.infoRow}>
              <span className={style.label}>Product type:</span>
              <span className={style.value}></span>
            </div>

            <div className={style.pricing}>
              <span className={style.oldPrice}>
                ${product.oldprice?.toFixed(2)}
              </span>
              <span className={style.price}>
                ${product.finalprice?.toFixed(2)}
              </span>
            </div>

            <div className={style.sizeSection}>
              <div className={style.sizeLabel}>Size: Pack 7</div>
              <div className={style.sizeOptions}>
                <button className={style.sizeButton}>Pack 7</button>
              </div>
            </div>

            <div className={style.quantitySection}>
              <span className={style.label}>Quantity:</span>
              <div className={style.quantityControls}>
                <button onClick={() => handleQuantityChange(-1)}>
                  <Minus size={16} />
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                />
                <button onClick={() => handleQuantityChange(1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className={style.subtotal}>
              <span>Subtotal:</span>
              <span>${(product.finalprice * quantity).toFixed(2)}</span>
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

            <div className={style.actions}>
              <button
                className={style.addToCartButton}
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className={style.wishlistButton}>
                <Heart size={20} />
              </button>
            </div>

            <button className={style.buyNowButton}>Buy It Now</button>

            <div className={style.notifySection}>
              <p>
                Leave Your Email And We Will Notify As Soon As The
                Product/Variant Is Back In Stock
              </p>
              <div className={style.subscribeForm}>
                <input
                  type="email"
                  placeholder="Insert your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>

            <div className={style.viewingInfo}>
              <Eye size={16} />
              <span>10 customers are viewing this product</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
