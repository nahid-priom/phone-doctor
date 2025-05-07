import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faTools,
  faPhoneAlt,
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
  const [navbarScrolled, setNavbarScrolled] = useState(false);

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
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentNav = navLinks.find((nav) => nav.id === currentPath);
    setActive(currentNav ? currentNav.title : "Home");
  }, [location]);

  return (
    <header className="fixed w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-red-900 text-white text-sm py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <a href="tel:+1234567890">Call: +1 (234) 567-890</a>
            </span>
            <span>Mon-Fri: 9AM - 6PM | Sat-Sun: 10AM - 4PM</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition">FAQ</a>
            <a href="#" className="hover:text-gray-300 transition">Track Repair</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          navbarScrolled
            ? "bg-red-50 shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-0 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Phone Doctor Logo"
              className={`transition-all duration-300 ${
                navbarScrolled ? "h-16" : "h-20"
              }`}
            />
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="relative group"
                  onMouseEnter={() =>
                    nav.id === "service" && setServiceDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    nav.id === "service" && setServiceDropdownOpen(false)
                  }
                >
                  <Link
                    to={`/${nav.id}`}
                    className={`flex items-center py-2 px-1 font-medium transition ${
                      active === nav.title
                        ? "text-red-600"
                        : navbarScrolled
                        ? "text-gray-800 hover:text-red-800"
                        : "text-gray-800 hover:text-red-800"
                    }`}
                    onClick={() => setActive(nav.title)}
                  >
                    {nav.title}
                    {nav.id === "service" && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-2 text-xs transition-transform"
                      />
                    )}
                  </Link>
                  {nav.id === "service" && serviceDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-md z-50 overflow-hidden">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={`/service/${category.slug}`}
                          className="flex items-center px-4 py-3 border-b border-red-700 hover:bg-red-800 hover:text-white transition"
                        >
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-8 h-8 mr-3 rounded-full object-contain"
                          />
                          <div>
                            <p className="font-medium">{category.name}</p>
                            
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <Link
              to="/service"
              className={`flex items-center px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                navbarScrolled
                  ? "bg-red-900 text-white hover:bg-red-100 hover:text-red-800"
                  : "bg-red-800 text-white hover:bg-red-100 hover:text-red-800"
              }`}
            >
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              Repair Now
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setToggle(!toggle)}
              className="flex items-center text-red-950 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={toggle ? faTimes : faBars}
                className="w-6 h-6 mr-2"
              />
              <span className="font-medium">MENU</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-75 z-40 transition-opacity duration-300 ${
            toggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setToggle(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white transform transition-transform duration-300 ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <img
                  src={logo}
                  alt="Phone Doctor Logo"
                  className="h-12"
                />
                <button
                  onClick={() => setToggle(false)}
                  className="text-gray-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4">
                <ul className="space-y-4">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <div
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          active === nav.title
                            ? "bg-red-100 text-red-700"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                        onClick={() => {
                          if (nav.id !== "service") {
                            setActive(nav.title);
                            setToggle(false);
                          } else {
                            setServiceDropdownOpen(!serviceDropdownOpen);
                          }
                        }}
                      >
                        <Link
                          to={nav.id === "service" ? "#" : `/${nav.id}`}
                          className="font-medium"
                        >
                          {nav.title}
                        </Link>
                        {nav.id === "service" && (
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`transition-transform ${
                              serviceDropdownOpen ? "transform rotate-180" : ""
                            }`}
                          />
                        )}
                      </div>
                      {nav.id === "service" && serviceDropdownOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {categories.map((category) => (
                            <li key={category.name}>
                              <Link
                                to={`/service/${category.slug}`}
                                className="flex items-center p-2 rounded hover:bg-red-50"
                                onClick={() => setToggle(false)}
                              >
                                <img
                                  src={category.image}
                                  alt={category.name}
                                  className="w-8 h-8 mr-3 rounded-full"
                                />
                                <span>{category.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border-t">
                <Link
                  to="/service"
                  className="flex items-center justify-center bg-red-700 text-white py-3 px-6 rounded-lg font-bold"
                  onClick={() => setToggle(false)}
                >
                  <FontAwesomeIcon icon={faTools} className="mr-2" />
                  Repair Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;