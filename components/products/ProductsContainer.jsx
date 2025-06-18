import React from 'react'
import styles from '@/styles/products/ProductsContainer.module.scss'
import { nonVegProducts, vegProducts, powderProducts } from '@/data/data';
import divider from '@/public/assets/decors/divider.png'
import Image from 'next/image';
import spiral from '@/public/assets/decors/spiral.png'
import plus2 from '@/public/assets/decors/plus.png'
import plus from '@/public/assets/decors/plusDown.png'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ProductsContainer = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productslistContainer}>
        <div className={styles.productTitle}>
          <h3>Hema Non-Veg Pickles</h3>
          <p>Bold Flavors. True Tradition. Every Bite Tells a Story.</p>
        </div>
        <div className={styles.productCards}>
          {nonVegProducts.map((item, index) => (
            <FadeInWhenVisible key={index} direction='bottom' delay={index * 0.25} effect='spring'>
              <div

                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <div className={styles.cardImgContainer}>
                  <Image src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
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
          <h3>Hema Veg Pickles</h3>
          <p>Pure Veg. Pure Taste. Pickled with Love.</p>
        </div>
        <div className={styles.productCards}>
          {vegProducts.map((item, index) => (
            <FadeInWhenVisible key={index} direction='bottom' delay={index * 0.25} effect='spring'>
              <div

                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <div className={styles.cardImgContainer}>
                  <Image src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
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
          <h3>Hema Powders</h3>
          <p>Podi with hot rice, taste straight from mom’s hands.</p>
        </div>
        <div className={styles.productCards}>
          {powderProducts.map((item, index) => (
            <FadeInWhenVisible key={index} direction='bottom' delay={index * 0.25} effect='spring'>
              <div

                className={`${styles.card} ${(index === 0) ? styles.card1 : ''
                  }`}
              >
                <div className={styles.cardImgContainer}>
                  <Image src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
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
    </div>
  )
}

export default ProductsContainer;