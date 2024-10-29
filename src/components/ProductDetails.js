import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const mobileRepairOptions = [
  { type: "Screen Repair", icon: "🔧" },
  { type: "Battery Replacement", icon: "🔋" },
  { type: "Front Camera", icon: "📸" },
  { type: "Rear Camera", icon: "📷" },
  { type: "Rear Camera Glass", icon: "🔍" },
  { type: "Charging Port Repair", icon: "⚡" },
  { type: "Water Damage Repair", icon: "💧" },
  { type: "Software Update", icon: "💻" },
  { type: "Not Turning On", icon: "❌" },
  { type: "Back Glass Replacement", icon: "🔲" },
  { type: "Other", icon: "❓" },
];

const computerRepairOptions = [
  { type: "Broken Screen Repair", icon: "💻" },
  { type: "Battery Fix", icon: "🔋" },
  { type: "Computer Virus Removal", icon: "🛡️" },
  { type: "Water Damage Repair", icon: "💧" },
  { type: "Data Recovery", icon: "💾" },
  { type: "Hard Drive Repair", icon: "🖴" },
  { type: "Overheating Issue", icon: "🔥" },
  { type: "Password Reset", icon: "🔐" },
  { type: "Software Update", icon: "💻" },
  { type: "Other", icon: "❓" },
];

const gamingConsoleRepairOptions = [
  { type: "Not Turning On", icon: "❌" },
  { type: "Video Input Issue", icon: "📺" },
  { type: "Overheating Issue", icon: "🔥" },
  { type: "Software Update", icon: "💻" },
  { type: "Other", icon: "❓" },
];

const ProductDetails = () => {
  const { category, model } = useParams();

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  let repairOptions;
  if (category.toLowerCase() === "computer") {
    repairOptions = computerRepairOptions;
  } else if (category.toLowerCase() === "gaming-console-") {
    repairOptions = gamingConsoleRepairOptions;
  } else {
    repairOptions = mobileRepairOptions;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl pt-32 mx-auto p-6">
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {repairOptions.map((option) => (
            <Link
              key={option.type}
              to={`/appointment/${model}/${option.type}`}
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

      <Footer />
    </>
  );
};

export default ProductDetails;
