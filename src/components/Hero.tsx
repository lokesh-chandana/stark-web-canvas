
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black mb-6">
              Hi, I'm <span className="border-b-4 border-black">Developer</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I create beautiful and functional websites with a focus on user experience, performance, and elegant code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-sm">Your photo or illustration here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
