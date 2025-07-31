"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import styles from '@/styles/payment/CartButton.module.scss';
import CartModal from './CartModal';

const CartButton = () => {
  const { items, getItemCount, addItem, removeItem, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const itemCount = getItemCount();

  return (
    <>
      <button 
        className={styles.cartButton}
        onClick={() => setIsCartOpen(true)}
        aria-label={`Shopping cart with ${itemCount} items`}
      >
        <ShoppingCart size={24} />
        {itemCount > 0 && (
          <span className={styles.badge}>{itemCount}</span>
        )}
      </button>

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default CartButton;
