"use client";
import React, { useState, useEffect } from 'react';
import styles from '@/styles/common/TopSlider.module.scss';
import { FaShippingFast, FaPercent, FaHeart } from 'react-icons/fa';

const TopSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      icon: <FaShippingFast />,
      text: "International Shipping Available",
      bgColor: ""
    },
    {
      id: 2,
      icon: <FaPercent />,
      text: "20% Off on All Orders",
      bgColor: ""
    },
    {
      id: 3,
      icon: <FaHeart />,
      text: "India's Most Loved Pickles",
      bgColor: ""
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.topSlider}>
      <div className={styles.slideTrack}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slideContainer} ${
              index === currentSlide ? styles.active : ''
            }`}
            style={{
              backgroundColor: slide.bgColor,
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className={styles.slideContent}>
              <span className={styles.icon}>
                {slide.icon}
              </span>
              <span className={styles.text}>
                {slide.text}
              </span>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
