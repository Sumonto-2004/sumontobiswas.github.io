import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const profileImageUrl = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg";
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-light text-blue-400 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Sumonto Biswas
            </h1>
            <div className="h-12 mb-4">
              <TypeAnimation
                sequence={[
                  'Materials Science Engineer',
                  1000,
                  'Researcher',
                  1000,
                  'SolidWorks Designer',
                  1000,
                ]}
                wrapper="h3"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-gray-300"
              />
            </div>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Dedicated BSc student in Materials Science and Engineering at BUET, focused on innovative materials research and sustainable energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToAbout}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowDown size={18} />
              </button>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border border-green-500 text-green-500 rounded-md hover:bg-green-500/10 transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 p-2 bg-slate-800 mx-auto">
                <img 
                  src={profileImageUrl} 
                  alt="Sumonto Biswas" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-full border border-blue-500">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-500">Available for Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="p-2 rounded-full bg-blue-600 text-white">
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;