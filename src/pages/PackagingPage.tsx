import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Box3 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-3.jpg";
import Box4 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-4.jpg";
import Box5 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-5.jpg";
import Box6 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-6.jpg";
import Almonds6 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/ALMONDS 6.jpg";
import Almonds5 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/ALMONDS 5.jpg";
import Kulfi1 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Kulfi_packaging (1).jpg";
import Box7 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/Box-7.jpg";
import box2 from "../Assets/Pakaging-20250821T104552Z-1-001/Pakaging/box2.jpg";

interface Item {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const PackagingPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      title: "Gourmet Delight",
      subtitle: "Premium Sweets Box",
      description:
        "Designed for luxury gifting, this sweets box features intricate gold foil details with a rich color palette for a premium unboxing experience.",
      image: Box7,
    },
    {
      title: "Nature Fresh",
      subtitle: "Organic Tea Packaging",
      description:
        "Minimal, eco-conscious design with earthy tones and recycled textures, representing sustainability and purity of organic tea.",
      image: Box4,
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
      image: Box5,
    },
    {
      title: "Daily Care",
      subtitle: "Personal Care Box",
      description:
        "Soft-toned design with clean typography for skincare packaging that emphasizes wellness, trust, and purity.",
      image: Box6,
    },
    {
      title: "Snack Stack",
      subtitle: "Assorted Snacks Pack",
      description:
        "Playful and colorful snack packaging that attracts young audiences with bold shapes and vibrant illustrations.",
      image: box2,
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
    {
      title: "Luxury Gift Box",
      subtitle: "Premium Packaging",
      description:
        "Elegant gift box design with sophisticated patterns and premium materials for high-end product presentation.",
      image: Box3,
    },
    {
      title: "Eco-Friendly Pack",
      subtitle: "Sustainable Design",
      description:
        "Environmentally conscious packaging using recycled materials and biodegradable elements for eco-friendly products.",
      image: Box4,
    },
    {
      title: "Artisan Collection",
      subtitle: "Handcrafted Box",
      description:
        "Unique handcrafted packaging that celebrates artisanal quality and traditional craftsmanship techniques.",
      image: Box5,
    },
    {
      title: "Premium Chocolate Box",
      subtitle: "Luxury Confectionery",
      description:
        "Sophisticated chocolate packaging with elegant typography and premium finishes for high-end confectionery products.",
      image: Box6,
    },
    {
      title: "Herbal Wellness",
      subtitle: "Natural Supplements",
      description:
        "Clean and organic packaging design for herbal supplements, emphasizing natural ingredients and wellness benefits.",
      image: Almonds6,
    },
    {
      title: "Festive Collection",
      subtitle: "Seasonal Packaging",
      description:
        "Celebratory packaging design with vibrant colors and festive elements perfect for seasonal gifting and special occasions.",
      image: Almonds5,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Item>({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditForm(items[index]);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const newItems = [...items];
      newItems[editingIndex] = editForm;
      setItems(newItems);
      setEditingIndex(null);
      setEditForm({ title: "", subtitle: "", description: "", image: "" });
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditForm({ title: "", subtitle: "", description: "", image: "" });
  };

  const handleDelete = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>

      <main className="relative z-10 pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
              Packaging Design Showcase
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setEditMode(!editMode)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  editMode
                    ? "bg-orange-500 text-black"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {editMode ? "Exit Edit" : "Edit Mode"}
              </button>
              <a href="/portfolio" className="text-orange-400 underline">
                ← Back
              </a>
            </div>
          </div>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col relative"
              >
                {editMode && (
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <button
                      onClick={() => handleEdit(i)}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
                
                {editingIndex === i ? (
                  <div className="p-4">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="w-full mb-2 p-2 bg-gray-800 text-white rounded border border-gray-600"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={editForm.subtitle}
                      onChange={(e) => setEditForm({ ...editForm, subtitle: e.target.value })}
                      className="w-full mb-2 p-2 bg-gray-800 text-white rounded border border-gray-600"
                      placeholder="Subtitle"
                    />
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      className="w-full mb-2 p-2 bg-gray-800 text-white rounded border border-gray-600 h-20"
                      placeholder="Description"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveIndex(i)}
                      className="relative w-full h-64 overflow-hidden"
                      disabled={editMode}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                        <p className="text-orange-400 text-sm">{item.subtitle}</p>
                      </div>
                    </button>
                    <div className="p-5">
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </>
                )}
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
                  <p className="text-gray-300 mt-3 max-w-2xl mx-auto">{items[activeIndex].description}</p>
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
