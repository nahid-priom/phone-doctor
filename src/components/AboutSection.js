import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    about_us: '', // To store the fetched about us HTML content
    banner_image: '', // To store the banner image URL
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('https://phonespotbackend.blacktechcorp.com/api/about-us');
        if (!response.ok) {
          throw new Error('Failed to fetch about us data');
        }
        const data = await response.json();
        setAboutData({
          about_us: data.about_us.about_us,
          banner_image: data.about_us.banner_image,
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="max-w-7xl pt-28 lg:pt-44 mx-auto flex flex-col md:flex-row items-center justify-between py-8 bg-white">
      <div className="about-text w-full p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        {error && <p>Error loading about us data: {error}</p>}
        {/* Only display the content once it's fully loaded */}
        {aboutData.about_us && (
          <div
            className="text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: aboutData.about_us }}
          />
        )}
      </div>
    </div>
  );
};

export default AboutSection;
