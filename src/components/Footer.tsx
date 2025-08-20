import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
  import Pixel_Pulse from '../Assets/Logo.png'; // Adjust the path if needed

const Footer = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-transparent to-orange-500/3"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/10 via-transparent to-orange-500/5 animate-pulse"></div>
      <div className="absolute inset-0 bg-radial-gradient from-orange-500/3 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2" data-aos="fade-up">
            <div className="mb-4">
              <img 
  src={Pixel_Pulse}
                srcSet={`${Pixel_Pulse} 1x, ${Pixel_Pulse.replace('.png', '@2x.png')} 2x, ${Pixel_Pulse.replace('.png', '@3x.png')} 3x`}
                alt="PixelPulse Logo"
                className="h-10 sm:h-12 md:h-16 cursor-pointer"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Advanced robotics design studio engineering the future of human-machine interfaces and AI-powered brand experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6 md:mt-8">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Services</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              {[
                'Brand Strategy & Positioning',
                'Visual Identity & Logo Design',
                'Typography & Custom Lettering',
                'Print & Packaging Design',
                'Rebranding & Brand Refresh',
                'Art Direction & Photoshoot Styling',
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    onClick={scrollToSection('services')}
                    className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Network Links */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 md:mb-6">Network</h4>
            <ul className="space-y-1 sm:space-y-2 md:space-y-3 text-gray-400">
              {[
                { label: 'About System', id: 'about' },
                { label: 'Project Archive', id: 'portfolio' },
                { label: 'Connect', id: 'contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.id}`}
                    onClick={scrollToSection(link.id)}
                    className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 text-xs sm:text-sm md:text-sm">
            © 2024 PIXELPULSE Systems. All protocols reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-3 sm:mt-4 md:mt-0">
            <a href="." className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">Privacy Protocol</a>
            <a href="." className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-xs sm:text-sm md:text-sm">System Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
