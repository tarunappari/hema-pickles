"use client";
import Image from 'next/image';
import React from 'react'
import non from '@/public/assets/category/nonVeg.png'
import veg from '@/public/assets/category/veg.png'
import plus from '@/public/assets/decors/plusDown.png'
import plus2 from '@/public/assets/decors/plus.png'
import styles from '@/styles/landingpage/Category.module.scss'
import { allProducts } from '@/data/data';
import spiral from '@/public/assets/decors/spiral.png'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import Link from 'next/link';
import ProductCard from '../common/ProductCard';

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryContainer}>
        <h1 className='textGradient'>Shop By Category</h1>
        <div className={styles.categoryCardsContainer}>
          <FadeInWhenVisible direction="left" delay={0.25} effect='spring'>
            <Link href={`/products`}>
              <div className={styles.categoryCard}>
                <div className={styles.imgContainer}>
                  <Image src={non} alt='non-veg' />
                </div>
                <h3>Non-Veg Pickles </h3>
              </div>
            </Link>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="right" delay={0.25} effect='spring'>
            <Link href={`/products`}>
              <div className={styles.categoryCard}>
                <div className={styles.imgContainer} >
                  <Image src={veg} alt='veg' />
                </div>
                <h3>Veg Pickles</h3>
              </div>
            </Link>
          </FadeInWhenVisible>
        </div>
        <div className={styles.decor}>
          <Image src={plus} alt='plus' />
        </div>
      </div>
      <div className={styles.favContainer}>
        <div className={styles.favTitle}>
          <h3>People's Favourites</h3>
          <p>Savor Your Favorite, One Spoon at a Time!</p>
        </div>
        <div className={styles.favCards}>
          {allProducts
            .filter(product => product.fav === true)
            .map((item, index) => (
            <FadeInWhenVisible direction='bottom' delay={index * 0.25} effect='spring' key={item.id}>
              <ProductCard
                item={item}
                index={index}
                styles={styles}
                spiral={spiral}
                showSpiral={true}
                variant="category"
              />
            </FadeInWhenVisible>
          ))}
        </div>
        <div className={styles.decor2}>
          <Image src={plus2} alt='plus' />
        </div>
      </div>
    </div>
  )
}

export default Category;