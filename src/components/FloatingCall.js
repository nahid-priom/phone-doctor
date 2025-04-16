import React from 'react';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+12406965671"
      className="fixed bottom-9 animate-bounce right-5 bg-blue-600 text-white p-2 rounded-xl shadow-lg hover:bg-blue-900 transition duration-300"
      aria-label="Call Us"
    >
      <img width="30" height="30" className='bg-white font-bold rounded-xl p-2' src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
    </a>
  );
};

export default FloatingCallButton;
