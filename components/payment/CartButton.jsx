"use client";
import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import styles from '@/styles/payment/CartButton.module.scss';
import CartSidebar from './CartSidebar';

const CartButton = () => {
  const { items, getItemCount, isCartOpen, openCart, closeCart } = useCart();

  const itemCount = getItemCount();

  return (
    <>
      <button
        className={styles.cartButton}
        onClick={openCart}
        aria-label={`Shopping cart with ${itemCount} items`}
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
      </button>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={closeCart}
      />
    </>
  );
};

export default CartButton;
