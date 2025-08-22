import React, { useState } from "react";

interface CardItem {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

const VisitingCardPage: React.FC = () => {
  const [items, setItems] = useState<CardItem[]>([
    {
      title: "Minimal Edge",
      subtitle: "Matte Finish",
      description: "Clean, modern business card with sharp typography and matte stock.",
    },
    {
      title: "Luxury Foil",
      subtitle: "Gold Emboss",
      description: "Elegant card with gold foil embossing and premium textured paper.",
    },
    {
      title: "Dual Tone",
      subtitle: "Color Accent",
      description: "Striking two-tone layout with bold accent color and crisp layout.",
    },
    {
      title: "Monogram Mark",
      subtitle: "Letterform Logo",
      description: "Sophisticated monogram-based design emphasizing brand initials.",
    },
    {
      title: "Vertical Stack",
      subtitle: "Portrait Layout",
      description: "Portrait oriented card with stacked typography and clean spacing.",
    },
    {
      title: "Texture Craft",
      subtitle: "Recycled Stock",
      description: "Eco-friendly recycled paper texture with subtle ink and neat grid.",
    },
    {
      title: "Edge Paint",
      subtitle: "Pop Edges",
      description: "Bold edge painting for standout profile with minimal front face.",
    },
    {
      title: "QR Connect",
      subtitle: "Smart Link",
      description: "Modern layout featuring a QR code for instant digital contact save.",
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<CardItem>({ title: "", subtitle: "", description: "", image: "" });

  const startEdit = (i: number) => { setEditingIndex(i); setForm(items[i]); };
  const cancelEdit = () => { setEditingIndex(null); setForm({ title: "", subtitle: "", description: "", image: "" }); };
  const saveEdit = () => {
    if (editingIndex === null) return;
    const next = [...items];
    next[editingIndex] = form;
    setItems(next);
    cancelEdit();
  };
  const addItem = () => {
    const fresh: CardItem = { title: "New Visiting Card", subtitle: "Subtitle", description: "Describe this visiting card...", image: "" };
    setItems((prev) => [fresh, ...prev]);
    setEditingIndex(0);
    setForm(fresh);
  };
  const deleteItem = (i: number) => { setItems(prev => prev.filter((_, idx) => idx !== i)); if (editingIndex === i) cancelEdit(); };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      <main className="relative z-10 pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">Visiting Card Designs</h1>
            <a href="/portfolio" className="text-orange-400 underline">← Back</a>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setEditMode(v => !v)} className={`px-4 py-2 rounded-lg font-semibold transition-colors ${editMode ? "bg-orange-500 text-black" : "bg-gray-800 text-white hover:bg-gray-700"}`}>{editMode ? "Exit Edit" : "Edit Mode"}</button>
              {editMode && (
                <button onClick={addItem} className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-gray-900 hover:bg-white">Add Card</button>
              )}
            </div>
            <span className="text-gray-400 text-sm">{items.length} cards</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div key={`${item.title}-${i}`} className="rounded-2xl border border-gray-800 bg-gray-900/50 p-5 relative">
                {editMode && (
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button onClick={() => startEdit(i)} className="px-2 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600">Edit</button>
                    <button onClick={() => deleteItem(i)} className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                  </div>
                )}

                {editingIndex === i ? (
                  <div className="space-y-3">
                    <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" placeholder="Title" />
                    <input type="text" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" placeholder="Subtitle" />
                    <input type="text" value={form.image || ""} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" placeholder="Image URL (optional)" />
                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 h-24" placeholder="Description" />
                    <div className="flex gap-2">
                      <button onClick={saveEdit} className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600">Save</button>
                      <button onClick={cancelEdit} className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-500">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    {item.image && (
                      <div className="mb-3 overflow-hidden rounded-lg border border-gray-800">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                      </div>
                    )}
                    <div className="text-white text-lg font-semibold">{item.title}</div>
                    <div className="text-orange-400 text-sm mb-2">{item.subtitle}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
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

export default VisitingCardPage;
