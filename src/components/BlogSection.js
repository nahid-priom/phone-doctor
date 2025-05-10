import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      
      const cacheKey = 'blogData';
      const cacheTimeKey = 'blogDataTimestamp';
      const cacheDuration = 24 * 60 * 60 * 1000; 
      
      const cachedBlogs = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const currentTime = new Date().getTime();

      if (cachedBlogs && cachedTime && (currentTime - cachedTime < cacheDuration)) {
        setBlogs(JSON.parse(cachedBlogs));
        setLoading(false);
        return; 
      }

      try {
        const response = await axios.get('https://backend.phonespotmd.com/api/blog');
        const blogData = response.data.blog;
        
        if (Array.isArray(blogData)) {
          setBlogs(blogData);
          localStorage.setItem(cacheKey, JSON.stringify(blogData));
          localStorage.setItem(cacheTimeKey, currentTime);
        } else {
          console.warn('Expected blogData to be an array, but got:', blogData);
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setError('Unable to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const truncateHtml = (html, maxWords) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const words = textContent.split(/\s+/);
    const truncatedText = words.slice(0, maxWords).join(' ') + (words.length > maxWords ? '...' : '');
    return DOMPurify.sanitize(truncatedText);
  };

  const loadMore = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-8 text-center min-h-[50vh] flex items-center justify-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 max-w-2xl">
          <h3 className="text-lg font-medium text-red-700">Error Loading Blog Posts</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover helpful tips, industry news, and repair insights from our experts
          </p>
        </div>

        {blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.slice(0, visibleBlogs).map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col group"
                >
                  <article>
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={`https://backend.phonespotmd.com/${blog.image}`} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                          {blog.title}
                        </h3>
                        <div 
                          className="text-gray-600 mb-4 line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: truncateHtml(blog.description, 25) }} 
                        />
                      </div>
                      <div className="mt-4 inline-flex items-center text-red-600 group-hover:text-red-800 font-medium transition duration-200">
                        Read Article
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {visibleBlogs < blogs.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMore}
                  className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-300 transition duration-200 inline-flex items-center shadow-sm"
                >
                  Load More Articles
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No articles available</h3>
            <p className="mt-1 text-gray-500">Check back later for new blog posts.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;