import React from "react";

// ServicesSection Component
const ServicesSection = () => {
  const services = [
    {
      title: "Quality Parts",
      description:
        "We use only the best parts to ensure long-lasting repairs.",
      icon: "https://cdn-icons-png.flaticon.com/512/9523/9523801.png",
    },
    {
      title: "Quality Repairs",
      description:
        "Expert technicians provide reliable and precise repairs.",
      icon: "https://cdn-icons-png.flaticon.com/512/7514/7514292.png",
    },
    {
      title: "Affordable Price",
      description:
        "Get top-quality service at prices that won't break the bank.",
      icon: "https://cdn-icons-png.flaticon.com/512/6485/6485303.png",
    },
    {
      title: "Fast Service",
      description:
        "Enjoy quick turnarounds with our efficient repair services.",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942767.png",
    },
  ];

  return (
    <section id="servicesSection">
      <div className="px-4 pt-4 mx-auto max-w-7xl">
        <div className="grid max-w-4xl lg:max-w-7xl grid-cols-1 mx-auto text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-4 sm:my-12">
          {services.map((service, index) => (
            <div key={index} className="relative card">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9 flex flex-col items-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20"
                  />
                  <h3 className="mt-6 text-2xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-base text-center text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
