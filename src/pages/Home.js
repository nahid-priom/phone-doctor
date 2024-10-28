import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RecentWorkSection from "../components/RecentWork";
import ServiceSection from "../components/ServicesSection";
import ClientTestimonials from "../components/ClientTestmonials";
import Footer from "../components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import CategorySection from '../components/CategorySection';
import FeaturedCategorySection from '../components/FeaturedCategorySection';

const Home = () => {
  const [seoData, setSeoData] = useState({
    seo_title: "Phone Spot Repair - Home",
    seo_description: "Welcome to the Phone Repair Center. We offer high-quality phone repair services for iPhones, Samsung, and other smartphones. Quick and reliable services." // Fallback description
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSEOData = async () => {
      try {
        const response = await fetch('https://phonespotbackend.blacktechcorp.com/api/seos');
        if (!response.ok) {
          throw new Error('Failed to fetch SEO data');
        }
        const data = await response.json();
        setSeoData({
          seo_title: data.homeSEO.seo_title,
          seo_description: data.homeSEO.seo_description
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSEOData();
  }, []);

  return (
    <div className="w-full">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{seoData.seo_title}</title>
        <meta name="description" content={seoData.seo_description} />
      </Helmet>

      {/* Error handling (optional) */}
      {loading && <p>Loading SEO data...</p>}
      {error && <p>Error loading SEO data: {error}</p>}

      {/* Page Content */}
      <Navbar />
      <HeroSection />
      <FeaturedCategorySection/>
      {/* <CategorySection /> */}
      <ServiceSection />
      <RecentWorkSection />
      <ClientTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
