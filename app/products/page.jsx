"use client"
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import ProductsContainer from '@/components/products/ProductsContainer';
import ProductsHero from '@/components/products/ProductsHero';
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <ProductsHero />
      <ProductsContainer />
      <Footer />
    </div>
  )
}

export default page;