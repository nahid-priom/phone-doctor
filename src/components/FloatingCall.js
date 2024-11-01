import React from 'react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+12406965671"
      className="fixed bottom-9 animate-bounce right-5 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
      aria-label="Call Us"
    >
      <img width="50" height="50" className='bg-white font-bold rounded-full p-1' src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
    </a>
  );
};

export default FloatingCallButton;
