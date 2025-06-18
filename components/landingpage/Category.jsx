import Image from 'next/image';
import React from 'react'
import non from '@/public/assets/category/nonVeg.png'
import veg from '@/public/assets/category/veg.png'
import plus from '@/public/assets/decors/plusDown.png'
import plus2 from '@/public/assets/decors/plus.png'
import styles from '@/styles/landingpage/Category.module.scss'
import { favProducts } from '@/data/data';
import spiral from '@/public/assets/decors/spiral.png'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.categoryContainer}>
        <h1 className='textGradient'>Shop By Category</h1>
        <div className={styles.categoryCardsContainer}>
          <FadeInWhenVisible direction="left" delay={0.25} effect='spring'>
            <div className={styles.categoryCard}>
              <div className={styles.imgContainer}>
                <Image src={non} alt='non-veg' />
              </div>
              <h3>Non-Veg Pickles </h3>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible direction="right" delay={0.25} effect='spring'>
            <div className={styles.categoryCard}>
              <div className={styles.imgContainer} >
                <Image src={veg} alt='veg' />
              </div>
              <h3>Veg Pickles</h3>
            </div>
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
          {favProducts.map((item, index) => (
            <FadeInWhenVisible direction='bottom' delay={index * 0.25} effect='spring' key={index}>
              <div

                className={`${styles.favCard} ${(index === 0) ? styles.favCard1 : ''
                  }`}
              >
                <div className={styles.favImgContainer}>
                  <Image src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                {(index === 0) && (
                  <div className={styles.decorSpiral}>
                    <Image src={spiral} alt='spiral' />
                  </div>
                )}
              </div>
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