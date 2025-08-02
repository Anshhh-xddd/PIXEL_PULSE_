import React from 'react';
import { Zap, Bot, Globe, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Bot size={24} />, number: "200+", label: "Robots Designed" },
    { icon: <Zap size={24} />, number: "75+", label: "AI Systems" },
    { icon: <Globe size={24} />, number: "30+", label: "Countries Deployed" },
    { icon: <Cpu size={24} />, number: "10+", label: "Years in Robotics" }
  ];

  const scrollToHome = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="about" className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/6 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/4 via-transparent to-orange-500/4"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/12 via-transparent to-orange-500/6 animate-pulse"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/4 via-transparent to-transparent"></div>
      
      {/* Top fade for seamless transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
      
      {/* Bottom fade for seamless transition to Services */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Mobile Layout - Single Column with Optimized Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Content Section - Optimized for Mobile */}
          <div data-aos="fade-up" className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
              Robotics is our
              <br />
              <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">DNA</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto lg:mx-0">
              <p className="font-light">
                We are a cutting-edge design studio specializing in robotic interfaces, AI branding, and automation systems that define the future of human-machine interaction.
              </p>
              <p className="font-light">
                Our methodology fuses advanced engineering principles with innovative design thinking, creating solutions that are both functionally superior and visually striking.
              </p>
              <p className="font-light">
                From robotics startups to Fortune 500 tech giants, we've engineered visual systems for autonomous vehicles, industrial robots, and AI-powered platforms worldwide.
              </p>
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex justify-center lg:justify-start gap-4">
              <button 
                onClick={scrollToHome}
                className="group bg-gradient-to-r from-orange-500 to-red-500 text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 rounded-xl shadow-lg shadow-orange-500/25 transform hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                Explore Our Systems
              </button>
              {/* <button 
                onClick={scrollToTop}
                className="group border-2 border-orange-500 text-orange-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-black transition-all duration-300 rounded-xl transform hover:scale-105 cursor-pointer w-full sm:w-auto"
              >
                Back to Top
              </button> */}
            </div>
          </div>
          
          {/* Stats Section - Optimized for Mobile */}
          <div className="order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-4 sm:p-5 md:p-6 lg:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl sm:rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:scale-105" 
                  data-aos="zoom-in" 
                  data-aos-delay={400 + index * 100}
                >
                  <div className="text-orange-500 mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-500 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;