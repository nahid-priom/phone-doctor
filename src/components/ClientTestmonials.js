import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const ClientTestimonialsCarousel = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Amazing service! My iPhone was fixed in no time and works like new.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      feedback: 'Professional and quick. Highly recommend for any tech repairs.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Johnson',
      feedback: 'My MacBook Air sounds perfect after the speaker replacement. Thanks!',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
      name: 'Emily Davis',
      feedback: 'Recovered my iPad from water damage like magic!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-80">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover object-center rounded-full mb-4 border-4 border-gray-300"
                />
                <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="mt-4 text-base text-gray-700 max-w-xs h-20 overflow-hidden">
                  "{testimonial.feedback}"
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestimonialsCarousel;
