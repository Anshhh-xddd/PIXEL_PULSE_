import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// import Box1 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-1.jpe";
// import Box2 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-2.jpg";
import Box3 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-3.jpg";
import Box4 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-4.jpg";
import Box5 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-5.jpg";
import Box6 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-6.jpg";
import Almonds6 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/ALMONDS 6.jpg";
import Almonds5 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/ALMONDS 5.jpg";
import Kulfi1 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Kulfi_packaging (1).jpg";

interface Item {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const PackagingPage: React.FC = () => {
  const items: Item[] = [
    {
      title: "Gourmet Delight",
      subtitle: "Premium Sweets Box",
      description:
        "Designed for luxury gifting, this sweets box features intricate gold foil details with a rich color palette for a premium unboxing experience.",
      image: Box1,
    },
    {
      title: "Nature Fresh",
      subtitle: "Organic Tea Packaging",
      description:
        "Minimal, eco-conscious design with earthy tones and recycled textures, representing sustainability and purity of organic tea.",
      image: Box2,
    },
    {
      title: "Urban Brew",
      subtitle: "Coffee Beans Pack",
      description:
        "Bold and modern coffee pouch design with matte finish, sharp typography, and an urban feel crafted for coffee lovers.",
      image: Box3,
    },
    {
      title: "Chef Select",
      subtitle: "Spice Blend Box",
      description:
        "Vibrant spice packaging highlighting authenticity and tradition, with ethnic patterns and bold flavors represented visually.",
      image: Box4,
    },
    {
      title: "Daily Care",
      subtitle: "Personal Care Box",
      description:
        "Soft-toned design with clean typography for skincare packaging that emphasizes wellness, trust, and purity.",
      image: Box5,
    },
    {
      title: "Snack Stack",
      subtitle: "Assorted Snacks Pack",
      description:
        "Playful and colorful snack packaging that attracts young audiences with bold shapes and vibrant illustrations.",
      image: Box6,
    },
    {
      title: "Nut Sizer – Almonds 6",
      subtitle: "Flavored Almonds",
      description:
        "Premium dry-fruits packaging with a glossy finish, designed to convey richness, flavor, and health benefits.",
      image: Almonds6,
    },
    {
      title: "Nut Sizer – Almonds 5",
      subtitle: "Roasted Almonds",
      description:
        "Clean, appetizing nut packaging with strong shelf presence and clear nutrition highlights for health-focused buyers.",
      image: Almonds5,
    },
    {
      title: "Kulfi Bliss",
      subtitle: "Ice Cream Bar Pack",
      description:
        "Refreshing kulfi bar design with cool tones and creamy visuals to emphasize indulgence and taste.",
      image: Kulfi1,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      <main className="relative z-10 pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
              Packaging Design Showcase
            </h1>
            <a href="/portfolio" className="text-orange-400 underline">
              ← Back
            </a>
          </div>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  className="relative w-full h-64 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-orange-400 text-sm">{item.subtitle}</p>
                  </div>
                </button>
                <div className="p-5">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveIndex(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={items[activeIndex].image}
                  alt={items[activeIndex].title}
                  className="w-full h-auto rounded-xl border border-gray-800"
                />
                <div className="mt-5 text-center">
                  <h3 className="text-white text-2xl font-bold">
                    {items[activeIndex].title}
                  </h3>
                  <p className="text-orange-400">{items[activeIndex].subtitle}</p>
                  <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                    {items[activeIndex].description}
                  </p>
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="mt-5 px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-black font-semibold"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default PackagingPage;
