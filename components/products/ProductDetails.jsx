"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/products/ProductDetails.module.scss'
import { allProducts } from '@/data/data'
import FadeInWhenVisible from '../animations/FadeInWhenVisible'

const ProductDetails = ({ product }) => {
  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  const ingredientsList = product.ingredients.split(',').map(ingredient => ingredient.trim())
  const suggestionsList = product.suggestion.split(',').map(suggestion => suggestion.trim())

  return (
    <div className={styles.productDetailsContainer}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link href="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className={styles.productMainSection}>
        <FadeInWhenVisible direction="left" delay={0.2}>
          <div className={styles.productImageSection}>
            <div className={styles.mainImage}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.categoryBadge}>
                <span className={styles[product.category]}>{product.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="right" delay={0.4}>
          <div className={styles.productInfoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productTagline}>{product.tagline}</p>

            <div className={styles.priceSection}>
              <span className={styles.price}>{product.price}</span>
            </div>

            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            <div className={styles.caption}>
              <p>{product.caption}</p>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.buyNowBtn}>
                Buy Now
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Product Details Tabs */}
      <div className={styles.productDetailsSection}>

        <div className={styles.detailsGrid}>
          <div className={styles.detailCard}>
            <h3>🌿 Ingredients</h3>
            <ul className={styles.ingredientsList}>
              {ingredientsList.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailCard}>
            <h3>🍽️ Best Served With</h3>
            <ul className={styles.suggestionsList}>
              {suggestionsList.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className={styles.relatedProductsSection}>

          <h2>Related Products</h2>
          <div className={styles.relatedProductsGrid}>
            {relatedProducts.map((relatedProduct, index) => (
              <Link
                href={`/products/${relatedProduct.id}`}
                key={relatedProduct.id}
                className={styles.relatedProductCard}
              >
                <div className={styles.relatedProductImage}>
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>{relatedProduct.name}</h4>
                <p>{relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
