"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/payment/CartSidebar.module.scss';
import { formatCurrency, formatItemPrice, extractPrice } from '@/lib/payment/razorpay';

const CartSidebar = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { items, updateQuantity, removeItem, getCartTotal } = useCart();

  // Prevent body scroll when sidebar is open while preserving scroll position
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure smooth transition
      const timeoutId = setTimeout(() => {
        // Store current scroll position
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Apply styles to prevent scrolling
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = `-${scrollX}px`;
        document.body.style.width = '100%';
        document.body.style.height = '100%';

        // Store scroll position for restoration
        document.body.setAttribute('data-scroll-y', scrollY.toString());
        document.body.setAttribute('data-scroll-x', scrollX.toString());
      }, 10);

      return () => clearTimeout(timeoutId);
    } else {
      // Restore scroll position
      const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0');
      const scrollX = parseInt(document.body.getAttribute('data-scroll-x') || '0');

      // Remove styles
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';

      // Restore scroll position
      window.scrollTo(scrollX, scrollY);

      // Clean up attributes
      document.body.removeAttribute('data-scroll-y');
      document.body.removeAttribute('data-scroll-x');
    }

    return () => {
      // Cleanup function
      const scrollY = parseInt(document.body.getAttribute('data-scroll-y') || '0');
      const scrollX = parseInt(document.body.getAttribute('data-scroll-x') || '0');

      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';

      if (scrollY || scrollX) {
        window.scrollTo(scrollX, scrollY);
      }

      document.body.removeAttribute('data-scroll-y');
      document.body.removeAttribute('data-scroll-x');
    };
  }, [isOpen]);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    onClose();
    router.push('/checkout');
  };

  return (
    <div className={styles.sideBarContainer}>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={onClose} />
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>
            <ShoppingBag size={24} />
            Your Cart ({items.length})
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
              <Link href="/products" className={styles.continueShoppingBtn} onClick={onClose}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.scrollableContent}>
                <div className={styles.itemsList}>
                  {items.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image 
                          src={item.image} 
                          alt={item.name}
                          width={60}
                          height={60}
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

                      <div className={styles.itemActions}>
                        <div className={styles.quantityControls}>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className={styles.quantityBtn}
                          >
                            <Minus size={14} />
                          </button>
                          <span className={styles.quantity}>{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className={styles.quantityBtn}
                          >
                            <Plus size={14} />
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
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.total}>
                  <div className={styles.totalRow}>
                    <span>Subtotal:</span>
                    <span>{formatCurrency(getCartTotal())}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className={styles.totalRow + ' ' + styles.grandTotal}>
                    <span>Total:</span>
                    <span>{formatCurrency(getCartTotal())}</span>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Link 
                    href="/products" 
                    className={styles.continueShoppingBtn}
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Link>
                  <button 
                    className={styles.checkoutBtn}
                    onClick={handleCheckout}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
