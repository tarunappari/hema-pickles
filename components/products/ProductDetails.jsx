"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/products/ProductDetails.module.scss";
import { allProducts } from "@/data/data";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import AddToCartButton from "@/components/payment/AddToCartButton";
import PriceSelector from "../common/PriceSelector";

const ProductDetails = ({ product }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 3);

  const handlePriceChange = (priceInfo) => {
    setSelectedPrice(priceInfo);
  };

  const ingredientsList = product.ingredients
    .split(",")
    .map((ingredient) => ingredient.trim());
  const suggestionsList = product.suggestion
    .split(",")
    .map((suggestion) => suggestion.trim());

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
                style={{ objectFit: "cover" }}
              />
              <div className={styles.categoryBadge}>
                <span className={styles[product.category]}>
                  {product.category.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="right" delay={0.4}>
          <div className={styles.productInfoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productTagline}>{product.tagline}</p>

            <div className={styles.description}>
              <p>{product.description}</p>
            </div>

            <div className={styles.caption}>
              <p>{product.caption}</p>
            </div>

            <div className={styles.priceSection}>
              <h3 className={styles.priceSectionTitle}>Select Size & Price</h3>
              <PriceSelector
                prices={product.price}
                onPriceChange={handlePriceChange}
                defaultSize="1kg"
                variant="products"
              />
            </div>

            <div className={styles.actionButtons}>
              <AddToCartButton
                product={product}
                selectedPrice={selectedPrice}
                variant="primary"
                size="large"
              />
              <button
                className={styles.buyNowBtn}
                onClick={() =>
                  window.open(
                    "https://wa.me/916303191921?text=Hi%2C%20I%20need%20more%20information%20about%20your%20pickles!",
                    "_blank"
                  )
                }
              >
                Contact Us
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
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h4>{relatedProduct.name}</h4>
                <p className={styles.relatedProductPrice}>
                  {relatedProduct.price["1kg"]
                    ? `₹${relatedProduct.price["1kg"]}/1kg`
                    : relatedProduct.price["500g"]
                    ? `₹${relatedProduct.price["500g"]}/500g`
                    : Object.keys(relatedProduct.price)[0]
                    ? `₹${
                        relatedProduct.price[
                          Object.keys(relatedProduct.price)[0]
                        ]
                      }/${Object.keys(relatedProduct.price)[0]}`
                    : "Price not available"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
