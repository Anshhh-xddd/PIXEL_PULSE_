import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Pixel_Pulse from '../Assets/Logo.png'; // Logo file path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/portfolio') setActiveSection('portfolio');
    else if (location.pathname === '/about') setActiveSection('about');
    else if (location.pathname === '/contact') setActiveSection('contact');
    else if (location.pathname !== '/') setActiveSection('home');
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (['portfolio', 'about', 'contact'].includes(sectionId)) {
      navigate(`/${sectionId}`);
      setIsOpen(false);
      setActiveSection(sectionId);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsOpen(false);
      setActiveSection(sectionId);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setIsOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'home', label: 'Home', tooltip: 'Welcome to PixelPulse' },
    { id: 'services', label: 'Services', tooltip: 'Our AI Solutions' },
    { id: 'portfolio', label: 'Portfolio', tooltip: 'View Our Work' },
    { id: 'about', label: 'About', tooltip: 'Learn About Us' },
    { id: 'contact', label: 'Contact', tooltip: 'Get In Touch' }
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-orange-500' : 'bg-transparent'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
          {/* Logo replaced with PNG */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={Pixel_Pulse} alt="PixelPulse Logo" className="h-10 sm:h-12 md:h-16" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`smooth-nav px-3 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-orange-500/10 border border-orange-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-orange-500/10'
                }`}
                title={item.tooltip}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        onClick={handleBackgroundClick}
        className={`lg:hidden fixed inset-0 bg-black transition-all duration-700 ease-in-out z-40 cursor-pointer ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '3.5rem' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 py-8 space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group w-full max-w-sm text-center text-white text-2xl font-semibold hover:text-orange-500 transition-colors duration-300 ${
                activeSection === item.id ? 'text-orange-500' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
