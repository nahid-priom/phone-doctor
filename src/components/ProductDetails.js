import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScreenRepairIcon from "../assets/service icons/screeen repai.png";
import BackGlassIcon from "../assets/service icons/back cover glass repair.png";

import FrontCameraIcon from "../assets/service icons/front camera.png";

import RearCameraIcon from "../assets/service icons/rear camera.png";
import BatterReplacement from "../assets/service icons/battery replacement.png";
import chargerPort from "../assets/service icons/charging port.png";
import waterDamage from "../assets/service icons/waterdamage.png";
import SoftwareUpdate from "../assets/service icons/software update.png";
import NotTurningOn from "../assets/service icons/not turning on.png";
import Other from "../assets/service icons/others.png";

import GC1 from "../assets/service icons/gaming-console/not turning on (1).png"
import GC2 from "../assets/service icons/gaming-console/over heating.png"
import GC3 from "../assets/service icons/gaming-console/software update (1).png"
import GC4 from "../assets/service icons/gaming-console/video input.png"
import GC5 from "../assets/service icons/gaming-console/others (1).png"

import CM1 from "../assets/service icons/computer/broken screen.png"
import CM2 from "../assets/service icons/computer/battery.png"
import CM3 from "../assets/service icons/computer/Virus.png"
import CM4 from "../assets/service icons/computer/Water Damage.png"
import CM5 from "../assets/service icons/computer/Data Recovery.png"
import CM6 from "../assets/service icons/computer/hard drive.png"
import CM7 from "../assets/service icons/computer/oveerheat.png"
import CM8 from "../assets/service icons/computer/Password reset.png"
import CM9 from "../assets/service icons/computer/software.png"
import CM10 from "../assets/service icons/computer/other.png"



const serviceOptions = {
  mobile: [
    { type: "Screen Repair", icon: ScreenRepairIcon },
    { type: "Battery Replacement", icon: BatterReplacement },
    { type: "Charger Port Repair", icon: chargerPort },
    { type: "Water Damage", icon: waterDamage },
    { type: "Software Update", icon: SoftwareUpdate },
    { type: "Front Camera", icon: FrontCameraIcon },
    { type: "Rear Camera", icon: RearCameraIcon },
    { type: "Back Glass Replacement", icon: BackGlassIcon },
    { type: "Not Turning On", icon: NotTurningOn },
    { type: "Other", icon: Other }
  ],
  computer: [
    { type: "Broken Screen Repair", icon: CM1 },
    { type: "Battery Fix", icon: CM2 },
    { type: "Virus Removal", icon: CM3 },
    { type: "Water Damage Repair", icon: CM4 },
    { type: "Data Recovery", icon: CM5 },
    { type: "Hard Drive Repair", icon: CM6 },
    { type: "Overheating Issue", icon: CM7 },
    { type: "Password Reset", icon: CM8 },
    { type: "Software Update", icon: CM9 },
    { type: "Other", icon: CM10 }
  ],
  gamingConsole: [
    { type: "Not Turning On", icon: GC1 },
    { type: "Video Input Issue", icon: GC4 },
    { type: "Overheating Issue", icon: GC2 },
    { type: "Software Update", icon: GC3 },
    { type: "Other", icon: GC5 }
  ]
};

const ProductDetails = () => {
  const { category, model } = useParams();

  const formatText = (text) => {
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getServiceOptions = () => {
    switch (category.toLowerCase()) {
      case "computer":
        return serviceOptions.computer;
      case "gaming-console":
        return serviceOptions.gamingConsole;
      default:
        return serviceOptions.mobile;
    }
  };

  const formattedModel = formatText(model);
  const formattedCategory = formatText(category);

  return (
    <>
      <Navbar />
      
      <div className="max-w-7xl lg:pt-48 pt-40 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {formattedModel} <span className="text-red-800">Repair Services</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional repair services for your {formattedModel} {formattedCategory}
          </p>
          <div className="w-20 h-1 bg-red-800 mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {getServiceOptions().map((service) => (
            <div 
              key={service.type}
              className="bg-red-50 rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Link
                to={`/appointment/${model}/${service.type.replace(/\s+/g, '-').toLowerCase()}`}
                className="block h-full"
              >
                <div className="p-6 flex flex-col items-center h-full">
                  <div className="bg-gray-50 rounded-full p-4 mb-5">
                    <img 
                      src={service.icon} 
                      alt={service.type} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-4">
                    {service.type}
                  </h3>
                  <button className="mt-auto w-full bg-red-800 hover:bg-red-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Book Service
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;