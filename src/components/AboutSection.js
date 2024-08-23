import React from 'react';
import mobileRepairImage from '../assets/mobile-repair-shop.jpg';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 bg-white">
      <div className="about-text w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to our Mobile Repair Shop! We specialize in repairing all types of mobile devices, including smartphones, tablets, and more. Our team of expert technicians is dedicated to providing fast, reliable, and affordable services to get your devices back in working order.
        </p>
        <p className="text-lg">
          With years of experience and a commitment to quality, we strive to be the best in the industry. Your satisfaction is our priority, and we go the extra mile to ensure every repair is done to perfection.
        </p>
      </div>
      <div className="about-image w-full md:w-1/2 p-4">
        <img src={mobileRepairImage} alt="Mobile Repair Shop" className="w-full h-auto rounded shadow-lg" />
      </div>
    </div>
  );
};

export default AboutSection;
