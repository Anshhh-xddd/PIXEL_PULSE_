import React from 'react';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, Heart, Zap, Sparkles, Globe, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Pixel_Pulse from '../Assets/Logo.png';

const Footer = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGmailCompose = () => {
    const email = 'pixelpulse2905@gmail.com';
    const subject = '🤖 New Project Inquiry - PixelPulse';
    const body = `Hello PixelPulse Team,

I'm interested in your design services and would like to discuss a potential project.

Project Details:
- Project Type: 
- Timeline: 
- Budget Range: 
- Additional Requirements: 

Please let me know the next steps.

Best regards,
[Your Name]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const services = [
    'Brand Identity Design',
    'Web Development',
    'Mobile App Design',
    'Digital Marketing',
    'AI & Automation',
    'Consulting Services'
  ];

  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Our Portfolio', id: 'portfolio' },
    { label: 'Contact Us', id: 'contact' },
    { label: 'Services', id: 'services' }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:pixelpulse2905@gmail.com', label: 'Email' }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: 'pixelpulse2905@gmail.com', action: openGmailCompose },
    { icon: <Phone size={16} />, text: '+91 95122 94700', action: null },
    { icon: <MapPin size={16} />, text: 'Mavdi, Rajkot, Gujarat, India', action: null }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-orange-500/10 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 via-transparent to-transparent"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Top fade for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="py-16 sm:py-20 md:py-24 lg:py-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="mb-6"
                data-animation="scale"
              >
                <img 
                  src={Pixel_Pulse}
                  alt="PixelPulse Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-20 cursor-pointer hover:drop-shadow-glow transition-all duration-300"
                />
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-8"
                data-animation="text-reveal"
              >
                Transforming ideas into digital reality with cutting-edge design and innovative technology solutions. We create brands that think, learn, and evolve.
              </motion.p>

              {/* Contact Info */}
              <motion.div 
                className="space-y-3 mb-8"
                data-animation="stagger"
                data-stagger="0.1"
              >
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    data-animation="slide"
                    data-direction="left"
                  >
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      {info.icon}
                    </div>
                    {info.action ? (
                      <button
                        onClick={info.action}
                        className="text-sm sm:text-base cursor-pointer"
                      >
                        {info.text}
                      </button>
                    ) : (
                      <span className="text-sm sm:text-base">{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-4"
                data-animation="fade"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="group p-3 bg-gray-800/50 hover:bg-orange-500/20 border border-gray-700 hover:border-orange-500/50 rounded-xl transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <div className="text-gray-300 group-hover:text-orange-500 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Services Links */}
            <motion.div 
              variants={itemVariants}
              data-animation="slide"
              data-direction="right"
            >
              <motion.h4 
                className="text-xl sm:text-2xl font-bold mb-6 text-white"
                data-animation="text-fill"
              >
                Our Services
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                data-animation="stagger"
                data-stagger="0.1"
              >
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    data-animation="slide"
                    data-direction="left"
                  >
                    <a
                      href="#services"
                      onClick={scrollToSection('services')}
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className="w-1 h-1 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <span className="text-sm sm:text-base">{service}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              variants={itemVariants}
              data-animation="slide"
              data-direction="right"
            >
              <motion.h4 
                className="text-xl sm:text-2xl font-bold mb-6 text-white"
                data-animation="text-fill"
              >
                Quick Links
              </motion.h4>
              <motion.ul 
                className="space-y-3"
                data-animation="stagger"
                data-stagger="0.1"
              >
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    data-animation="slide"
                    data-direction="left"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={scrollToSection(link.id)}
                      className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-300 group cursor-pointer"
                    >
                      <motion.div
                        className="w-1 h-1 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <span className="text-sm sm:text-base">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Features */}
              <motion.div 
                className="mt-8 space-y-3"
                data-animation="fade"
              >
                <motion.div 
                  className="flex items-center gap-2 text-gray-300"
                  data-animation="slide"
                  data-direction="left"
                >
                  <Zap size={16} className="text-orange-500" />
                  <span className="text-sm">Fast Response Time</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-gray-300"
                  data-animation="slide"
                  data-direction="left"
                >
                  <Users size={16} className="text-orange-500" />
                  <span className="text-sm">Professional Team</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-gray-300"
                  data-animation="slide"
                  data-direction="left"
                >
                  <Award size={16} className="text-orange-500" />
                  <span className="text-sm">Quality Guaranteed</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-800/50 py-6 sm:py-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm sm:text-base text-center md:text-left"
              data-animation="text-reveal"
            >
              © 2024 PixelPulse Design Studio. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-2 text-gray-400 text-sm"
              data-animation="fade"
            >
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by PixelPulse</span>
            </motion.div>

            <motion.div 
              className="flex space-x-6"
              data-animation="fade"
            >
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp size={20} />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </footer>
  );
};

export default Footer;
