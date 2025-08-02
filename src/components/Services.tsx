  import React, { useRef } from 'react';
  import { Bot, Cpu, Zap, Cog } from 'lucide-react';
  import { useScrollPopUp } from '../hooks/useScrollPopUp';
  import { PiBrainDuotone } from "react-icons/pi";
  import { MdOutlinePalette } from "react-icons/md";
  import { BsVectorPen } from "react-icons/bs";
  import { MdOutlineCameraAlt } from "react-icons/md";
  import { TbTargetArrow } from "react-icons/tb";

  const Services = () => {
    const services = [
      {
        icon: <PiBrainDuotone size={32}/>      ,
        title: "Brand Strategy & Positioning ",
        description: "We craft brand strategies that go beyond visuals—defining your purpose, voice, and market position. Through deep research and identity mapping, we create brands that resonate, differentiate, and scale..",
        features: ["More than a logo—we build brands with purpose and precision."]
      },
      {
        icon: <MdOutlinePalette size={32} />,
        title: "Visual Identity & Logo Design",
        description: "Your logo is just the beginning. We design timeless visual systems—from icons and color palettes to typography—that tell your brand story across every medium with clarity and confidence.",
        features: ["Designs that don't just look premium—they feel unforgettable."]
      },
      {
        icon: <BsVectorPen  size={32} />,
        title: "Typography & Custom Lettering",
        description: "Our custom typography services bring personality to your brand. From bespoke fonts to expressive type treatments, we make every letter speak your identity.",
        features: [" Where every letter becomes a legacy."]
      },
      {
        icon: <PiBrainDuotone size={32}/>      ,
        title: "Print & Packaging Design",
        description: "Elevate your physical presence with tactile, tailored design. From high-impact packaging to editorial-quality brochures, we blend craftsmanship with strategy to make you stand out on the shelf and in the hand.",
        features: ["Premium packaging that turns products into experiences."]
      },
      {
        icon: <TbTargetArrow  size={32}/>      ,
        title: "Rebranding & Brand Refresh",
        description: "Whether you're pivoting or evolving, we guide brands through strategic reimagination. New look, renewed voice—same brand essence, but elevated.",
        features: ["Not just a makeover—a brand renaissance."]
      },
      {
        icon: <MdOutlineCameraAlt  size={32} />,
        title: "Art Direction & Photoshoot Styling",
        description: "From concept to post-production, we curate and direct photo and video content that aligns with your brand identity, ensuring every visual is both aesthetic and strategic.",
        features: ["Elevated content, curated with vision."]
      },
    ];

    return (
      <section id="services" className="py-10 sm:py-16 md:py-20 bg-gray-900 relative overflow-hidden">
        {/* Enhanced gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/6 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/4 via-transparent to-orange-500/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/12 via-transparent to-orange-500/6 animate-pulse"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/4 via-transparent to-transparent"></div>
        
        {/* Top fade for seamless transition from About */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>
        
        {/* Bottom fade for seamless transition to Portfolio */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-20" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">
              System <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-light">
              We engineer visual systems that merge cutting-edge technology with intelligent design, creating interfaces that think as fast as they look.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => {
              const cardRef = useRef<HTMLDivElement>(null);
              useScrollPopUp(cardRef, { start: 'top 85%', end: 'bottom 60%', scaleFrom: 0.85, opacityFrom: 0.3, scrub: false });
              return (
                <div key={index} ref={cardRef} className="group h-full">
                  <div className="bg-black p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 border border-gray-800 hover:border-orange-500/50 rounded-xl h-full flex flex-col">
                    <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                      <div className="text-orange-500 mr-4 sm:mr-5 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3 mt-auto">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 sm:mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export default Services;