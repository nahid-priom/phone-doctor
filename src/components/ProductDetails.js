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











const mobileRepairOptions = [
  { type: "Screen Repair", icon: ScreenRepairIcon },
  { type: "Battery Replacement", icon: BatterReplacement },
  { type: "Charger Port Repair", icon: chargerPort },
  { type: "Water Damage", icon: waterDamage },
  { type: "Software Update", icon: SoftwareUpdate },

  { type: "Front Camera", icon: FrontCameraIcon },
  { type: "Rear Camera", icon: RearCameraIcon },

  { type: "Back Glass Replacement", icon: BackGlassIcon },
  { type: "Not Turning On", icon: NotTurningOn },
  { type: "Other", icon: Other },
];

const computerRepairOptions = [
  { type: "Broken Screen Repair", icon: CM1 },
  { type: "Battery Fix", icon: CM2 },
  { type: "Computer Virus Removal", icon: CM3 },
  { type: "Water Damage Repair", icon: CM4 },
  { type: "Data Recovery", icon: CM5 },
  { type: "Hard Drive Repair", icon: CM6 },
  { type: "Overheating Issue", icon: CM7 },
  { type: "Password Reset", icon: CM8 },
  { type: "Software Update", icon: CM9 },
  { type: "Other", icon: CM10 },
];

const gamingConsoleRepairOptions = [
  { type: "Not Turning On", icon: GC1 },
  { type: "Video Input Issue", icon: GC4 },
  { type: "Overheating Issue", icon: GC2 },
  { type: "Software Update", icon: GC3 },
  { type: "Other", icon: GC5 },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {repairOptions.map((option) => (
            <Link
              key={option.type}
              to={`/appointment/${model}/${option.type}`}
              className="bg-red-100 flex flex-col items-center shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">
                <img className="w-20" src={option.icon} alt={option.type}></img>
              </div>
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
