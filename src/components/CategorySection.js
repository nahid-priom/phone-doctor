import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      title: 'iPhone Repair',
      description: 'Expert repairs for all iPhone models.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
    },
    {
      title: 'Samsung Repair',
      description: 'Quality service for Samsung devices.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg',
    },
    {
      title: 'iPad Repair',
      description: 'Reliable iPad repairs and services.',
      icon: 'https://thumbs.dreamstime.com/b/ipad-mini-galati-romania-january-powered-new-chip-bit-architecture-delivers-killer-performance-%C3%A2%E2%82%AC-up-to-four-39440725.jpg',
    },
    {
      title: 'Other Android Repair',
      description: 'We fix all other Android devices.',
      icon: 'https://fdn2.gsmarena.com/vv/pics/lg/lg-velvet-2.jpg',
    },
  ];

  return (
    <section id="categorySection" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
          What we can fix for you
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in high-quality repairs for all major brands. Choose your device category below to learn more about our services.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="relative bg-white shadow-md rounded-xl p-6 text-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
