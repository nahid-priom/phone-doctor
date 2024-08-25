// Subcategory.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const phoneData = {
    iPhone: [
      { name: 'iPhone 15 Pro Max', image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg" },
      { name: 'iPhone 15 Pro', image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*" },
      // Add other iPhone models...
    ],
    Samsung: [
      { name: 'Samsung A10', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      { name: 'Samsung S10', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      // Add other Samsung models...
    ],
    iPad: [
      { name: 'iPad Pro', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      { name: 'iPad Air', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      // Add other iPad models...
    ],
    'Other Android': [
      { name: 'Google Pixel', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      { name: 'OnePlus', image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg' },
      // Add other Android models...
    ],
  };
  const Subcategory = () => {
    const { category, subcategory } = useParams();
    const models = phoneData[category] || [];
  
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">{`${category} - ${subcategory}`}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <div key={model.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-center">{model.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Subcategory;