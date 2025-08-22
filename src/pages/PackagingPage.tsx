import React, { useEffect, useState } from "react";
import box1 from "../Assets/ASHIRVAD_jewellwers 2.jpg";
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
  image?: string;
}

const PackagingPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      title: "Gourmet Delight",
      subtitle: "Premium Sweets Box",
      description:
        "Luxury gifting box with rich colors and foil accents for a premium unboxing experience.",
      image: box1,
    },
    {
      title: "Nature Fresh",
      subtitle: "Organic Tea",
      description:
        "Eco-conscious pack with earthy tones, recycled textures, and clean labeling.",
      image: Box4,
    },
    {
      title: "Urban Brew",
      subtitle: "Coffee Beans",
      description:
        "Bold modern pouch with matte finish and sharp typography for coffee lovers.",
      image: Box3,
    },
    {
      title: "Chef Select",
      subtitle: "Spice Blend Box",
      description:
        "Vibrant spice packaging highlighting authenticity and tradition.",
      image: Box5,
    },
    {
      title: "Daily Care",
      subtitle: "Personal Care Box",
      description:
        "Soft-toned design with clean typography for wellness and purity.",
      image: Box6,
    },
    {
      title: "Nut Sizer – Almonds 6",
      subtitle: "Flavored Almonds",
      description:
        "Glossy premium pack conveying richness, flavor and health.",
      image: Almonds6,
    },
    {
      title: "Nut Sizer – Almonds 5",
      subtitle: "Roasted Almonds",
      description:
        "Clean, appetizing pack with clear nutrition highlights.",
      image: Almonds5,
    },
    {
      title: "Kulfi Bliss",
      subtitle: "Ice Cream Bar Pack",
      description:
        "Refreshing cool tones and creamy visuals for indulgence.",
      image: Kulfi1,
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<Item>({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  // 🔸 Persist items to localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('pixel_pulse.packaging.items.v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // ignore invalid stored data
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('pixel_pulse.packaging.items.v1', JSON.stringify(items));
    } catch {
      // storage might be unavailable; fail silently
    }
  }, [items]);

  // 🔹 Start editing a card
  const startEdit = (index: number) => {
    setEditingIndex(index);
    setForm(items[index]);
  };

  // 🔹 Cancel editing
  const cancelEdit = () => {
    setEditingIndex(null);
    setForm({ title: "", subtitle: "", description: "", image: "" });
  };

  // 🔹 Save edited card
  const saveEdit = () => {
    if (editingIndex === null) return;
    const updated = [...items];
    updated[editingIndex] = form;
    setItems(updated);
    cancelEdit();
  };

  // 🔹 Delete a card
  const deleteItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    if (editingIndex === index) cancelEdit();
  };

  // 🔹 Add new card at the top
  const addItem = () => {
    const newCard: Item = {
      title: "New Packaging",
      subtitle: "Subtitle",
      description: "Describe this packaging...",
      image: "",
    };
    setItems((prev) => [newCard, ...prev]);
    setEditingIndex(0); // instantly open the new card in edit mode
    setForm(newCard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>

      <main className="relative z-10 pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
              Packaging Design
            </h1>
            <a href="/portfolio" className="text-orange-400 underline">
              ← Back
            </a>
          </div>

          {/* Controls */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setEditMode((v) => !v)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  editMode
                    ? "bg-orange-500 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {editMode ? "Exit Edit" : "Edit Mode"}
              </button>
              {editMode && (
                <button
                  onClick={addItem}
                  className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-gray-900 hover:bg-white"
                >
                  Add Card
                </button>
              )}
            </div>
            <span className="text-gray-400 text-sm">{items.length} cards</span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 relative"
              >
                {/* Edit/Delete Buttons */}
                {editMode && (
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => startEdit(i)}
                      className="px-2 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteItem(i)}
                      className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}

                {/* If card is being edited */}
                {editingIndex === i ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                      placeholder="Title"
                    />
                    <input
                      type="text"
                      value={form.subtitle}
                      onChange={(e) =>
                        setForm({ ...form, subtitle: e.target.value })
                      }
                      className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                      placeholder="Subtitle"
                    />
                    <input
                      type="text"
                      value={form.image || ""}
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.value })
                      }
                      className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                      placeholder="Image URL (optional)"
                    />
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 h-24"
                      placeholder="Description"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {item.image && (
                      <div className="mb-3 overflow-hidden rounded-lg border border-gray-800">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    )}
                    <div className="text-white text-lg font-semibold">
                      {item.title}
                    </div>
                    <div className="text-orange-400 text-sm mb-2">
                      {item.subtitle}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PackagingPage;
