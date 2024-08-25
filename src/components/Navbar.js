import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhoneAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";
import iphoneImage from "../assets/category/iphone.png"; 
import samsungImage from "../assets/category/samsung.png";
import ipadImage from "../assets/category/ipad.png";
import androidImage from "../assets/category/android.png";

const subcategories = {
  iPhone: ["iPhone 15 Series", "iPhone 14 Series","iPhone 13 Series", "iPhone 12 Series"],
  Samsung: ["Samsung A Series", "Samsung S Series", "Samsung Note Series", "Samsung Fold Series"],
  iPad: ["iPad Pro", "iPad Air"],
  "Other Android": ["Google Pixel", "OnePlus", "LG", "Motorolla"]
};

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "service", title: "Services" },
  { id: "about", title: "About" },
  { id: "blog", title: "Blogs" },
];

const categories = [
  { name: "iPhone", image: iphoneImage },
  { name: "Samsung", image: samsungImage },
  { name: "iPad", image: ipadImage },
  { name: "Other Android", image: androidImage },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState("");

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentNav = navLinks.find((nav) => nav.id === currentPath);
    if (currentNav) {
      setActive(currentNav.title);
    } else {
      setActive("Home");
    }
  }, [location]);

  return (
    <section className="bg-primary">
      <div className="bg-orange-600 py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-lg" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
            </Link>
          </div>
          <div className="flex space-x-8 items-center text-white text-sm">
            <span className="hidden md:block">Mon-Fri: 9:00 AM - 6:00 PM</span>
            <Link to="tel:+1234567890" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-lg" />
              <span className="text-base lg:text-xl font-bold">Call Now: +1 234 567 890</span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl px-4 lg:px-0 mx-auto flex py-6 justify-between items-center navbar">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-[130px] h-[50px]" />
        </Link>

        <ul className="list-none sm:flex hidden justify-center items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] relative ${
                active === nav.title ? "text-orange-500" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onMouseEnter={() => nav.id === "service" && setServiceDropdownOpen(true)}
              onMouseLeave={() => nav.id === "service" && setServiceDropdownOpen(false)}
              onClick={() => setActive(nav.title)}
            >
              <Link className="text-lg relative" to={`/${nav.id}`}>
                {nav.title}
                {nav.id === "service" && <FontAwesomeIcon icon={faChevronDown} className="ml-2" />}
                {active === nav.title && <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-orange-600"></span>}
              </Link>
              {nav.id === "service" && serviceDropdownOpen && (
                <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md z-10">
                  {categories.map((category) => (
                    <li
                      key={category.name}
                      className="relative hover:bg-orange-600 border-b border-orange-400 p-4 hover:text-white items-center py-2"
                      onClick={() => setActiveService(category.name)}
                    >
                      <Link to={`/services/${category.name.toLowerCase()}`} className="flex items-center w-full">
                        <img src={category.image} alt={category.name} className="w-8 h-8 mr-2" />
                        <span className="text-black hover:text-white w-full p-1 rounded">{category.name}</span>
                      </Link>
                      {activeService === category.name && (
                        <ul className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md z-20">
                          {subcategories[category.name].map((subcategory) => (
                            <li key={subcategory} className="hover:bg-orange-600 px-4 py-2 hover:text-white border-b border-orange-400">
                              <Link to={`/services/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:text-white">
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <Link to="/repair" className="bg-orange-600 text-white px-4 py-1 rounded-md text-lg font-bold hover:bg-orange-600">Repair Now</Link>

        <div className="sm:hidden flex justify-end items-center">
          <FontAwesomeIcon
            icon={toggle ? faTimes : faBars}
            className="w-[28px] h-[28px] text-white cursor-pointer"
            onClick={() => setToggle(prev => !prev)}
          />

          <div className={`fixed top-0 right-0 h-full w-[250px] rounded-bl-2xl bg-black p-6 z-50 transition-transform duration-300 ${toggle ? "translate-x-0" : "translate-x-full"}`}>
            <div className="absolute top-6 right-6">
              <FontAwesomeIcon
                icon={faTimes}
                className="w-[32px] h-[32px] text-white cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>

            <ul className="list-none flex flex-col justify-start items-center h-auto space-y-6 mt-20">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[18px] relative ${
                    active === nav.title ? "text-orange-500" : "text-dimWhite"
                  }`}
                  onClick={() => {
                    if (nav.id === "service") {
                      setServiceDropdownOpen(prev => !prev);
                    } else {
                      setActive(nav.title);
                      setToggle(false); // Close the sidebar for other links
                    }
                  }}
                >
                  <Link to={nav.id === "service" ? "#" : `/${nav.id}`} className="relative text-xl flex items-center">
                    {nav.title}
                    {nav.id === "service" && <FontAwesomeIcon icon={faChevronDown} className="ml-2" />}
                    {active === nav.title && <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>}
                  </Link>
                  {nav.id === "service" && serviceDropdownOpen && (
                    <ul className="ml-4 bg-white p-2 rounded-xl hover:bg-orange-500 mt-2">
                      {categories.map((category) => (
                        <li
                          key={category.name}
                          className="flex items-center py-2 border-b border-orange-400"
                          onClick={() => setActiveService(category.name)}
                        >
                          <img src={category.image} alt={category.name} className="w-6 h-6 mr-2" />
                          <span className="text-black">{category.name}</span>
                        </li>
                      ))}
                      {activeService && (
                        <ul className="pl-4 bg-white">
                          {subcategories[activeService].map((subcategory) => (
                            <li key={subcategory} className="py-2 text-black hover:text-white">
                              <Link
                                to={`/services/${activeService.toLowerCase()}/${subcategory.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={() => setToggle(false)}
                              >
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  )}
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
