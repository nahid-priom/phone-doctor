import React from 'react';


const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      title: 'Experienced Technicians',
      image: "https://w7.pngwing.com/pngs/700/89/png-transparent-phone-repairing-illustration.png",
      description: 'Our team consists of skilled technicians with years of experience in mobile repairs.',
    },
    {
      id: 2,
      title: 'Affordable Pricing',
      image: "https://cdn-icons-png.flaticon.com/512/8771/8771907.png",
      description: 'We offer competitive pricing for all repair services without compromising on quality.',
    },
    {
      id: 3,
      title: 'High-Quality Parts',
      image: "https://w7.pngwing.com/pngs/146/146/png-transparent-quality-best-quality-high-quality-miscellaneous-emblem-text-thumbnail.png",
      description: 'We use only the highest quality parts for all repairs to ensure longevity and performance.',
    },
    {
      id: 4,
      title: 'Fast Service',
      image: "https://img.freepik.com/premium-vector/flat-icon-with-express-fast-delivery-banner-design-courier-service-food-delivery-service_476325-201.jpg",
      description: 'We understand the importance of your device, so we ensure a fast repair process.',
    },
    {
      id: 5,
      title: 'Excellent Customer Service',
      image: "https://cdn-icons-png.flaticon.com/512/8781/8781830.png",
      description: 'Our customer service team is here to assist you with any questions or concerns.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="card bg-white rounded-lg shadow-lg p-4">
            <img src={feature.image} alt={feature.title} className="w-full h-40 object-contain rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
