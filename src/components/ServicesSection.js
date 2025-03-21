import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import axios from "axios";

const OurServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("services");

    if (localData) {
      setServices(JSON.parse(localData));
    } else {
      axios
        .get("https://backend.phonespotmd.com/api")
        .then((response) => {
          const fetchedServices = response.data.products;
          setServices(fetchedServices); 
          localStorage.setItem("services", JSON.stringify(fetchedServices)); 
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
          setError("Failed to load services.");
        });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <section ref={ref} className="bg-red-50 px-4 py-12">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-gray-900">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          We specialize in high-quality repairs for all major brands. Choose
          your device category below to learn more about our services.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link to={"/contact"} key={service.id}>
            {" "}
           
            <motion.div
              className="p-6 bg-white border rounded-lg shadow-md"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`https://backend.phonespotmd.com/${service.thumb_image}`} // Use thumb_image from API
                alt={service.name}
                className="w-full h-60 object-cover object-center rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium text-gray-800">
                {service.name} {/* Use service name */}
              </h3>
              <p className="text-gray-600">{service.short_description}</p>{" "}
              {/* Use short description */}
              <div className="mt-4 flex items-center">
                <div className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1l2.598 6.776h6.776l-5.5 4.552 2.598 6.772L10 14.802 1.528 19.1l2.598-6.772-5.5-4.552h6.776L10 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-1 text-gray-600">
                  5 (124 reviews) {/* Use rating and reviews */}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
