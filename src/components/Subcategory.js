import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// Phone data for each subcategory grouped by series
const phoneData = {
  iPhone: {
    "15 Series": [
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "14 Series": [
      {
        name: 'iPhone 14 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 14 Pro',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "13 Series": [
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "12 Series": [
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
  },
  Samsung: {
    "A Series": [
      {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
       {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "S Series": [
      {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
       {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "Fold Series": [
      {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
       {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
    "Flip Series": [
      {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
       {
        name: 'Samsung Galaxy S10',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'Samsung Galaxy A20',
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg',
      },
      {
        name: 'iPhone 15 Pro Max',
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
      },
      {
        name: 'iPhone 15 Pro',
        image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*',
      },
    ],
  },
};

const Subcategory = () => {
  const { category } = useParams(); // Extract the category from the URL parameters

  // Create a map of possible variations
  const formattedCategoryMap = {
    iphone: 'iPhone',
    samsung: 'Samsung',
  };

  // Use the formatted map to get the correct category key
  const formattedCategory = formattedCategoryMap[category.toLowerCase()];

  const seriesData = phoneData[formattedCategory] || {}; // Fetch series data based on the formatted category

  console.log("Formatted Category:", formattedCategory); // Check the formatted category

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="container pt-32 lg:pt-44 mx-auto p-6">
  {/* Header Section */}
  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
    <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4">
      {`${formattedCategory} Models`}
    </h1>
    <p className="text-white hidden lg:block text-center max-w-xl mx-auto">
      Explore the latest models and series of {formattedCategory}. Find your perfect match with our detailed listings and high-quality images.
    </p>
  </div>

  {/* Check if seriesData is empty */}
  {Object.keys(seriesData).length === 0 ? (
    <p className="text-center text-gray-500">No models available for this category.</p>
  ) : (
    Object.entries(seriesData).map(([series, models]) => (
      <div key={series} className="mb-10">
        {/* Series Title */}
        <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl py-2 font-semibold text-orange-600 underline decoration-2 decoration-orange-400 mb-4 text-center">{series}</h2>


        </div>

     {/* Card Grid for Models in the Series */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-8">
  {models.map((model) => (
    <div
      key={model.name}
      className="bg-white flex flex-col items-center shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={model.image}
        alt={model.name}
        className="w-36 h-36 object-contain"
      />
      <div className="p-4">
        <h3 className="text-sm lg:text-base font-semibold text-gray-800 text-center">{model.name}</h3>
        <div className="mt-2 flex justify-center">
          {/* Example button or icon (e.g., a heart or cart icon) */}
          <button className="bg-orange-500 text-sm lg:text-base font-bold text-white px-2 py-1 rounded-full hover:bg-orange-600 transition duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    ))
  )}
</div>


      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Subcategory;
