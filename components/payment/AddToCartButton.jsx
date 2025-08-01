"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import styles from '@/styles/payment/AddToCartButton.module.scss';

const AddToCartButton = ({ product, variant = 'primary', size = 'medium' }) => {
  const { addItem, isInCart, openCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const inCart = isInCart(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addItem(product);
    setIsAdded(true);

    // Open cart sidebar after adding item
    setTimeout(() => {
      openCart();
    }, 500);

    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleViewCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openCart();
  };

  if (inCart) {
    return (
      <button
        type="button"
        className={`${styles.viewCartBtn} ${styles[variant]} ${styles[size]}`}
        onClick={handleViewCart}
      >
        <ShoppingCart size={18} />
        View Cart
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.addToCartBtn} ${styles[variant]} ${styles[size]} ${isAdded ? styles.added : ''}`}
      onClick={handleAddToCart}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check size={18} />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart size={18} />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
