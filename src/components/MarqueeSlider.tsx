import React from 'react';

const brands = [
  'src/Assets/APinvestment.jpg',
  'src/Assets/Creatolive.jpg',
  'src/Assets/Cake_and_delight_logo.jpg',
  'src/Assets/logo_Rohans_second.jpg',
  'src/Assets/LOGO_Z.jpg',
  'src/Assets/Meenakshi_lifestyle.jpg',
  'src/Assets/Primira_global_1.jpg',
  'src/Assets/Proton_energy.jpg',
  'src/Assets/Vraj_solar.jpg',
  'src/Assets/SHREEJI_PACKAGING.jpg'
];

const MarqueeSlider: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h3 className="text-center text-white text-2xl md:text-4xl font-bold mb-8">Trusted by great brands</h3>
        <div className="relative w-full overflow-hidden">
          <div className="marquee flex items-center gap-8">
            {[...brands, ...brands].map((src, i) => (
              <div key={i} className="h-16 sm:h-20 md:h-24 w-auto flex items-center justify-center shrink-0">
                <img src={src} className="h-full w-auto object-contain rounded-lg bg-white" alt="brand" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider; 