import React from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'How to Choose the Right Mobile Repair Service',
      image: "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20230421/2804543055891549901/1313779506120491009/1313779506120491009.png",
      description: 'Choosing the right mobile repair service can be daunting. This guide will help you find the best service for your needs.',
      link: '/blog/choose-right-service' 
    },
    {
      id: 2,
      title: 'Top 5 Common Mobile Repair Issues and Solutions',
      image: "https://thumbs.dreamstime.com/b/concept-mobile-phone-repair-horizontal-banner-smartphone-tools-service-electronic-technic-colorful-vector-line-art-93479182.jpg",
      description: 'Discover the most common issues faced by mobile phone users and learn how to solve them effectively.',
      link: '/blog/common-issues-solutions' 
    },
    {
      id: 3,
      title: 'The Importance of Using Genuine Parts in Repairs',
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/EO/AS/QS/40988571/mobile-spare-parts-500x500.jpeg",
      description: 'Using genuine parts in mobile repairs is crucial. Read on to understand why quality matters.',
      link: '/blog/genuine-parts-importance' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 pt-32 lg:pt-44 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{blog.description}</p>
              <div className="mt-auto">
              <Link to={`/blog/${blog.id}`} className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
