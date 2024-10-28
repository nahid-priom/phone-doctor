import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUs';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [seoData, setSeoData] = useState({
    seo_title: "Phone Spot Repair",
    seo_description: "Learn more about Phone Spot Repair, your trusted source for fast and reliable mobile repair services." // Fallback description
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
          seo_title: data.aboutSEO.seo_title,
          seo_description: data.aboutSEO.seo_description
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
    <div>
      <Helmet>
        <title>{seoData.seo_title}</title>
        <meta name="description" content={seoData.seo_description} />
      </Helmet>
      <Navbar />
      {loading && <p>Loading SEO data...</p>}
      {error && <p>Error loading SEO data: {error}</p>}
      <AboutSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default About;
