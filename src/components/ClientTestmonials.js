import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const ClientTestimonialsCarousel = () => {
  const testimonials = [
    {
      name: 'Bonnie Skipwith',
      feedback: 'Rony was very good repairing my phone. This store is amazing. He did good work and was professional and fast. I agree everyone should use this store. I\'m a happy customer!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      date: '2 days ago'
    },
    {
      name: 'Adenike Oshinaike',
      feedback: 'I was amazed how quickly they fixed my phone. The staff was friendly and I had a great experience!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      date: '1 week ago'
    },
    {
      name: 'Max C',
      feedback: 'I had a fantastic experience at Phone Spot! They fixed my phone in just 15 minutes. The staff was friendly, professional, and efficient. Highly recommend their service!',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      rating: 5,
      date: '3 days ago'
    },
    {
      name: 'Arunav Bordoloi',
      feedback: 'The experience has been very good. They replaced the screen on our Samsung S9 and changed the tempered glass on my iPhone with perfect precision.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 4,
      date: '2 weeks ago'
    },
    {
      name: 'Antionette Miller',
      feedback: 'Fixed my phone quickly when I thought it was a bigger problem. The tech was super nice, fast & efficient. Customer service was beyond what I expected!',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5,
      date: '5 days ago'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={faStar} 
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-800 text-white text-sm font-semibold rounded-full mb-4">
            HAPPY CLIENTS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-red-800 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers about their experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...settings} className="pb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 focus:outline-none h-[350px] lg:[300px]">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="p-6 flex-grow">
                    <FontAwesomeIcon 
                      icon={faQuoteLeft} 
                      className="text-red-800 text-3xl opacity-20 mb-4" 
                    />
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.feedback}"
                    </p>
                  </div>
                  
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 object-cover rounded-full mr-4 border-2 border-red-100"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <div className="flex items-center mt-1">
                          <div className="flex mr-2">
                            {renderStars(testimonial.rating)}
                          </div>
                          <span className="text-xs text-gray-500">{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <a
            href="/reviews"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-800 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Read More Reviews
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonialsCarousel;