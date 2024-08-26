import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const navigate = useNavigate(); // Initialize navigate hook

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const categories = [
    {
      title: 'iPhone Repair',
      description: 'Expert repairs for all iPhone models.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
      path: '/services/iphone', // Add path to navigate
    },
    {
      title: 'Samsung Repair',
      description: 'Quality service for Samsung devices.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg',
      path: '/services/samsung', // Add path to navigate
    },
    {
      title: 'iPad Repair',
      description: 'Reliable iPad repairs and services.',
      icon: 'https://thumbs.dreamstime.com/b/ipad-mini-galati-romania-january-powered-new-chip-bit-architecture-delivers-killer-performance-%C3%A2%E2%82%AC-up-to-four-39440725.jpg',
      path: '/services/ipad', // Add path to navigate
    },
    {
      title: 'Other Android Repair',
      description: 'We fix all other Android devices.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/lg/lg-velvet-2.jpg',
      path: '/services/other-android', // Add path to navigate
    },
  ];

  return (
    <section ref={ref} id="categorySection" className="py-16 bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            What we can fix for you
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in high-quality repairs for all major brands. Choose your device category below to learn more about our services.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md rounded-xl p-6 text-center cursor-pointer"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(category.path)} // Navigate on click
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
