"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '@/styles/common/PriceSelector.module.scss';

const PriceSelector = ({ prices, onPriceChange, defaultSize = '1kg', variant = 'default' }) => {
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const lastNotifiedRef = useRef(null);

  // Memoized function to notify price changes
  const notifyPriceChange = useCallback((size, price) => {
    if (!onPriceChange) return;

    const priceKey = `${size}-${price}`;
    if (lastNotifiedRef.current === priceKey) {
      return; // Prevent duplicate notifications
    }

    const priceInfo = {
      size,
      price,
      formattedPrice: `₹${price}/${size}`
    };

    lastNotifiedRef.current = priceKey;
    onPriceChange(priceInfo);
  }, [onPriceChange]);

  // Initialize and handle price changes
  useEffect(() => {
    if (!prices || Object.keys(prices).length === 0) {
      return;
    }

    const availableSizes = Object.keys(prices);
    let targetSize = selectedSize;

    // Ensure the selected size exists, fallback if needed
    if (!prices[selectedSize]) {
      targetSize = availableSizes.includes(defaultSize) ? defaultSize : availableSizes[0];
      setSelectedSize(targetSize);
      return; // Let the next render handle the notification
    }

    // Notify about the current valid selection
    if (prices[targetSize]) {
      notifyPriceChange(targetSize, prices[targetSize]);
    }
  }, [prices, selectedSize, defaultSize, notifyPriceChange]);

  const handleSizeChange = (size) => {
    if (size !== selectedSize) {
      setSelectedSize(size);
    }
  };

  if (!prices || Object.keys(prices).length === 0) {
    return null;
  }

  const availableSizes = Object.keys(prices);

  return (
    <div className={`${styles.priceSelector} ${styles[variant]}`}>
      <div className={styles.sizeButtons}>
        {availableSizes.map((size) => (
          <button
            key={size}
            type="button"
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
            onClick={() => handleSizeChange(size)}
          >
            <span className={styles.size}>{size}</span>
            <span className={styles.price}>₹{prices[size]}</span>
          </button>
        ))}
      </div>
      <div className={styles.selectedPrice}>
        <span className={styles.currentPrice}>₹{prices[selectedSize]}/{selectedSize}</span>
      </div>
    </div>
  );
};

export default PriceSelector;
