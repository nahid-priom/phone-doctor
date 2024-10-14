import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const ChildCategory = () => {
  const { category, subcategorySlug } = useParams(); // Extract the category and subcategory from the URL parameters
  const [childCategories, setChildCategories] = useState([]);
  const [formattedSubcategory, setFormattedSubcategory] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const cacheExpiry = 60 * 60 * 1000; // Cache expiry time (24 hours)
  
    const fetchChildCategories = async () => {
      setLoading(true);
  
      // Check if data is in local storage
      const cachedData = localStorage.getItem(`childcategories_${subcategorySlug}`);
      const cachedTime = localStorage.getItem(`childcategories_time_${subcategorySlug}`);
  
      if (cachedData && cachedTime && (Date.now() - cachedTime < cacheExpiry)) {
        // Use cached data if it's not expired
        const cachedChildCategories = JSON.parse(cachedData);
  
        // Sort by serial before setting the state
        const sortedChildCategories = cachedChildCategories.sort((a, b) => a.serial - b.serial);
        setChildCategories(sortedChildCategories);
        setFormattedSubcategory(subcategorySlug.replace(/-/g, " ").toUpperCase());
        setLoading(false);
        return;
      }
  
      try {
        // Fetch child categories for the selected subcategory from the API
        const childCategoryRes = await axios.get(
          `https://phonespotbackend.blacktechcorp.com/api/category/childcategory/${subcategorySlug}`
        );
        const childCategoriesData = childCategoryRes.data.categories || [];
  
        // Sort the child categories by serial
        const sortedChildCategories = childCategoriesData.sort((a, b) => a.serial - b.serial);
  
        // Save the sorted data to state
        setChildCategories(sortedChildCategories);
        setFormattedSubcategory(subcategorySlug.replace(/-/g, " ").toUpperCase());
  
        // Cache the sorted data in local storage
        localStorage.setItem(`childcategories_${subcategorySlug}`, JSON.stringify(sortedChildCategories));
        localStorage.setItem(`childcategories_time_${subcategorySlug}`, Date.now());
      } catch (error) {
        console.error("Error fetching child categories:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchChildCategories();
  }, [subcategorySlug]);
  

  return (
    <>
      <Navbar />

      <div className="max-w-7xl pt-32 mx-auto p-6">
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4">
            {`${formattedSubcategory} Models`}
          </h1>
          <p className="text-white hidden lg:block text-center max-w-xl mx-auto">
            Browse through all available models in the {formattedSubcategory} series.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-gray-500 ml-4">Loading models...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-8">
            {childCategories.length === 0 ? (
              <p className="text-center text-gray-500">
                No models available for this series.
              </p>
            ) : (
              childCategories.map((model) => (
                <div
                  key={model.name}
                  className="bg-white p-4 flex flex-col items-center shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Link to={`/product/${category}/${encodeURIComponent(model.slug)}`}>
                    <img
                      src={`https://phonespotbackend.blacktechcorp.com/${model.image}`}
                      alt={model.name}
                      className="w-full my-3 flex justify-center h-36 object-contain"
                    />
                    <div className=" flex flex-col items-center gap-2">
                      <h3 className="text-sm lg:text-base font-semibold text-gray-800 text-center">
                        {model.name}
                      </h3>
                      <Link
                        to={`/product/${category}/${encodeURIComponent(model.slug)}`}
                        className="bg-red-500 text-sm lg:text-base font-bold text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-200"
                      >
                        View Details
                      </Link>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ChildCategory;
