import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Subcategory = () => {
  const { category } = useParams();
  const [seriesData, setSeriesData] = useState({});
  const [formattedCategory, setFormattedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMore, setViewMore] = useState(false); // State to track "View More"

  useEffect(() => {
    const fetchSubcategories = async () => {
      setLoading(true);
      try {
        const subcategoryRes = await axios.get(
          `https://phonespotbackend.blacktechcorp.com/api/category/subcategory/${category}`
        );
        const subcategories = subcategoryRes.data.categories;

        const allSeriesData = {};

        for (const subcategory of subcategories) {
          const childCategoryRes = await axios.get(
            `https://phonespotbackend.blacktechcorp.com/api/category/childcategory/${subcategory.slug}`
          );
          const childCategories = childCategoryRes.data.categories || [];
          allSeriesData[subcategory.name] = childCategories.map((childCategory) => ({
            name: childCategory.name,
            image: childCategory.image
              ? `https://phonespotbackend.blacktechcorp.com/${childCategory.image}`
              : "",
          }));
        }

        setSeriesData(allSeriesData);
        setFormattedCategory(category.charAt(0).toUpperCase() + category.slice(1));
      } catch (error) {
        console.error("Error fetching series data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, [category]);

  const handleViewMore = () => {
    setViewMore(true);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl pt-32 mx-auto p-6">
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-2 lg:p-6 rounded-lg shadow-lg mb-2 lg:mb-8">
          <h1 className="text-xl lg:text-4xl font-bold text-white text-center lg:mb-4">
            {`${formattedCategory} Models`}
          </h1>
          <p className="text-white hidden lg:block text-center max-w-xl mx-auto">
            Explore the latest models and series of {formattedCategory}. Find
            your perfect match with our detailed listings and high-quality
            images.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-gray-500 ml-4">Loading subcategories...</p>
          </div>
        ) : (
          <>
            {Object.keys(seriesData).length === 0 ? (
              <p className="text-center text-gray-500">
                No models available for this category.
              </p>
            ) : (
              Object.entries(seriesData).map(([series, models]) => (
                <div key={series} className="mb-10">
                  <div className="flex items-center justify-center">
                    <h2 className="text-3xl py-2 font-semibold text-red-600 underline decoration-2 decoration-red-400 mb-4 text-center">
                      {series}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-8">
                    {models
                      .slice(0, viewMore ? models.length : window.innerWidth >= 1024 ? 12 : 6)
                      .map((model) => (
                        <div
                          key={model.name}
                          className="bg-white flex flex-col items-center shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                          <Link
                            to={`/product/${formattedCategory}/${encodeURIComponent(
                              model.name
                            )}`}
                          >
                            <img
                              src={model.image}
                              alt={model.name}
                              className="w-36 h-36 object-contain"
                            />
                            <div className="p-4">
                              <h3 className="text-sm lg:text-base font-semibold text-gray-800 text-center">
                                {model.name}
                              </h3>
                              <div className="mt-2 flex justify-center">
                                <Link
                                  to={`/product/${formattedCategory}/${encodeURIComponent(
                                    model.name
                                  )}`}
                                  className="bg-red-500 text-sm lg:text-base font-bold text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-200"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>

                  {/* View More Button */}
                  {!viewMore && models.length > (window.innerWidth >= 1024 ? 12 : 6) && (
                    <div className="flex justify-center lg:justify-end mt-4">
                      <button
                        onClick={handleViewMore}
                        className="text-red-500 font-bold px-4 py-2 rounded-full hover:text-white underline hover:bg-red-600 transition duration-200"
                      >
                        View More ...
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Subcategory;
