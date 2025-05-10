import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTools, 
  faClock, 
  faShieldAlt, 
  faStar,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const localData = localStorage.getItem("services");
        if (localData) {
          setServices(JSON.parse(localData));
        } else {
          const response = await axios.get("https://backend.phonespotmd.com/api");
          const fetchedServices = response.data.products.map(service => ({
            ...service,
            price: getServicePrice(service.name),
            time: getServiceTime(service.name),
            popular: Math.random() > 0.7 // 30% chance to be popular
          }));
          setServices(fetchedServices);
          localStorage.setItem("services", JSON.stringify(fetchedServices));
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getServicePrice = (name) => {
    if (name.toLowerCase().includes('screen')) return "$79-$199";
    if (name.toLowerCase().includes('battery')) return "$49-$99";
    if (name.toLowerCase().includes('camera')) return "$59-$129";
    if (name.toLowerCase().includes('water')) return "$99-$249";
    return "$59-$149";
  };

  const getServiceTime = (name) => {
    if (name.toLowerCase().includes('screen')) return "30-90 mins";
    if (name.toLowerCase().includes('battery')) return "30-60 mins";
    if (name.toLowerCase().includes('diagnostic')) return "15 mins";
    return "1-2 hours";
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (error) {
    return (
      <div className="bg-red-50 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <h3 className="text-red-800 text-xl font-bold mb-2">Error Loading Services</h3>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-red-50 py-4 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
        
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full mb-4">
            EXPERT REPAIRS
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide top-quality repair services using genuine parts and industry-leading techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/service/${service.slug || service.id}`}>
                  <div className={`bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col border-l-4 ${service.popular ? 'border-red-800' : 'border-transparent'} hover:shadow-xl transition-all duration-300`}>
                    {/* Service Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={`https://backend.phonespotmd.com/${service.thumb_image}`}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Repair+Service';
                        }}
                      />
                      {service.popular && (
                        <div className="absolute top-4 right-4 bg-red-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                          POPULAR CHOICE
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                        <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.short_description}</p>
                      
                      {/* Service Features */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faClock} className="text-red-800 mr-3" />
                          <span className="text-gray-700">Repair time: {service.time}</span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faShieldAlt} className="text-red-800 mr-3" />
                          <span className="text-gray-700">90-day warranty included</span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faStar} className="text-red-800 mr-3" />
                          <span className="text-gray-700">4.9 (124 reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Footer */}
                    <div className="px-6 pb-6">
                      <button className="w-full flex items-center justify-center bg-red-800 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 group">
                        <span>View Details</span>
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
        {/* CTA Section */}
        <motion.div
          
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-red-800 rounded-xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Specific Issue?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our technicians can handle virtually any repair. Contact us for a free diagnostic.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-red-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Contact Us
              </Link>
              <Link 
                to="/service" 
                className="bg-transparent border-2 border-white hover:bg-red-700 font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default OurServices;