import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Define the repair options for mobile devices
const mobileRepairOptions = [
  { type: "Screen Repair", icon: "🔧" },
  { type: "Camera Repair", icon: "📷" },
  { type: "Battery Replacement", icon: "🔋" },
  { type: "Charger Port Repair", icon: "⚡" },
  { type: "Speaker Repair", icon: "🔊" },
  { type: "Water Damage Repair", icon: "💧" },
];

// Define the repair options for computers
const computerRepairOptions = [
  { type: "Broken Screen Repair", icon: "💻" },
  { type: "Battery Fix", icon: "🔋" },
  { type: "Computer Virus Removal", icon: "🛡️" },
];

const ProductDetails = () => {
  // Destructure category and model from the URL parameters
  const { category, model } = useParams(); 

  // Utility function for title case
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Check if the category is "computer" by inspecting the category parameter from the URL
  const isComputerCategory = category.toLowerCase() === "computer";
  
  // Determine the appropriate repair options based on the category
  const repairOptions = isComputerCategory ? computerRepairOptions : mobileRepairOptions;

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl pt-32 mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-4 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-center lg:mb-4">
            <span className="text-yellow-400 lg:text-4xl text-2xl mr-2 font-extrabold">
              {capitalizeWords(model)}
            </span>
            <span className="text-white lg:text-3xl"> Repair Services</span>
          </h1>
          <p className="text-white hidden lg:block text-center max-w-xl mx-auto">
            Choose from a range of repair services for your{" "}
            <span className="text-yellow-400">{model}</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {repairOptions.map((option) => (
            <Link
              key={option.type}
              to={`/appointment/${model}/${option.type}`}  // Navigate to the appointment page with category, model, and service
              className="bg-red-100 flex flex-col items-center shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {option.type}
              </h3>
              <div className="mt-4 bg-red-500 text-white text-base px-4 py-2 rounded-full hover:bg-red-600 transition duration-200">
                Book Now
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default ProductDetails;
