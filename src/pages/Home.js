import React from 'react';
import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RecentWorkSection from "../components/RecentWork";
import ServiceSection from "../components/ServicesSection";
import ClientTestimonials from "../components/ClientTestmonials";
import Footer from "../components/Footer";
// import Preloader from "../components/Preloader";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  return (
    <div className="w-full">
      {/* <Preloader /> */}
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ServiceSection />
      <RecentWorkSection />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
