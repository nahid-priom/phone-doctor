import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      
      const cacheKey = 'blogData';
      const cacheTimeKey = 'blogDataTimestamp';
      const cacheDuration = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      
      // Check if cached data exists and is still valid
      const cachedBlogs = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const currentTime = new Date().getTime();

      if (cachedBlogs && cachedTime && (currentTime - cachedTime < cacheDuration)) {
        // Parse and set cached blogs
        setBlogs(JSON.parse(cachedBlogs));
        setLoading(false);
        return; // Exit early if using cache
      }

      try {
        const response = await axios.get('https://phonespotbackend.blacktechcorp.com/api/blog');
        const blogData = response.data.blog; // Access the nested blog array
        
        if (Array.isArray(blogData)) {
          setBlogs(blogData);
          // Cache the blogs and the current timestamp
          localStorage.setItem(cacheKey, JSON.stringify(blogData));
          localStorage.setItem(cacheTimeKey, currentTime);
        } else {
          console.warn('Expected blogData to be an array, but got:', blogData);
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError('Unable to load blog posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to truncate HTML to 100 words
  const truncateHtml = (html, maxWords) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html; // Set the HTML content

    const textContent = tempDiv.textContent || tempDiv.innerText || ''; // Get text content
    const words = textContent.split(/\s+/); // Split by whitespace

    // Get the first 'maxWords' words and join back into a string
    const truncatedText = words.slice(0, maxWords).join(' ') + (words.length > maxWords ? ' ...' : '');

    // Return sanitized HTML with truncated text
    return DOMPurify.sanitize(truncatedText);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8 pt-32 lg:pt-36 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img 
                src={`https://phonespotbackend.blacktechcorp.com/${blog.image}`} 
                alt={blog.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <div 
                  className="text-gray-700 mb-4 flex-grow" 
                  dangerouslySetInnerHTML={{ __html: truncateHtml(blog.description, 20) }} // Truncate HTML to 100 words
                />
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${blog.slug}`} 
                    className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No blogs available</div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
