import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Subcategory = () => {
  const { category } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [formattedCategory, setFormattedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheExpiry = 60 * 60 * 1000; // 1 hour cache
  
    const fetchSubcategories = async () => {
      setLoading(true);
      
      // Check cache first
      const cachedData = localStorage.getItem(`subcategories_${category}`);
      const cachedTime = localStorage.getItem(`subcategories_time_${category}`);
  
      if (cachedData && cachedTime && (Date.now() - cachedTime < cacheExpiry)) {
        const cachedSubcategories = JSON.parse(cachedData);
        const sortedSubcategories = cachedSubcategories.sort((a, b) => a.serial - b.serial);
        setSubcategories(sortedSubcategories);
        setFormattedCategory(formatCategoryName(category));
        setLoading(false);
        return;
      }
  
      try {
        const subcategoryRes = await axios.get(
          `https://backend.phonespotmd.com/api/category/subcategory/${category}`
        );
        const subcategoryData = subcategoryRes.data.categories || [];
        const sortedSubcategories = subcategoryData.sort((a, b) => a.serial - b.serial);
  
        setSubcategories(sortedSubcategories);
        setFormattedCategory(formatCategoryName(category));
  
        // Update cache
        localStorage.setItem(`subcategories_${category}`, JSON.stringify(sortedSubcategories));
        localStorage.setItem(`subcategories_time_${category}`, Date.now());
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchSubcategories();
  }, [category]);

  const formatCategoryName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <>
      <Navbar />

      
      <div className="max-w-7xl lg:pt-48 pt-40 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {formattedCategory} Series
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated selection of {formattedCategory} product lines
          </p>
          <div className="w-20 h-1 bg-red-800 mx-auto mt-4"></div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-800"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {subcategories.length === 0 ? (
              <div className="text-center py-16 bg-red-50 rounded-lg shadow-sm">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No series found</h3>
                <p className="mt-1 text-gray-500">
                  There are currently no product series available in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {subcategories.map((subcategory) => (
                  <div
                    key={subcategory.name}
                    className="bg-red-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <Link
                      to={`/subcategory/${category}/${subcategory.slug}`}
                      className="block h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex-grow flex items-center justify-center bg-gray-50 rounded p-4 mb-4">
                          <img
                            src={`https://backend.phonespotmd.com/${subcategory.image}`}
                            alt={subcategory.name}
                            className="h-40 object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {subcategory.name}
                          </h3>
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-900 transition-colors duration-200">
                            View Models
                            <svg
                              className="ml-2 -mr-1 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Subcategory;