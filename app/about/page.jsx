import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutInfo from '@/components/about/AboutInfo';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import React from 'react'

const About = () => {
  return (
    <div className='pageContainer'>
        <Navbar />
        <AboutHeroSection />
        <AboutInfo />
        <Footer />
    </div>
  )
}

export default About;