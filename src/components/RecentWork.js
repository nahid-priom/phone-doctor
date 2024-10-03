import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';


const RecentWorkCarousel = () => {
  const recentWorks = [
    {
      title: 'iPhone X Battery Replacement',
      description: 'Replaced the battery of an iPhone X, enhancing its performance.',
      image: 'https://i.ytimg.com/vi/wBx3yANu1TY/maxresdefault.jpg',
    },
    {
      title: 'Samsung Galaxy Screen Repair',
      description: 'Fixed a cracked screen on a Samsung Galaxy S10.',
      image: 'https://images.ctfassets.net/16nm6vz43ids/4BjYhx6G2ghxtSwCANEvB4/e4224d64dcbf42ed75926d1a3f17b455/Samsung_phone_repair.png',
    },
    {
      title: 'iPad Pro Water Damage Repair',
      description: 'Recovered an iPad Pro from extensive water damage.',
      image: 'https://www.platinumphonerepair.com.au/upload/page/ipad_water_img3.jpg',
    },
    {
      title: 'MacBook Air Speaker Replacement',
      description: 'Replaced the faulty speakers of a MacBook Air.',
      image: 'https://9to5mac.com/wp-content/uploads/sites/6/2022/07/M2-MacBook-Air-iFixit-teardown.jpg?quality=82&strip=all',
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Our Recent Work</h2>
          <p className="mt-4 text-lg text-gray-600">
            Take a look at some of our recent repair projects. We take pride in delivering high-quality work for all our clients.
          </p>
        </motion.div>

        <Slider {...settings}>
          {recentWorks.map((work, index) => (
            <motion.div
              key={index}
              className="px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white shadow-md rounded-xl p-6 text-center">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-40 object-cover object-center rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{work.title}</h3>
                <p className="mt-4 text-base text-gray-600">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecentWorkCarousel;
