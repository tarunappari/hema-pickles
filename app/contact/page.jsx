"use client"
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Contact from '@/components/contact/Contact';
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default page;