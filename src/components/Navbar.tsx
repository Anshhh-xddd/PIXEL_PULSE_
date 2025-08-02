import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section based on scroll position
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle background click to close menu
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the background overlay, not on menu content
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  // Enhanced smooth scroll function for all sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false); // Close menu after navigation
    setActiveSection(sectionId); // Update active section
  };

  // Navigation items configuration
  const navItems = [
    { id: 'home', label: 'Home', tooltip: 'Welcome to PixelPulse' },
    { id: 'services', label: 'Services', tooltip: 'Our AI Solutions' },
    { id: 'portfolio', label: 'Portfolio', tooltip: 'View Our Work' },
    { id: 'about', label: 'About', tooltip: 'Learn About Us' },
    { id: 'contact', label: 'Contact', tooltip: 'Get In Touch' }
  ];

  return (
    <nav className={` w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-orange-500' : 'bg-transparent'
    }`}>
      {/* Hero-style gradient backgrounds for navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* Logo - Enhanced with Hero-style effects and click to scroll to top */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="group text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer select-none relative"
            >
              <span className="relative z-10">
                <span
                  className="transition-all duration-300 group-hover:text-white group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-orange-500 group-hover:drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] group-hover:brightness-200"
                  style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'inherit',
                    transition: 'color 0.3s, filter 0.3s',
                    filter: 'none',
                  }}
                >
                  PIXEL
                  <span
                    className="text-white group-hover:text-orange-500 group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-orange-500 group-hover:drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)] group-hover:brightness-200"
                    style={{
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'inherit',
                      transition: 'color 0.3s, filter 0.3s',
                      filter: 'none',
                    }}
                  >
                    PULSE
                  </span>
                </span>
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation - Enhanced with active section tracking */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group text-white hover:text-orange-500 transition-all duration-300 font-medium px-4 py-3 rounded-lg hover:scale-105 transform ${
                    activeSection === item.id 
                      ? 'text-orange-500 bg-orange-500/10 border border-orange-500/30' 
                      : ''
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-gray-700/50">
                    {item.tooltip}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-l border-t border-gray-700/50"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile/Tablet Hamburger Button - Hero-style */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded-lg hover:scale-110 transition-all duration-300 touch-manipulation bg-gray-900/20 hover:bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {/* Enhanced Hamburger Lines with Better Spacing and Animation */}
              <span
                className={`block absolute h-0.5 w-6 sm:w-7 md:w-8 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 ${
                  isOpen 
                    ? 'rotate-45 translate-y-0 top-4 sm:top-5 md:top-6 w-6 sm:w-7 md:w-8' 
                    : 'top-3 sm:top-4 md:top-5 w-6 sm:w-7 md:w-8'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 sm:w-7 md:w-8 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 ${
                  isOpen 
                    ? 'opacity-0 scale-0 translate-x-4' 
                    : 'top-5 sm:top-6 md:top-7 w-6 sm:w-7 md:w-8'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 sm:w-7 md:w-8 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 ${
                  isOpen 
                    ? '-rotate-45 translate-y-0 top-4 sm:top-5 md:top-6 w-6 sm:w-7 md:w-8' 
                    : 'top-7 sm:top-8 md:top-9 w-6 sm:w-7 md:w-8'
                }`}
              ></span>
              
              {/* Animated Background Ring */}
              <div className={`absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 ${
                isOpen 
                  ? 'border-orange-500/50 bg-orange-500/10 scale-110' 
                  : 'group-hover:border-orange-500/30 group-hover:bg-orange-500/5'
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile/Tablet Menu Overlay - Hero-style backgrounds with background click handler */}
      <div
        id="mobile-menu"
        onClick={handleBackgroundClick}
        className={`lg:hidden fixed inset-0 bg-black transition-all duration-700 ease-in-out z-40 cursor-pointer ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '3.5rem' }}
      >
        {/* Hero-style Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent"></div>
        
        <div className="flex flex-col items-center justify-center h-full px-6 py-8 space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
          {/* Mobile Navigation Links - Enhanced with active section tracking */}
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative group w-full max-w-sm text-center"
            >
              <div className={`relative px-6 py-4 text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg sm:text-xl md:text-2xl rounded-lg hover:scale-105 transform touch-manipulation ${
                activeSection === item.id 
                  ? 'text-orange-500 bg-orange-500/10 border border-orange-500/30' 
                  : ''
              }`}>
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/95 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-gray-700/50">
                  {item.tooltip}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/95 rotate-45 border-l border-t border-gray-700/50"></div>
                </div>
              </div>
            </button>
          ))}

          {/* Enhanced Mobile Menu Footer */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="text-gray-300 text-lg sm:text-xl font-bold">
              <span className="text-orange-500">PIXEL</span><span className="text-white">PULSE</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base mt-2">Where Artificial Intelligence Meets Brand Identity</div>
            <div className="text-gray-500 text-xs mt-1">Innovation • Design • Technology</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;