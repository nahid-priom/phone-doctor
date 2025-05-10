import React from 'react';

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="tel:+12406965671"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        aria-label="Call Us"
      >
        {/* Phone icon using SVG (no external image dependency) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
          />
        </svg>
        
        {/* Pulsing animation effect */}
        <span className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-40 animate-ping"></span>
      </a>
    </div>
  );
};

export default FloatingCallButton;