import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png"; // Ensure the path is correct

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "about", title: "About" },
  { id: "blog", title: "Blogs" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <section className="bg-primary">
      {/* Top Header */}
      <div className="bg-orange-600 py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
            </a>
          </div>
          {/* Opening Time and Call Now */}
          <div className="flex space-x-8 items-center text-white text-sm">
            <span className="hidden md:block">Mon-Fri: 9:00 AM - 6:00 PM</span>
            <a href="tel:+1234567890" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-lg" />
              <span className="text-base lg:text-xl font-bold">Call Now: +1 234 567 890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-7xl px-4 lg:px-0 mx-auto flex py-6 justify-between items-center navbar">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[160px] h-[60px]" />

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] relative ${
                active === nav.title ? "text-orange-500" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a className="text-lg relative" href={`#${nav.id}`}>
                {nav.title}
                {active === nav.title && (
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-500"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars} // Toggle between menu and close icons
            className="w-[28px] h-[28px] text-white cursor-pointer"
            onClick={() => setToggle((prev) => !prev)} // Toggle sidebar
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-[250px] rounded-bl-2xl bg-black p-6 z-50 transition-transform duration-300 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Icon */}
            <div className="absolute top-6 right-6">
              <FontAwesomeIcon
                icon={faTimes}
                className="w-[32px] h-[32px] text-white cursor-pointer"
                onClick={() => setToggle(false)} // Close sidebar
              />
            </div>

            {/* Navigation Links */}
            <ul className="list-none flex flex-col justify-start items-center h-auto space-y-6 mt-20">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[18px] relative ${
                    active === nav.title ? "text-orange-500" : "text-dimWhite"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false); // Close the sidebar after clicking a link
                  }}
                >
                  <a href={`#${nav.id}`} className="relative text-xl">
                    {nav.title}
                    {active === nav.title && (
                      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
