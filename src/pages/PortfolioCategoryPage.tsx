import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sectionByCategory, PortfolioItem } from '../data/portfolio';
import { motion } from 'framer-motion';

const PortfolioCategoryPage: React.FC = () => {
  const { category = 'brochure' } = useParams();
  const items: PortfolioItem[] = (sectionByCategory as any)[category] || [];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

      <main className="relative z-10 pt-24 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold capitalize">{category} projects</h1>
            <Link to="/portfolio" className="text-orange-400 underline">← Back</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((p) => (
              <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 hover:border-orange-500/40 transition">
                <img src={p.image} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4">
                  <div className="text-orange-400 text-sm font-medium">{p.subtitle}</div>
                  <div className="text-white text-lg font-semibold">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioCategoryPage;


