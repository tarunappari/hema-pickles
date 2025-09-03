"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '../payment/AddToCartButton';
import PriceSelector from '../common/PriceSelector';
import styles from '@/styles/products/ProductsContainer.module.scss'

const ProductsCard = ({ 
  item, 
  index, 
  styles, 
  spiral, 
  showSpiral = false
}) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (priceInfo) => {
    setSelectedPrice(priceInfo);
  };

  return (
    <div className={`${styles.card} ${(index === 0 && showSpiral) ? styles.card1 : ''}`}>
      <Link href={`/products/${item.id}`} className={styles.cardLink}>
        <div className={styles.cardImgContainer}>
          <Image src={item.image} alt={item.name} />
          <div className={`${styles.discountBadge} ${styles[item.category]}`}>
            -20%
          </div>
        </div>
        <h4>{item.name}</h4>
      </Link>
      
      <div className={styles.priceSection}>
        <PriceSelector 
          prices={item.price}
          onPriceChange={handlePriceChange}
          defaultSize="1kg"
          variant="products"
        />
      </div>
      
      <div className={styles.cardActions}>
        <AddToCartButton
          product={item}
          selectedPrice={selectedPrice}
          variant="primary"
          size="small"
        />
        <Link href={`/products/${item.id}`}>
          <button className={styles.viewProductBtn}>
            View Details
          </button>
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

export default ProductsCard;
