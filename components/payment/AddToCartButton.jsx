"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import styles from '@/styles/payment/AddToCartButton.module.scss';

const AddToCartButton = ({ product, variant = 'primary', size = 'medium' }) => {
  const { addItem, isInCart, getItemQuantity, updateQuantity, removeItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    
    // Reset the "added" state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  if (inCart) {
    return (
      <div className={`${styles.quantityContainer} ${styles[variant]} ${styles[size]}`}>
        <button 
          className={styles.quantityBtn}
          onClick={() => handleQuantityChange(quantity - 1)}
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button 
          className={styles.quantityBtn}
          onClick={() => handleQuantityChange(quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
    );
  }

  return (
    <button 
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
