import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const CategorySection = () => {
  const controls = useAnimation(); // Controls for animations
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 }); // Intersection Observer for triggering animations
  const navigate = useNavigate(); // Hook for navigation

  const [categories, setCategories] = useState([]); // State to store categories
  
  console.log(categories) 
  useEffect(() => {
    const fetchCategories = async () => {
      const cachedData = localStorage.getItem("cachedCategories"); // Use a different key name
  
      if (cachedData) {
        // If cached data exists, use it
        setCategories(JSON.parse(cachedData)); // Assuming categories are already set
      } else {
        try {
          const response = await axios.get("https://phonespotbackend.blacktechcorp.com/api");
  
          // Map the fetched categories to match the structure you need, including 'slug'
          const fetchedCategories = response.data.categories.map((category) => ({
            name: category.name,
            slug: `/services/${category.slug}`, // Include the slug here
            image: `https://phonespotbackend.blacktechcorp.com/${category.image}`, // Construct the image URL
            shortDescription: category.short_description,
             // Optional: include other properties if needed
          }));
  
          // Cache the fetched categories in localStorage
          localStorage.setItem("cachedCategories", JSON.stringify(fetchedCategories));
          setCategories(fetchedCategories); // Set the categories in state
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };
  
    fetchCategories(); // Call the function to fetch categories
  }, []);
  
  

  // Start animation when the section is in view
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

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
            key={index}
            className="relative bg-white shadow-md rounded-xl p-6 text-center cursor-pointer"
            initial="hidden"
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
              src={category.image} // Use the full URL directly here
              alt={category.title}
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
      </div>
    </section>
  );
};

export default CategorySection;
