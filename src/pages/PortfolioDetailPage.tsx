import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getItemBySlug } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioDetailPage: React.FC = () => {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const item = getItemBySlug(slug);

  const goBack = () => navigate('/portfolio');

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">Project not found</div>
          <button onClick={goBack} className="underline text-orange-400">Back to portfolio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

      <main className="relative z-10 pt-24 md:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-6">
            <button onClick={goBack} className="text-gray-300 hover:text-white underline underline-offset-4">← Back</button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.slug}
              initial={location.state?.fromGrid ? { opacity: 0, y: 24, scale: 0.98 } : { opacity: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
            >
              <div className="relative">
                <motion.img layoutId={`portfolio-image-${item.slug}`} src={item.image} alt={item.title} className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <div className="text-orange-400 text-sm font-semibold">{item.subtitle}</div>
                  <motion.h1 layoutId={`portfolio-title-${item.slug}`} className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mt-1">{item.title}</motion.h1>
                </div>
              </div>

              <div className="p-6 sm:p-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 text-gray-300 leading-relaxed">
                  {item.description || (
                    <>
                      <p>
                        This project showcases our end-to-end brand execution spanning strategy, identity, and content systems. We focused on clarity, differentiation, and scalable application across touchpoints.
                      </p>
                      <p className="mt-4">
                        Deliverables included a visual identity system, brand guidelines, and launch assets optimized for digital and print.
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <div className="rounded-xl border border-gray-800 bg-black/40 p-4">
                    <div className="text-white font-semibold">Project Info</div>
                    <ul className="text-gray-400 text-sm mt-2 space-y-1">
                      <li>Category: {item.category}</li>
                      <li>Status: Completed</li>
                    </ul>
                    <a href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-black font-semibold py-2 px-3 text-sm hover:from-orange-400 hover:to-red-400 transition-colors">Start a similar project</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDetailPage;


