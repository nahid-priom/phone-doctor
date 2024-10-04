import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      {/* SEO Meta Tags */}
      {/* <Helmet>
        <title>Phone Repair Center - Home</title>
        <meta name="description" content="Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." />
      </Helmet> */}

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
