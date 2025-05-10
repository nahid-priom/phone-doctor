import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const ChildCategory = () => {
  const { category, subcategorySlug } = useParams();
  const [childCategories, setChildCategories] = useState([]);
  const [formattedSubcategory, setFormattedSubcategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheExpiry = 60 * 60 * 1000;

    const fetchChildCategories = async () => {
      setLoading(true);

      const cachedData = localStorage.getItem(`childcategories_${subcategorySlug}`);
      const cachedTime = localStorage.getItem(`childcategories_time_${subcategorySlug}`);

      if (cachedData && cachedTime && Date.now() - cachedTime < cacheExpiry) {
        const cachedChildCategories = JSON.parse(cachedData);
        const sortedChildCategories = cachedChildCategories.sort((a, b) => a.serial - b.serial);
        setChildCategories(sortedChildCategories);
        setFormattedSubcategory(formatSubcategoryName(subcategorySlug));
        setLoading(false);
        return;
      }

      try {
        const childCategoryRes = await axios.get(
          `https://backend.phonespotmd.com/api/category/childcategory/${subcategorySlug}`
        );
        const childCategoriesData = childCategoryRes.data.categories || [];

        const sortedChildCategories = childCategoriesData.sort(
          (a, b) => a.serial - b.serial
        );

        setChildCategories(sortedChildCategories);
        setFormattedSubcategory(formatSubcategoryName(subcategorySlug));

        localStorage.setItem(
          `childcategories_${subcategorySlug}`,
          JSON.stringify(sortedChildCategories)
        );
        localStorage.setItem(
          `childcategories_time_${subcategorySlug}`,
          Date.now()
        );
      } catch (error) {
        console.error("Error fetching child categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChildCategories();
  }, [subcategorySlug]);

  const formatSubcategoryName = (slug) => {
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl lg:pt-48 pt-40 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {formattedSubcategory} Models
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse all available models in our {formattedSubcategory} series
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
            {childCategories.length === 0 ? (
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
                <h3 className="mt-2 text-lg font-medium text-gray-900">No models found</h3>
                <p className="mt-1 text-gray-500">
                  There are currently no models available in this series.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {childCategories.map((model) => (
                  <div
                    key={model.name}
                    className="bg-red-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <Link
                      to={`/product/${category}/${encodeURIComponent(model.slug)}`}
                      className="block h-full"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex-grow flex items-center justify-center bg-gray-50 rounded p-4 mb-4">
                          <img
                            src={`https://backend.phonespotmd.com/${model.image}`}
                            alt={model.name}
                            className="h-40 object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {model.name}
                          </h3>
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-900 transition-colors duration-200">
                            View Details
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

export default ChildCategory;