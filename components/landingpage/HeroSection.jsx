"use client";
import React from "react";
import styles from "@/styles/landingpage/HeroSection.module.scss";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import Cart from "@/public/assets/icons/cart.svg";
import Image from "next/image";
import granny1 from "@/public/assets/landingpage/granny.png";
import family from "@/public/assets/landingpage/family.png";
import bg from "@/public/assets/landingpage/bg3.png";

const HeroSection = () => {
  return (
    <div className={styles.containerHero}>
      <div className={styles.infoContainer}>
        <FadeInWhenVisible direction="top" effect="bounce">
          <h1 style={{ textAlign: "center" }}>Hema pickles</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="top" delay={0.25} effect="spring">
          <h2>Made with Love, </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="top" delay={0.5} effect="spring">
          <h2 className="textGradient">Packed with Flavor</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="top" delay={0.5} effect="spring">
          <h3 className="textGradient">Made with Love, Packed with Flavor</h3>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="top" delay={0.75} effect="spring">
          <p>Taste the Tradition in Every Bite</p>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="top" delay={1} effect="bounce">
          <div className={styles.orderBtn}>
            <button
              className={styles.button}
              onClick={() =>
                window.open(
                  "https://wa.me/916303191921?text=Hi%2C%20I%20need%20more%20information%20about%20your%20pickles!",
                  "_blank"
                )
              }
            >
              {" "}
              Order Now
            </button>
            <span className={styles.span}>
              <Cart />
            </span>
          </div>
        </FadeInWhenVisible>
      </div>
      <FadeInWhenVisible direction="top" delay={1} effect="bounce">
        <div className={styles.imgContainer}>
          <div className={`${styles.brushContainer}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={family}
                alt="granny"
                fill
                objectPosition="top"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default HeroSection;
