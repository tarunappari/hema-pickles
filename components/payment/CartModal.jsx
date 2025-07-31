"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import styles from '@/styles/payment/CartModal.module.scss';
import CheckoutModal from './CheckoutModal';
import { formatCurrency, formatItemPrice, extractPrice } from '@/lib/payment/razorpay';

const CartModal = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeItem, getCartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h2>
              <ShoppingBag size={24} />
              Your Cart ({items.length} items)
            </h2>
            <button className={styles.closeButton} onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.content}>
            {items.length === 0 ? (
              <div className={styles.emptyCart}>
                <ShoppingBag size={48} />
                <p>Your cart is empty</p>
                <button className={styles.continueShoppingBtn} onClick={onClose}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className={styles.itemsList}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          width={80}
                          height={80}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <h4>{item.name}</h4>
                        <p className={styles.itemPrice}>{formatItemPrice(item.price)} each</p>
                        <p className={styles.itemSubtotal}>
                          Subtotal: {formatCurrency(extractPrice(item.price) * item.quantity)}
                        </p>
                      </div>

                      <div className={styles.quantityControls}>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className={styles.quantityBtn}
                        >
                          <Minus size={16} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className={styles.quantityBtn}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className={styles.removeBtn}
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className={styles.footer}>
                  <div className={styles.total}>
                    <strong>Total: {formatCurrency(getCartTotal())}</strong>
                  </div>
                  <div className={styles.actions}>
                    <button 
                      className={styles.continueShoppingBtn}
                      onClick={onClose}
                    >
                      Continue Shopping
                    </button>
                    <button 
                      className={styles.checkoutBtn}
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onCartClose={onClose}
      />
    </>
  );
};

export default CartModal;
