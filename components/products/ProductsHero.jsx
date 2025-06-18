import React from 'react'
import styles from '@/styles/products/ProductsHero.module.scss'
import Image from 'next/image';
import family from '@/public/assets/landingpage/mainBg.png';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ProductsHero = () => {
  return (
    <div className={styles.productsHeroContainer}>
      <div className={styles.infoContainer}>
        <FadeInWhenVisible direction="left" effect="bounce" >
          <h1 style={{ textAlign: 'center' }}>Hemapickles Products</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="left" delay={0.25} effect="spring">
          <h2 className='textGradient'>Authentic Taste, Homemade Goodness, Delivered to You. </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="left" delay={0.5} effect="spring">
          <p>At Hemapickles, every jar is more than just food — it's a story of tradition, love, and flavors passed down through generations. All our pickles and powders are handmade in small batches, using 100% natural ingredients with no preservatives, no colors, and no chemicals.</p>
        </FadeInWhenVisible>
      </div>
      <div className={styles.imgContainer}>
        <div className={`${styles.brushContainer}`}>
          <div className={styles.imageWrapper}>
            <Image src={family} alt="granny" fill objectPosition='top' style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsHero;