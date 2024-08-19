import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    <section className=" bg-primary">
      <nav className=" max-w-7xl px-4 lg:px-0 mx-auto flex py-6 justify-between items-center navbar">
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
          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-1/2 w-[250px] rounded-bl-2xl bg-black p-6 z-50 transition-transform duration-300 ${
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
