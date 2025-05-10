import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faCheckCircle,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const RecentWorkCarousel = () => {
  const recentWorks = [
    {
      title: "iPhone 13 Pro Screen Replacement",
      description:
        "Replaced the shattered OLED display with genuine Apple parts, restoring full functionality including True Tone and HDR.",
      image:
        "https://9to5mac.com/wp-content/uploads/sites/6/2022/07/M2-MacBook-Air-iFixit-teardown.jpg?quality=82&strip=all",
      beforeAfter: true,
      time: "45 minutes",
      warranty: "180-day warranty",
    },
    {
      title: "Samsung Galaxy S22 Ultra Water Damage Repair",
      description:
        "Completely disassembled, cleaned, and replaced damaged components after liquid exposure, saving all user data.",
      image: "https://i.ytimg.com/vi/wBx3yANu1TY/maxresdefault.jpg",
      beforeAfter: true,
      time: "2 hours",
      warranty: "90-day warranty",
    },
    {
      title: "MacBook Pro M1 Logic Board Repair",
      description:
        "Diagnosed and repaired power delivery issues on the logic board, avoiding costly full-board replacement.",
      image:
        "https://images.ctfassets.net/16nm6vz43ids/4BjYhx6G2ghxtSwCANEvB4/e4224d64dcbf42ed75926d1a3f17b455/Samsung_phone_repair.png",
      beforeAfter: false,
      time: "3 hours",
      warranty: "1-year warranty",
    },
    {
      title: 'iPad Pro 12.9" Battery Replacement',
      description:
        "Carefully replaced the swollen battery without damaging the delicate display assembly.",
      image:
        "https://www.platinumphonerepair.com.au/upload/page/ipad_water_img3.jpg",
      beforeAfter: true,
      time: "1 hour",
      warranty: "90-day warranty",
    },
    {
      title: "Google Pixel 6 Pro Charging Port Repair",
      description:
        "Replaced the faulty USB-C port and reinforced the connection to prevent future issues.",
      image:
        "https://9to5mac.com/wp-content/uploads/sites/6/2022/07/M2-MacBook-Air-iFixit-teardown.jpg?quality=82&strip=all",
      beforeAfter: false,
      time: "30 minutes",
      warranty: "90-day warranty",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section className="py-8 lg:py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full mb-4">
            OUR WORK
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Repair Projects
          </h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            See real examples of our expert repairs. We document our work to
            showcase our attention to detail and quality craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings} className="pb-12">
            {recentWorks.map((work, index) => (
              <div key={index} className="px-3 focus:outline-none h-[560px] lg:h-[520px]">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {work.beforeAfter && (
                      <span className="absolute top-4 left-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        BEFORE/AFTER
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center mb-3">
                      <FontAwesomeIcon
                        icon={faTools}
                        className="text-red-800 mr-2"
                      />
                      <h3 className="text-xl font-bold text-gray-800">
                        {work.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">
                    {work.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="mr-1 text-red-800"
                        />
                        {work.time}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full flex items-center">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="mr-1 text-red-800"
                        />
                        {work.warranty}
                      </span>
                    </div>

                    <button className="w-full flex items-center justify-center bg-red-800 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 group mt-auto">
                      <span>View Case Study</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <a
            href="/gallery"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-800 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Full Repair Gallery
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorkCarousel;
