import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://backend.phonespotmd.com/api/blog-details/${slug}`
        );
        if (!response.ok) {
          throw new Error("Blog post not found");
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

  useEffect(() => {
    if (blog?.blog?.description) {
      const text = DOMPurify.sanitize(blog.blog.description, {
        ALLOWED_TAGS: []
      });
      const wordCount = text.trim().split(/\s+/).length;
      setReadingTime(Math.ceil(wordCount / 200)); // Average reading speed: 200 words per minute
    }
  }, [blog]);

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid date";

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "America/New_York",
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-md">
          <h3 className="text-lg font-medium text-red-700">Error Loading Blog Post</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="max-w-md">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Blog post not found</h3>
          <p className="mt-1 text-gray-500 mb-4">The requested blog post could not be found.</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(blog.blog.description || "");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-white pt-20 lg:pt-44 pb-16">
        {/* Back button */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-red-600 hover:text-red-800 font-medium transition duration-200"
          >
            ← Back to all articles
          </button>
        </div>

        {/* Article container */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blog.blog.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    blog.blog.author
                  )}&background=random&rounded=true`}
                  alt={blog.blog.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{blog.blog.author}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-3">{formatDate(blog.blog.created_at)}</span>
                    <span>• {readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200"></div>
          </header>

          {/* Featured image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <img
              src={`https://backend.phonespotmd.com/${blog.blog.image}`}
              alt={blog.blog.title}
              className="w-full h-[500px] object-cover"
              loading="eager"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          ></div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate(-1)}
                className="text-red-600 hover:text-red-800 font-medium transition duration-200"
              >
                ← Back to all articles
              </button>
              <div className="text-sm text-gray-500">
                Last updated: {formatDate(blog.blog.updated_at || blog.blog.created_at)}
              </div>
            </div>
          </footer>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetails;