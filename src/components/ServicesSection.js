import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Battery Replacement",
    image:
      "https://static.vecteezy.com/system/resources/previews/001/900/934/non_2x/the-technician-holding-a-screwdriver-a-mobile-phone-repair-closeup-inside-cell-phone-with-a-fixing-battery-from-a-broken-service-shop-center-on-wood-table-smartphone-repairs-maintenance-concept-free-photo.jpg",
    description: "Get your battery replaced quickly and efficiently.",
    rating: 4.5,
    reviews: 120,
  },
  {
    title: "Screen Repair",
    image:
      "https://howtostartanllc.com/images/business-ideas/business-idea-images/screen-repair-business.jpg",
    description: "Fix cracked or broken screens with ease.",
    rating: 4.2,
    reviews: 98,
  },
  {
    title: "Speaker Repair",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/0*BnOXWqAOkxmpmLBO.png",
    description: "Repair or replace faulty speakers.",
    rating: 4.7,
    reviews: 145,
  },
  {
    title: "Charger Port Repair",
    image:
      "https://e3.365dm.com/22/10/2048x1152/skynews-iphone-usbc-eu-european-union_5944232.jpg",
    description: "Fix your faulty charging port.",
    rating: 4.4,
    reviews: 110,
  },
  {
    title: "Water Damage Repair",
    image:
      "https://repairexpress.com/wp-content/uploads/2023/09/MicrosoftTeams-image-30.jpg",
    description: "Get your device repaired from water damage.",
    rating: 4.4,
    reviews: 110,
  },
];

const OurServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="bg-orange-50  px-4 py-12">
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
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We specialize in high-quality repairs for all major brands. Choose
          your device category below to learn more about our services.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link to ="/service">

          <motion.div
            key={index}
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
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover object-center rounded-lg mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
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
                {service.rating} ({service.reviews} reviews)
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
