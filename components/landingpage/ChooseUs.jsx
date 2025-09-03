"use client"
import React from 'react'
import styles from '@/styles/landingpage/ChooseUs.module.scss'
import Lottie from 'lottie-react';
import { features } from '@/data/data';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ChooseUs = () => {
  return (
    <div className={styles.chooseContainer}>
      <div className={styles.chooseTitle}>
        <h3 className='textGradient'>Why Choose Hemapickles?</h3>
        <h1>Tradition You Can Taste, Purity You Can Trust</h1>
        <p>At Hemapickles, we don’t just make pickles — we preserve tradition. Here’s why our customers love us:</p>
      </div>
      <div className={styles.grid}>
        {features.map((item, index) => {
          const direction = index % 2 === 0 ? 'left' : 'right';
          const delay = Math.floor(index / 2) * 0.5;

          return (
            <div className={styles.card} key={index}>
                <div className={styles.icon}>
                  <Lottie loop={true} animationData={item.icon} autoplay={true} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            // <FadeInWhenVisible key={index} direction={direction} delay={delay}>
              
            // </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  )
}

export default ChooseUs;