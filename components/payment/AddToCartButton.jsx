"use client";
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import styles from '@/styles/payment/AddToCartButton.module.scss';

const AddToCartButton = ({ product, selectedPrice, variant = 'primary', size = 'medium' }) => {
  const { addItem, isInCart, openCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Create a unique product ID based on product ID and selected size
  const productKey = selectedPrice ? `${product.id}-${selectedPrice.size}` : product.id;
  const inCart = isInCart(productKey);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Determine the actual selected size and price
    let actualSize, actualPrice, actualFormattedPrice;

    if (selectedPrice && selectedPrice.price) {
      // Use the selected price from PriceSelector
      actualSize = selectedPrice.size;
      actualPrice = selectedPrice.price;
      actualFormattedPrice = selectedPrice.formattedPrice;
    } else {
      // Fallback: use default 1kg or first available size
      const availableSizes = Object.keys(product.price || {});
      actualSize = availableSizes.includes('1kg') ? '1kg' : availableSizes[0] || '1kg';
      actualPrice = product.price?.[actualSize] || product.price;
      actualFormattedPrice = `₹${actualPrice}/${actualSize}`;
    }

    // Create product object with selected price information
    const productToAdd = {
      ...product,
      id: productKey,
      selectedSize: actualSize,
      selectedPrice: actualPrice,
      formattedPrice: actualFormattedPrice,
      originalId: product.id
    };

    console.log('Adding to cart:', {
      productName: product.name,
      selectedSize: actualSize,
      selectedPrice: actualPrice,
      formattedPrice: actualFormattedPrice
    });

    addItem(productToAdd);
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
