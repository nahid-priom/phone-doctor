import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const CategorySection = () => {
  const controls = useAnimation(); 
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); 
  const navigate = useNavigate(); 

  const [categories, setCategories] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCategories = async () => {
      const cachedData = localStorage.getItem("cachedCategories"); 
  
      if (cachedData) {
       
        const parsedData = JSON.parse(cachedData);
        if (parsedData.length > 0) {
          setCategories(parsedData);
          setLoading(false);
        } else {
          fetchFromApi();
        }
      } else {
        fetchFromApi();
      }
    };

    const fetchFromApi = async () => {
      try {
        const response = await axios.get("https://phonespotbackend.blacktechcorp.com/api");
        const fetchedCategories = response.data.categories.map((category) => ({
          name: category.name,
          slug: `/service/${category.slug}`, 
          image: `https://phonespotbackend.blacktechcorp.com/${category.image}`, 
          shortDescription: category.short_description,
        }));

      
        localStorage.setItem("cachedCategories", JSON.stringify(fetchedCategories));
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
    <section ref={ref} id="categorySection" className="py-16 bg-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
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
            What we can fix for you
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in high-quality repairs for all major brands. Choose
            your device category below to learn more about our services.
          </p>
        </motion.div>

        {/* Loading spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-gray-500 ml-4">Loading categories...</p>
          </div>
        ) : (
          /* Category Cards */
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative bg-white shadow-md rounded-xl p-6 text-center cursor-pointer"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(category.slug)}
              >
                <img
                  src={category.image} 
                  alt={category.name}
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
