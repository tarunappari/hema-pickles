"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import ProductDetails from '@/components/products/ProductDetails'
import { allProducts } from '@/data/data'
import { notFound } from 'next/navigation'

const ProductDetailPage = () => {
  const params = useParams()
  const productId = parseInt(params.id)
  
  // Find the product by ID
  const product = allProducts.find(item => item.id === productId)
  
  // If product not found, show 404
  if (!product) {
    notFound()
  }

  return (
    <div className='pageContainer'>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </div>
  )
}

export default ProductDetailPage
