import React from 'react';
import portraitImage from '../data/portrait.jpg';

function AnimatedPhoto({ darkMode, name }) {
  return (
    <div className="w-1/3 -ml-8 mr-12 justify-center relative group">
      <div className="relative">
        {/* Gradient border animation */}
        <div className="absolute -inset-0.5 rounded-full
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      opacity-0 group-hover:opacity-50
                      transition-opacity duration-500 ease-in-out
                      animate-spin-slow -z-10"
        />
        
        {/* Main image with breathing effect */}
        <img 
          src={portraitImage}
          alt={name}
          className="relative rounded-full w-70 h-70 object-cover shadow-xl
                     animate-pulse-slow"
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full
                      bg-blue-400 opacity-0 group-hover:opacity-20
                      transition-opacity duration-500 ease-in-out
                      blur-xl"
        />
      </div>
    </div>
  );
}

export default AnimatedPhoto;