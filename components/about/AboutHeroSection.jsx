import React from 'react'
import styles from '@/styles/about/AboutHeroSection.module.scss'
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const AboutHeroSection = () => {
  return (
    <div className={styles.AboutContainer}>
      <div>
        <FadeInWhenVisible>
          <h1 className='textGradient2'>We believe</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.25}>
          <h1 className='textGradient2'>authentic taste begins at home.</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.5}>
          <h2>Rooted in Tradition. Handcrafted with Love.</h2>
        </FadeInWhenVisible>
        <div className="shadowOverlay" />
      </div>
    </div>
  )
}

export default AboutHeroSection;
