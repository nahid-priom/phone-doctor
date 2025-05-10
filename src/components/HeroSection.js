import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faBatteryFull, faPlug } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/bgImage.png";
import screenRepair from "../assets/screen.jpg";
import batteryReplacement from "../assets/battery.webp";
import chargingPort from "../assets/charger.webp";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  const minSwipeDistance = 50;

  const services = [
    {
      id: 1,
      title: "Cracked Screen Repair",
      subtitle: "Fast & Professional Service",
      description: "We replace damaged screens with high-quality parts and offer same-day service for most devices",
      image: screenRepair,
      icon: faMobileScreen,
      cta: "Get a Quote",
      link: "/service",
      bgColor: "bg-red-700"
    },
    {
      id: 2,
      title: "Battery Replacement",
      subtitle: "Restore Your Battery Life",
      description: "Is your phone dying too quickly? We use premium batteries with warranty to get you back to full power",
      image: batteryReplacement,
      icon: faBatteryFull,
      cta: "Check Prices",
      link: "/service",
      bgColor: "bg-red-700"
    },
    {
      id: 3,
      title: "Charging Port Repair",
      subtitle: "Fix Your Charging Issues",
      description: "Struggling with loose connections or slow charging? Our experts can repair or replace your charging port",
      image: chargingPort,
      icon: faPlug,
      cta: "Book Repair",
      link: "/service",
      bgColor: "bg-red-700"
    }
  ];

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || currentSlide === index) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  const onTouchStart = (e) => {
    if (isAnimating) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!touchStart || isAnimating) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isAnimating) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPrevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section 
      className="relative pt-24 overflow-hidden min-h-[650px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-12 md:py-16">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className={`p-3 rounded-full ${services[currentSlide].bgColor} text-white mr-3`}>
                  <FontAwesomeIcon icon={services[currentSlide].icon} className="text-xl" />
                </div>
                <p className="text-lg md:text-xl text-red-700 font-medium">
                  {services[currentSlide].subtitle}
                </p>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                {services[currentSlide].title}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {services[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <Link
              to={services[currentSlide].link}
              className="px-6 py-3 bg-red-900 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-700/50"
            >
              {services[currentSlide].cta}
            </Link>
            <Link
              to="/service"
              className="px-6 py-3 border-2 border-red-700 text-red-800 font-semibold rounded-lg hover:bg-white hover:text-red-800 transition duration-300"
            >
              All Services
            </Link>
          </motion.div>
        </div>

        {/* Image Slider */}
        <div 
          className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src={services[currentSlide].image} 
                alt={services[currentSlide].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute bottom-0 left-0 right-0 ${services[currentSlide].bgColor} bg-opacity-90 text-white p-3 text-center`}>
                <p className="font-bold">{services[currentSlide].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2 absolute -bottom-8 left-0 right-0">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-red-600 w-6' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;