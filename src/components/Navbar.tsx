import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, GraduationCap, Code, BookOpen, BarChart, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });

    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Skills', icon: <BarChart size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-semibold text-xl text-blue-500">Sumonto<span className="text-green-500">.Biswas</span></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-white bg-blue-600'
                      : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'text-white bg-blue-600'
                    : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;