import React from 'react'
import styles from '@/styles/about/AboutInfo.module.scss'
import granny from '@/public/assets/landingpage/granny.png'
import pickles from '@/public/assets/landingpage/pickles.png'
import Image from 'next/image'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'

const AboutInfo = () => {
    return (
        <div className={styles.AboutInfoContainer}>
            <div className={styles.info}>
                <p>
                    At Hema Pickles, we’re on a heartfelt mission to bring back the rich, traditional flavors of village kitchens to your home. Every jar is handcrafted with age-old recipes, using sun-dried ingredients, fresh spices, and absolutely no chemicals or preservatives. We stand for purity, taste, and trust — just like how our grandmothers made it.
                </p>
            </div>

            <div className={styles.approach}>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={granny} alt='Traditional preparation' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='bottom' delay={0.5}>
                        <h1>Our Approach.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.75}>
                        <p>
                            We believe in slow, thoughtful preparation — from carefully handpicking ingredients to preparing each pickle in small batches using traditional techniques. Every step is guided by care and love, just like it’s done in our homes. Our approach is simple: no shortcuts, no compromises — only real, honest flavors.
                        </p>
                    </FadeInWhenVisible>
                </div>
            </div>

            <div className={styles.leafBg}></div>

            <div className={`${styles.approach} ${styles.madeToLastContainer}`}>
                <div className={styles.centeringAbout}>
                    <FadeInWhenVisible direction='bottom' delay={0.5}>
                        <h1>Made To Last.</h1>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction='bottom' delay={0.75}>
                        <p>
                            Our pickles are made to stay fresh and flavorful, the natural way. With no added colors or chemicals, our time-tested recipes ensure long shelf life without compromising on taste or health. Whether it's a festival meal or everyday lunch, Hema Pickles are a timeless companion — just like they were in our childhood.
                        </p>
                    </FadeInWhenVisible>
                </div>
                <div className={`${styles.aboutInfoImgContainer}`}>
                    <Image src={pickles} alt='Preserved naturally' layout='fill' objectFit='cover' objectPosition='center' />
                </div>
            </div>

            <div className={styles.last}></div>
        </div>
    )
}

export default AboutInfo;
