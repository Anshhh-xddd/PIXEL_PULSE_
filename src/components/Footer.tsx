import React from 'react';
import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-transparent to-orange-500/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/10 via-transparent to-orange-500/5 animate-pulse"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/3 via-transparent to-transparent"></div>
      
      {/* Top fade for seamless transition from Contact */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-8 md:gap-12">
          <div className="md:col-span-2" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
              <span className="group text-orange-500 hover:scale-105 transition-transform duration-200 cursor-pointer select-none relative">
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
                    ROBO
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
                      FLUX
                    </span>
                  </span>
                </span>
              </span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Advanced robotics design studio engineering the future of human-machine interfaces and AI-powered brand experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6 md:mt-8">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Twitter size={24} />
              </a> */}
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Youtube size={24} />
              </a> */}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Services</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"> Brand Strategy & Positioning</a></li>
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Visual Identity & Logo Design</a></li>
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Typography & Custom Lettering</a></li>
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Print & Packaging Design</a></li>
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Rebranding & Brand Refresh</a></li>
              <li><a href="#services" onClick={scrollToServices} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Art Direction & Photoshoot Styling</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Network</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              <li><a href="#about" onClick={scrollToAbout} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">About System</a></li>
              <li><a href="#portfolio" onClick={scrollToPortfolio} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Project Archive</a></li>
              {/* <li><a href="#" className="hover:text-orange-500 transition-colors duration-200">Join Network</a></li> */}
              <li><a href="#contact" onClick={scrollToContact} className="hover:text-orange-500 transition-colors duration-200 cursor-pointer">Connect</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 text-xs sm:text-sm md:text-sm">
            © 2024 PIXELPULSE Systems. All protocols reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-3 sm:mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">Privacy Protocol</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">System Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;