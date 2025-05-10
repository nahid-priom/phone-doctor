import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faShieldAlt,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const CategorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://backend.phonespotmd.com/api");
        const fetchedCategories = response.data.categories.map(
          (category, index) => ({
            name: category.name,
            slug: `/service/${category.slug}`,
            image: `https://backend.phonespotmd.com/${category.image}`,
            shortDescription: category.short_description,
            popular: index < 3,
          })
        );
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="services"
      className="py-16 bg-gradient-to-b from-red-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Repairs for All Your Devices
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Trust our certified technicians with over 10 years of experience to
            fix your devices with precision and care. We use only premium parts
            and offer warranties on all repairs.
          </p>
        </motion.div>

        {/* Features Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-800">
            <FontAwesomeIcon
              icon={faTools}
              className="text-red-800 text-3xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Certified Technicians
            </h3>
            <p className="text-gray-600">
              Expert repairs by trained professionals
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-800">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-red-800 text-3xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              90-Day Warranty
            </h3>
            <p className="text-gray-600">All repairs come with warranty</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-800">
            <FontAwesomeIcon
              icon={faClock}
              className="text-red-800 text-3xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Quick Turnaround
            </h3>
            <p className="text-gray-600">Most repairs completed same day</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-red-800">
            <FontAwesomeIcon
              icon={faStar}
              className="text-red-800 text-3xl mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Quality Parts
            </h3>
            <p className="text-gray-600">Premium OEM or equivalent parts</p>
          </div>
        </div>

        {/* Category Cards */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative group"
                
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col cursor-pointer border border-gray-100 hover:border-red-100"
                  onClick={() => navigate(category.slug)}
                >
                  {/* Card Header with Popular Badge */}
                  <div className="relative bg-gray-50 px-6 pt-6 pb-2">
                    {category.popular && (
                      <span className="absolute top-4 right-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                        MOST POPULAR
                      </span>
                    )}
                    <div className="flex justify-center items-center h-32">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/150?text=Device+Image";
                        }}
                      />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.name}
                      </h3>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                        From $69
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {category.shortDescription ||
                        "Expert repairs using genuine parts with warranty coverage"}
                    </p>

                    {/* Repair Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-red-800 rounded-full mr-2 flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span className="text-gray-700">90-day warranty</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="w-4 h-4 bg-red-800 rounded-full mr-2 flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span className="text-gray-700">
                          Same-day service available
                        </span>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Common Repairs
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {["Screen", "Battery", "Charging", "Camera"].map(
                          (service, i) => (
                            <span
                              key={i}
                              className="bg-red-500 text-gray-100 text-xs px-2 py-1 rounded-full border border-gray-200"
                            >
                              {service}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6">
                    <button className="w-full bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                      View All Services
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-red-800 rounded-xl shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="text-center lg:text-start">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Not sure what you need?</span>
                <span className="block text-red-200">We're here to help.</span>
              </h2>
              <p className="mt-3 text-lg text-red-100">
                Our expert technicians can diagnose your device and recommend
                the best solution.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-800 bg-white hover:bg-red-50"
                >
                  Contact Our Experts
                </button>
              </div>
              <div className="inline-flex ml-3 rounded-md shadow">
                <button
                  onClick={() => navigate("/service")}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                >
                  Book a Repair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
