import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Category from '@/components/landingpage/Category';
import ChooseUs from '@/components/landingpage/ChooseUs';
import HeroSection from '@/components/landingpage/HeroSection';
import Testimonals from '@/components/landingpage/Testimonals';

export default function Home() {
  return (
    <div className='pageContainer'>
      <Navbar />
      <HeroSection />
      <Category />
      <ChooseUs />
      <Testimonals />
      <Footer />
    </div>
  );
}
