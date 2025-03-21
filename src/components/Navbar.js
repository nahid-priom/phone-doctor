import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import logo from "../assets/logo.png";

export const navLinks = [
  { id: "service", title: "Services" },
  { id: "about", title: "About" },
  { id: "blog", title: "Blogs" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://backend.phonespotmd.com/api");

        const fetchedCategories = response.data.categories.map((category) => ({
          name: category.name,
          slug: category.slug,
          image: `https://backend.phonespotmd.com/${category.image}`,
          shortDescription: category.short_description,
        }));

        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
          navbarShadow ? "pt-4 lg:pt-0 shadow-2xl bg-[#003649]" : ""
        }`}
      >
        <div className="container bg-transparent px-4 lg:px-0 mx-auto flex py-3 justify-between items-center">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              className="w-[120px] h-[60px] lg:w-[200px] lg:h-[100px]"
            />
          </Link>

          <ul className="list-none sm:flex hidden justify-center items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-bold cursor-pointer text-[16px] relative ${
                  active === nav.title ? "text-purple-600" : "text-gray-100"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onMouseEnter={() =>
                  nav.id === "service" && setServiceDropdownOpen(true)
                }
                onMouseLeave={() =>
                  nav.id === "service" && setServiceDropdownOpen(false)
                }
                onClick={() => setActive(nav.title)}
              >
                <Link
                  className="text-lg relative hover:text-purple-600 transition-all duration-300"
                  to={`/${nav.id}`}
                >
                  {nav.title}
                  {nav.id === "service" && (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 transition-transform duration-300"
                    />
                  )}
                  {active === nav.title && (
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-600 animate-underline"></span>
                  )}
                </Link>
                {nav.id === "service" && serviceDropdownOpen && (
                  <ul className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md z-10 overflow-hidden">
                    {categories.map((category) => (
                      <li
                        key={category.name}
                        className="relative hover:bg-purple-600 border-b border-purple-100 p-4 hover:text-white transition-all duration-300"
                      >
                        <Link
                          to={`/service/${category.slug}`}
                          className="flex items-center w-full"
                        >
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-8 h-8 mr-2 rounded-full"
                          />
                          <span className="text-gray-800 hover:text-white transition-all duration-300">
                            {category.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/service"
            className="bg-[#FFAB5B] px-6 py-2 rounded-lg text-lg font-bold hover:text-black hover:bg-[#F6F8D5] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Repair Now
          </Link>
          {/* Sidebar for mobile */}
          <div className="sm:hidden flex justify-end items-center">
            <FontAwesomeIcon
              icon={toggle ? faTimes : faBars}
              className="w-[28px] h-[28px] pr-4 text-black cursor-pointer"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`fixed top-0 right-0 h-full w-[250px] rounded-bl-2xl bg-black p-6 z-50 transition-transform duration-300 ${
                toggle ? "translate-x-0" : "translate-x-full"
              }`}
            >
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
                      active === nav.title ? "text-red-500" : "text-dimWhite"
                    }`}
                    onClick={() => {
                      if (nav.id === "service") {
                        setServiceDropdownOpen((prev) => !prev);
                      } else {
                        setActive(nav.title);
                        setToggle(false);
                      }
                    }}
                  >
                    <Link
                      to={nav.id === "service" ? "#" : `/${nav.id}`}
                      className="relative text-xl flex items-center"
                      onClick={() => nav.id !== "service" && setToggle(false)}
                    >
                      {nav.title}
                      {nav.id === "service" && (
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-2"
                        />
                      )}
                      {active === nav.title && (
                        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>
                      )}
                    </Link>
                    {nav.id === "service" && serviceDropdownOpen && (
                      <ul className="ml-4 bg-white p-2 rounded-xl hover:bg-red-500 mt-2">
                        {categories.map((category) => (
                          <li
                            key={category.name}
                            className="flex items-center py-2 border-b border-red-400 cursor-pointer"
                          >
                            <Link
                              to={`/service/${category.slug}`}
                              className="flex items-center w-full"
                              onClick={() => {
                                setToggle(false);
                                setServiceDropdownOpen(false);
                              }}
                            >
                              <img
                                src={category.image}
                                alt={category.name}
                                className="w-8 h-8 mr-2"
                              />
                              <span className="text-black hover:text-white w-full p-1 rounded">
                                {category.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
