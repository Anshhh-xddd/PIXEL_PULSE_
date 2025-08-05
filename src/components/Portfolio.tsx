import React from 'react';
import APinvestment from "src\Assets\AP investment.jpg"

const Portfolio = () => {
  const projects = [
    {
      title: "CyberCore AI",
      category: "AI Brand Identity",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete rebrand for autonomous robotics company"
    },
    {
      title: "AutoMech Systems",
      category: "Interface Design",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Industrial robot control interface and dashboard"
    },
      {
        title: "NeuralLink Pro",
        category: "Motion Graphics",
        image: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "AI neural network visualization animations"
      },
    {
      title: "RoboFactory",
      category: "System Branding",
      image: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Manufacturing automation brand ecosystem"
    },
    {
      title: "QuantumBot",
      category: "AI Brand Identity",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Quantum computing robot brand identity"
    },
    {
      title: "TechNova Labs",
      category: "Interface Design",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Research lab automation interface system"
    }
  ];

  const clients = [
    {
      name: "TechCorp Industries",
      logo: "src/Assets/APinvestment.jpg",
      industry: "Manufacturing",
      testimonial: "Revolutionary design that transformed our brand identity",
      rating: 5
    },
    {
      name: "Neural Dynamics",
      logo: "src/Assets/ASHIRVAD_jewellwers.jpg",
      industry: "AI Research",
      testimonial: "Exceptional creativity and technical expertise",
      rating: 5
    },
    {
      name: "Quantum Systems",
      logo: "src/Assets/Cake_and_delight_logo.jpg",
      industry: "Quantum Computing",
      testimonial: "Outstanding results that exceeded our expectations",
      rating: 5
    },
    {
      name: "RoboWorks Inc",
      logo: "src/Assets/Creatolive.jpg",
      industry: "Robotics",
      testimonial: "Professional team with innovative solutions",
      rating: 5
    },
    {
      name: "CyberTech Solutions",
      logo: "src/Assets/Donzel_make_over.jpg",
      industry: "Cybersecurity",
      testimonial: "Creative genius combined with technical excellence",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Duplex_engineered.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/jay_khodiyar_process.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/logo_Rohans_second.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/LOGO_Z.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Meenakshi_lifestyle.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Primira_global_1.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Proton_energy.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/pumptrock.png",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Rajkot_marketing.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Roohan's_makeouver.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/SHREEJI_PACKAGING.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Vraj_solar.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    },
    {
      name: "Future Labs",
      logo: "src/Assets/Wealth_hub.jpg",
      industry: "Research & Development",
      testimonial: "Transformed our vision into stunning reality",
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-10 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/8 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/4 via-transparent to-orange-500/4"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/15 via-transparent to-orange-500/8 animate-pulse"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/4 via-transparent to-transparent"></div>
      
      {/* Top fade for seamless transition from Services */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      {/* Bottom fade for seamless transition to Contact */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Project <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Archive</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
            A curated database of our most advanced robotic design systems and AI-powered brand implementations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="relative overflow-hidden bg-gray-800 aspect-square mb-3 sm:mb-4 md:mb-6 border border-gray-700 hover:border-orange-500/50 transition-colors duration-300 rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                <p className="text-xs sm:text-sm font-medium text-orange-500 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-base md:text-base">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Section with Messy Card Design */}
        <div className="mt-20 sm:mt-24 md:mt-32">
          <div className="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Trusted by <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Innovators</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
              Leading companies that trust our robotic design expertise and AI-powered solutions.
            </p>
          </div>
          
          {/* Messy Card Grid */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-orange-500 rotate-12"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border border-orange-500 -rotate-6"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border border-orange-500 rotate-45"></div>
              <div className="absolute bottom-10 right-10 w-12 h-12 border border-orange-500 -rotate-12"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  data-aos="fade-up" 
                  data-aos-delay={index * 150}
                  style={{
                    transform: `rotate(${Math.random() * 6 - 3}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
                  }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-orange-500/50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:-rotate-1">
                    {/* Client Logo */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500 to-red-500 p-1">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-full object-contain rounded-lg bg-white"
                        />
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(client.rating)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Client Info */}
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-200">
                        {client.name}
                      </h4>
                      <p className="text-sm sm:text-base text-orange-500 font-medium">
                        {client.industry}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic">
                        "{client.testimonial}"
                      </p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-full opacity-40"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Design Photo Section */}
        <div className="mt-20 sm:mt-24 md:mt-32">
          <div className="text-center mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Logo <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Design</span> Gallery
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
              Explore our collection of innovative logo designs that blend creativity with robotic precision.
            </p>
          </div>
          
          {/* Logo Design Grid */}
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-32 h-32 border border-orange-500 rotate-45 animate-pulse"></div>
                <div className="absolute top-20 right-20 w-24 h-24 border border-orange-500 -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 border border-orange-500 rotate-90 animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 border border-orange-500 -rotate-45 animate-pulse" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
              {[
                {
                  name: "CyberCore",
                  image: "src/Assets/APinvestment.jpg",
                  category: "AI Branding",
                  style: "Futuristic"
                },
                {
                  name: "NeuralTech",
                  image: "src/Assets/ASHIRVAD_jewellwers.jpg",
                  category: "Tech Startup",
                  style: "Minimalist"
                },
                {
                  name: "QuantumFlow",
                  image: "src/Assets/Cake_and_delight_logo.jpg",
                  category: "Quantum Computing",
                  style: "Abstract"
                },
                {
                  name: "RoboWorks",
                  image: "src/Assets/Creatolive.jpg",
                  category: "Manufacturing",
                  style: "Industrial"
                },
                {
                  name: "TechNova",
                  image: "src/Assets/Donzel_make_over.jpg",
                  category: "Research Lab",
                  style: "Modern"
                },
                {
                  name: "CyberDynamics",
                  image: "src/Assets/Duplex_engineered.jpg",
                  category: "Cybersecurity",
                  style: "Geometric"
                },
                {
                  name: "FutureLabs",
                  image: "src/Assets/jay_khodiyar_process.jpg",
                  category: "Innovation",
                  style: "Dynamic"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/logo_Rohans_second.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/LOGO_Z.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/Meenakshi_lifestyle.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/Primira_global_1.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/Rajkot_marketing.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/pumptrock.png",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  image: "src/Assets/Roohan's_makeouver.jpg",
                  name: "AutoMech",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/SHREEJI_PACKAGING.jpg",
                  category: "Automation",
                  style: "Precision"
                },
                {
                  name: "AutoMech",
                  image: "src/Assets/Vraj_solar.jpg",
                  category: "Automation",
                  style: "Precision"
                },
              ].map((logo, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  data-aos="zoom-in" 
                  data-aos-delay={index * 100}
                  style={{
                    transform: `rotate(${Math.random() * 4 - 2}deg)`,
                  }}
                >
                  {/* Main Logo Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-orange-500/50 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition-all duration-500 hover:scale-110 hover:-rotate-1">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Logo Image */}
                    <div className="relative p-6 sm:p-8">
                      <div className="aspect-square relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10">
                        <img 
                          src={logo.image} 
                          alt={logo.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Logo Info */}
                      <div className="mt-4 sm:mt-6 text-center">
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                          {logo.name}
                        </h4>
                        <p className="text-sm text-orange-500 font-medium mt-1">
                          {logo.category}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {logo.style} Style
                        </p>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full opacity-40 group-hover:scale-125 transition-transform duration-500"></div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                  
                  {/* Floating label */}
                  <div className="absolute -top-3 -right-3 bg-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    LOGO
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <defs>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="orange" strokeWidth="1" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;