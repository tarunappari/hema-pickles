import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import styles from '@/styles/products/ProductDetails.module.scss'

const NotFound = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <div className={styles.productDetailsContainer}>
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{ 
            fontSize: '4rem', 
            color: '#e53e3e', 
            marginBottom: '1rem' 
          }}>
            404
          </h1>
          <h2 style={{ 
            fontSize: '2rem', 
            color: '#2d3748', 
            marginBottom: '1rem' 
          }}>
            Product Not Found
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            marginBottom: '2rem' 
          }}>
            Sorry, the product you're looking for doesn't exist.
          </p>
          <Link 
            href="/products" 
            style={{
              background: 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'transform 0.3s ease'
            }}
          >
            Back to Products
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
