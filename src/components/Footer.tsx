import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Sumonto Biswas. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Use</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;