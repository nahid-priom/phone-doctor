import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { slug } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(
          `https://phonespotbackend.blacktechcorp.com/api/blog-details/${slug}`
        );
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        
        setBlog(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  const formatDateToUS = (dateString) => {
    if (!dateString) return "Date not available"; 
    const date = new Date(dateString);

    if (isNaN(date)) {
      return "Invalid date"; 
    }

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/New_York",
    }).format(date);
  };

  if (loading) {
    return <div className="hidden">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(blog.blog.description || "");
  return (
    <div>
      <Navbar />
      <div className="blog-details-container pt-28 lg:pt-44 py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-red-50 shadow-lg rounded-lg overflow-hidden">
          <img
            src={`https://phonespotbackend.blacktechcorp.com/${blog.blog.image}`} 
            alt={blog.blog.title}
            className="w-full h-60 lg:h-96  lg:object-cover object-fill lg:mb-8"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {blog.blog.title}
            </h1>
            <div className="text-sm text-gray-500 mb-4 flex items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  blog.author
                )}&background=random&rounded=true`}
                alt={blog.author}
                className="w-8 h-8 rounded-full mr-2"
              />
              By <span className="font-medium mx-2 text-red-800">{blog.blog.author}</span> |{" "}
              {formatDateToUS(blog.blog.created_at)}
            </div>
            <div className="border-t border-gray-300 mt-4 mb-8"></div>
            <div
              className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
