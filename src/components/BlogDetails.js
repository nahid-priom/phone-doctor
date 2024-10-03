import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogDetails = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "How to Choose the Right Mobile Repair Service",
      content: `Choosing the right mobile repair service can be daunting. This guide will help you find the best service for your needs. 
      Here’s a more detailed explanation about why choosing the right service matters...

      **Why It Matters:**
      Selecting a reputable repair service ensures your device is in capable hands. You'll avoid potential mishaps like incorrect repairs or further damage. Moreover, a good repair service will use genuine parts, provide a warranty, and ensure quick turnaround times. 

      **Tips to Choose the Right Service:**
      1. **Look for Experience:** Ensure the service center has certified technicians.
      2. **Check Reviews:** Customer feedback can give you insights into their service quality.
      3. **Compare Pricing:** Don't compromise quality for cost; find a balance between affordability and professionalism.

      **Conclusion:**
      Making an informed choice will save you time, money, and stress in the long run.`,
      image: "https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20230421/2804543055891549901/1313779506120491009/1313779506120491009.png",

      author: "John Doe",
      publishedAt: "2024-08-20T10:30:00Z",
    },
    {
      id: 2,
      title: "Top 5 Common Mobile Repair Issues and Solutions",
      content: `Discover the most common issues faced by mobile phone users and learn how to solve them effectively.
      Here’s a more detailed explanation of each issue...

      **Common Issues:**
      1. **Screen Damage:** Cracked or broken screens are the most common repair.
      2. **Battery Problems:** Poor battery life or charging issues are common.
      3. **Water Damage:** Accidental spills or drops into water.
      4. **Software Malfunctions:** Issues with the operating system or apps.
      5. **Speaker or Microphone Issues:** Sound-related problems.

      **Solutions:**
      - For screen damage, consider screen replacement.
      - Battery replacements or cleaning ports can solve charging issues.
      - Address water damage immediately to prevent internal corrosion.
      - Regular software updates can solve many software issues.

      **Conclusion:**
      Understanding these common issues and their solutions can help you better maintain your device and know when it's time to seek professional help.`,
      image:
        "https://thumbs.dreamstime.com/b/concept-mobile-phone-repair-horizontal-banner-smartphone-tools-service-electronic-technic-colorful-vector-line-art-93479182.jpg",
      author: "Jane Smith",
      publishedAt: "2024-08-18T14:45:00Z",
    },
    {
      id: 3,
      title: "The Importance of Using Genuine Parts in Repairs",
      content: `Using genuine parts in mobile repairs is crucial. Read on to understand why quality matters.
      Here’s a more detailed discussion on the importance of genuine parts...

      **Benefits of Genuine Parts:**
      - **Quality Assurance:** Genuine parts are manufactured to meet the highest quality standards, ensuring durability and compatibility.
      - **Warranty Protection:** Using genuine parts maintains the manufacturer's warranty.
      - **Better Performance:** Genuine parts often offer better performance and reliability compared to aftermarket options.

      **Risks of Non-Genuine Parts:**
      - **Inferior Quality:** Cheaper parts may not last as long and could damage your device.
      - **Safety Concerns:** Non-genuine parts might not meet safety standards, posing risks.

      **Conclusion:**
      Always opt for genuine parts for repairs to ensure the longevity and safety of your device.`,
      image:
        "https://thumbs.dreamstime.com/b/concept-mobile-phone-repair-horizontal-banner-smartphone-tools-service-electronic-technic-colorful-vector-line-art-93479182.jpg",
      author: "Emily Johnson",
      publishedAt: "2024-08-22T16:00:00Z",
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  // Function to format date to USA time variant
  const formatDateToUS = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/New_York", // Ensuring it matches USA time variant
    }).format(date);
  };

  return (
    <div>
      <Navbar />
      <div className="blog-details-container pt-28 lg:pt-44 py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover lg:mb-8"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <div className="text-sm text-gray-500 mb-4 flex items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  blog.author
                )}&background=random&rounded=true`}
                alt={blog.author}
                className="w-8 h-8 rounded-full mr-2"
              />
              By <span className="font-medium mx-2 text-red-800">{blog.author}</span> |{" "}
              {formatDateToUS(blog.publishedAt)}
            </div>
            <div className="border-t border-gray-300 mt-4 mb-8"></div>
            <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
              {blog.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
