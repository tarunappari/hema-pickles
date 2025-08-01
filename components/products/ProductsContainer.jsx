"use client";
import React from 'react'
import styles from '@/styles/products/ProductsContainer.module.scss'
import { allProducts } from '@/data/data';
import divider from '@/public/assets/decors/divider.png'
import Image from 'next/image';
import spiral from '@/public/assets/decors/spiral.png'
import plus2 from '@/public/assets/decors/plus.png'
import plus from '@/public/assets/decors/plusDown.png'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Link from 'next/link';
import AddToCartButton from '@/components/payment/AddToCartButton';

const ProductsContainer = () => {
  // Filter products by category
  const nonVegProducts = allProducts.filter(product => product.category === 'nonveg');
  const vegProducts = allProducts.filter(product => product.category === 'veg');
  const powderProducts = allProducts.filter(product => product.category === 'powder');
  

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productslistContainer} id='non'>
        <div className={styles.productTitle}>
          <h3>Non-Veg Pickles</h3>
          <p>Bold Flavors. True Tradition. Every Bite Tells a Story.</p>
        </div>
        <div className={styles.productCards}>
          {nonVegProducts.map((item, index) => (
            <FadeInWhenVisible key={item.id} direction='bottom' delay={index * 0.25} effect='spring'>
              <div
                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <Link href={`/products/${item.id}`} className={styles.cardLink}>
                  <div className={styles.cardImgContainer}>
                    <Image src={item.image} alt={item.name} />
                    <div className={`${styles.discountBadge} ${styles[item.category]}`}>
                      -20%
                    </div>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </Link>
                <div className={styles.cardActions}>
                  <AddToCartButton
                    product={item}
                    variant="primary"
                    size="small"
                  />
                  <Link href={`/products/${item.id}`}>
                    <button className={styles.viewProductBtn}>
                      View Details
                    </button>
                  </Link>
                </div>
                {(index === 0) && (
                  <div className={styles.decorSpiral}>
                    <Image src={spiral} alt='spiral' />
                  </div>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>


        <div className={styles.decor1}>
          <Image src={plus} alt='plus' />
        </div>
        <div className={styles.decor2}>
          <Image src={plus2} alt='plus' />
        </div>
      </div>
      <div className={styles.divider}>
        <Image src={divider} alt='dividerImg' />
      </div>
      <div className={styles.productslistContainer}>
        <div className={styles.productTitle}>
          <h3>Veg Pickles</h3>
          <p>Pure Veg. Pure Taste. Pickled with Love.</p>
        </div>
        <div className={styles.productCards}>
          {vegProducts.map((item, index) => (
            <FadeInWhenVisible key={item.id} direction='bottom' delay={index * 0.25} effect='spring'>
              <div
                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <Link href={`/products/${item.id}`} className={styles.cardLink}>
                  <div className={styles.cardImgContainer}>
                    <Image src={item.image} alt={item.name} />
                    <div className={`${styles.discountBadge} ${styles[item.category]}`}>
                      -20%
                    </div>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </Link>
                <div className={styles.cardActions}>
                  <AddToCartButton
                    product={item}
                    variant="primary"
                    size="small"
                  />
                  <Link href={`/products/${item.id}`}>
                    <button className={styles.viewProductBtn}>
                      View Details
                    </button>
                  </Link>
                </div>
                {(index === 0) && (
                  <div className={styles.decorSpiral}>
                    <Image src={spiral} alt='spiral' />
                  </div>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <div className={styles.decor1}>
          <Image src={plus} alt='plus' />
        </div>
        <div className={styles.decor2}>
          <Image src={plus2} alt='plus' />
        </div>
      </div>
      <div className={styles.divider}>
        <Image src={divider} alt='dividerImg' />
      </div>
      <div className={styles.productslistContainer}>
        <div className={styles.productTitle}>
          <h3>Powders</h3>
          <p>Podi with hot rice, taste straight from mom’s hands.</p>
        </div>
        <div className={styles.productCards}>
          {powderProducts.map((item, index) => (
            <FadeInWhenVisible key={item.id} direction='bottom' delay={index * 0.25} effect='spring'>
              <div
                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <Link href={`/products/${item.id}`} className={styles.cardLink}>
                  <div className={styles.cardImgContainer}>
                    <Image src={item.image} alt={item.name} />
                    <div className={`${styles.discountBadge} ${styles[item.category]}`}>
                      -20%
                    </div>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </Link>
                <div className={styles.cardActions}>
                  <AddToCartButton
                    product={item}
                    variant="primary"
                    size="small"
                  />
                  <Link href={`/products/${item.id}`}>
                    <button className={styles.viewProductBtn}>
                      View Details
                    </button>
                  </Link>
                </div>
                {(index === 0) && (
                  <div className={styles.decorSpiral}>
                    <Image src={spiral} alt='spiral' />
                  </div>
                )}
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <div className={styles.decor1}>
          <Image src={plus} alt='plus' />
        </div>
        <div className={styles.decor2}>
          <Image src={plus2} alt='plus' />
        </div>
      </div>
      <div className={styles.divider}>
        <Image src={divider} alt='dividerImg' />
      </div>
    </div>
  )
}

export default ProductsContainer;