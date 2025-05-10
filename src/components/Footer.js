import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faClock,
  faTools,
  faMobileAlt,
  faTablet,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram,
  faYelp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L3 12H10V22H14V12H21L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-3 text-2xl font-bold text-white">Phone Doctor</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Your trusted partner for professional mobile device repairs. We bring your devices back to life with expert care and premium parts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faYelp} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-red-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2 w-4" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2 w-4" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2 w-4" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-red-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/service/screen-repair" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-4" />
                  Screen Repair
                </Link>
              </li>
              <li>
                <Link to="/service/battery-replacement" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-4" />
                  Battery Replacement
                </Link>
              </li>
              <li>
                <Link to="/service/water-damage" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-4" />
                  Water Damage Repair
                </Link>
              </li>
              <li>
                <Link to="/service/charging-port" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-4" />
                  Charging Port Repair
                </Link>
              </li>
              <li>
                <Link to="/service/data-recovery" className="text-gray-400 hover:text-red-500 transition flex items-center">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2 w-4" />
                  Data Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-red-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mt-1 mr-3 w-4" />
                <div>
                  <p className="text-gray-400">Enterprize Plaza</p>
                  <p className="text-gray-400">9437 Annapolis Rd</p>
                  <p className="text-gray-400">Lanham, MD 20706</p>
                </div>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-3 w-4" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-red-500 transition">(123) 456-7890</a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-3 w-4" />
                <a href="mailto:info@phonedoctor.com" className="text-gray-400 hover:text-red-500 transition">info@phonedoctor.com</a>
              </div>
              <div className="flex items-start">
                <FontAwesomeIcon icon={faClock} className="text-red-500 mt-1 mr-3 w-4" />
                <div>
                  <p className="text-gray-400">Mon-Fri: 10AM - 9PM</p>
                  <p className="text-gray-400">Sat: 10AM - 9PM</p>
                  <p className="text-gray-400">Sun: 11AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Phone Doctor. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-red-500 transition text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-red-500 transition text-sm">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 hover:text-red-500 transition text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;