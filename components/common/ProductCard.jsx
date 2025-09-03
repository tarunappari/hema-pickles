"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '../payment/AddToCartButton';
import PriceSelector from './PriceSelector';

const ProductCard = ({ 
  item, 
  index, 
  styles, 
  spiral, 
  showSpiral = false,
  variant = 'category' // 'category' or 'products'
}) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (priceInfo) => {
    setSelectedPrice(priceInfo);
  };

  return (
    <div className={`${styles.favCard} ${(index === 0 && showSpiral) ? styles.favCard1 : ''}`}>
      <Link href={`/products/${item.id}`} className={styles.productLink}>
        <div className={styles.favImgContainer}>
          <Image src={item.image} alt={item.name} />
        </div>
        <div className={styles.productInfo}>
          <h4>{item.name}</h4>
        </div>
      </Link>
      
      <div className={styles.priceSection}>
        <PriceSelector 
          prices={item.price}
          onPriceChange={handlePriceChange}
          defaultSize="1kg"
          variant={variant}
        />
      </div>
      
      <div className={styles.buttonContainer}>
        <AddToCartButton 
          product={item} 
          selectedPrice={selectedPrice}
          variant="primary" 
          size="small" 
        />
        <Link href={`/products/${item.id}`} className={styles.viewDetailsBtn}>
          View Details
        </Link>
      </div>
      
      {(index === 0 && showSpiral) && (
        <div className={styles.decorSpiral}>
          <Image src={spiral} alt='spiral' />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
