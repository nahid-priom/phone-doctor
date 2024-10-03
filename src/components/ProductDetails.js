import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Define the repair options data
const repairOptions = [
  { type: "Screen Repair", icon: "🔧" },
  { type: "Battery Replacement", icon: "🔋" },
  { type: "Charger Port Repair", icon: "⚡" },
  { type: "Speaker Repair", icon: "🔊" },
  { type: "Water Damage Repair", icon: "💧" },
];

// Example image data (this should match your actual data source)
const phoneImages = {
  "iPhone 15 Pro Max":
    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg",
  "iPhone 15 Pro":
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695113801-apple-iphone-15-pro-lineup-white-titanium-twitter-650961d6e60d6.jpg?crop=1xw:1xh;center,top&resize=980:*",
  // Add other models with their images here...
};

const ProductDetails = () => {
  const {  model } = useParams(); // Extract the category and model from the URL parameters

  // Get the product image URL from phoneImages based on the model
  const productImage = phoneImages[model] || "default-image-url.jpg"; // Fallback to a default image if not found

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl pt-32 mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4">
            {model} Repair Services
          </h1>
          <p className="text-white hidden lg:block text-center max-w-xl mx-auto">
            Choose from a range of repair services for your {model}.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Section: Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={productImage}
              alt={model}
              className="w-80 h-auto object-contain shadow-lg rounded-lg"
            />
          </div>

          {/* Right Section: Repair Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {repairOptions.map((option) => (
              <div
                key={option.type}
                className="bg-red-100 flex flex-col items-center shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-base font-semibold text-gray-800 text-center">
                  {option.type}
                </h3>
                <button
                  className="mt-4 bg-red-500 text-white text-base px-4 py-2 rounded-full hover:bg-red-600 transition duration-200"
                  onClick={() =>
                    (window.location.href = `/appointment/${model}`)
                  } // Updated navigation
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default ProductDetails;
