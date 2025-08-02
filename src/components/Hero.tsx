import React from 'react';
import { ArrowRight, Zap, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center bg-black relative overflow-hidden py-10 sm:py-16 md:py-20 lg:py-0"
    >
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/10 animate-pulse"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/5 via-transparent to-transparent"></div>
      
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      {/* Animated circuit pattern background (static now) */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-10 left-4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-orange-500"
        ></div>
        <div 
          className="absolute top-32 right-4 sm:right-10 md:right-32 w-10 sm:w-16 md:w-24 h-10 sm:h-16 md:h-24 border border-orange-500"
        ></div>
        <div 
          className="absolute bottom-24 left-4 sm:left-10 md:left-40 w-8 sm:w-14 md:w-20 h-8 sm:h-14 md:h-20 border border-orange-500"
        ></div>
        <div 
          className="absolute bottom-10 right-4 w-12 sm:w-20 md:w-28 h-12 sm:h-20 md:h-28 border border-orange-500"
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          {/* Icons (static) */}
          <div 
            className="flex justify-center items-center mb-6 sm:mb-8"
          >
            {/* <Cpu className="cpu-icon w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 text-orange-500 mr-2 sm:mr-4" /> */}
            {/* <Zap className="zap-icon w-7 sm:w-10 md:w-12 h-7 sm:h-10 md:h-12 text-orange-400" /> */}
          </div>
          {/* Title (static) */}
          <h1 
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            <span className="title-word inline-block">We Build Brands</span>
            <br />
            <span className="title-word inline-block text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">That Think,</span>
            <br />
            <span className="title-word inline-block">Learn, and Evolve.</span>
          </h1>
          {/* Subtitle (static) */}
          <p 
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
          >
            {"We design cutting-edge robotic interfaces, AI-powered brands, and futuristic visual experiences that propel your technology into tomorrow.".split(" ").map((word, i) => (
              <span key={i} className="subtitle-word inline-block mr-1">{word}</span>
            ))}
          </p>
          {/* Buttons (static) */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center"
          >
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/25 rounded-lg transform hover:scale-105 cursor-pointer"
            >
              {"Initialize Project".split(" ").map((word, i) => (
                <span key={i} className="button-word inline-block mr-1">{word}</span>
              ))}
              <ArrowRight size={18} className="arrow-icon group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="text-white border-2 border-orange-500 px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-black transition-all duration-300 rounded-lg transform hover:scale-105 cursor-pointer"
            >
              {"Explore Systems".split(" ").map((word, i) => (
                <span key={i} className="button-word inline-block mr-1">{word}</span>
              ))}
            </button>
          </div>
        </div>
      </div>
      {/* Scroll indicator (static) */}
      <div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-4 sm:w-6 h-7 sm:h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-orange-500 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;