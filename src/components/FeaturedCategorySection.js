import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeaturedCategorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const navigate = useNavigate(); 

  const [featuredCategories, setFeaturedCategories] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const fetchCategories = async () => {
      const cachedCategories = localStorage.getItem("featured-categories");

      if (cachedCategories) {
        
        setFeaturedCategories(JSON.parse(cachedCategories));
        setIsLoading(false);
      } else {
        try {
          const response = await axios.get(
            "https://phonespotbackend.blacktechcorp.com/api"
          ); 

          const fetchedCategories = response.data.feateuredCategories.map(
            (item) => ({
              title: item.category.name,
              description: item.category.short_description,
              image: item.category.image,
              path: `/service/${item.category.slug}`,
            })
          );

          
          localStorage.setItem("featured-categories", JSON.stringify(fetchedCategories));
          setFeaturedCategories(fetchedCategories); 
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching categories:", error);
          setIsLoading(false);
        }
      }
    };

    fetchCategories(); 
  }, []);

  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // If data is still loading, you can show a loading indicator
  if (isLoading) {
    return (
      <section className="py-16 bg-red-100 text-center">
        <p>Loading categories...</p>
      </section>
    );
  }

  return (
    <section ref={ref} id="featured-categorySection" className="py-16 bg-red-100">
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
          {featuredCategories.map((category, index) => (
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
              onClick={() => navigate(category.path)}
            >
              <img
                src={`https://phonespotbackend.blacktechcorp.com/${category.image}`}
                alt={category.title}
                className="w-32 h-32 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {category.title}
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

export default FeaturedCategorySection;
