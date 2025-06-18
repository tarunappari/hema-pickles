"use client"
import React from 'react'
import styles from '@/styles/landingpage/ChooseUs.module.scss'
import Lottie from 'lottie-react';
import { features } from '@/data/data';

const ChooseUs = () => {
  return (
    <div className={styles.chooseContainer}>
      <div className={styles.chooseTitle}>
        <h3 className='textGradient'>Why Choose Hemapickles?</h3>
        <h1>Tradition You Can Taste, Purity You Can Trust</h1>
        <p>At Hemapickles, we don’t just make pickles — we preserve tradition. Here’s why our customers love us:</p>
      </div>
      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <Lottie loop={true} animationData={item.icon} autoplay={true}  />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChooseUs;