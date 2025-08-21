 
import Brochure from '../Assets/Broucher-20250821T104541Z-1-001/Broucher/Brochure.jpg';
import Brochure2 from '../Assets/Broucher-20250821T104541Z-1-001/Broucher/Brochure2.jpg';
import Holding1 from '../Assets/Hordings-20250821T104541Z-1-001/Hordings/1-1.jpg';
import Holding2 from '../Assets/Hordings-20250821T104541Z-1-001/Hordings/1-2.jpg';

export type PortfolioItem = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'brochure' | 'holding' | 'logo' | 'packaging' | 'visiting';
  description?: string;
};

const s = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const portfolioItems: PortfolioItem[] = [
  { title: 'A Textbook of Power Plant Engineering – Brochure', subtitle: 'Book Cover Design', image: Brochure , category: 'brochure', slug: s('AP Investment') },
  { title: 'PumpTork – Product Brochure', subtitle: 'Brochure / Cover + Contact Page ', image: Brochure2, category: 'brochure', slug: s('Ashirvad Jewellers') },
  // { title: 'Cake & Delight', subtitle: 'Food & Beverage', image: '/src/Assets/Cake_and_delight_logo.jpg', category: 'brochure', slug: s('Cake & Delight') },

  { title: 'Ashirvad Jewellers – Billboard 1', subtitle: 'Billboard', image: Holding1, category: 'holding', slug: s('Holding 1') },
  { title: 'Ashirvad Jewellers – Hoarding 2', subtitle: 'Billboard', image: Holding2, category: 'holding', slug: s('Holding 2') },

  { title: 'Jay Khodiyar', subtitle: 'Process Industry', image: '/src/Assets/jay_khodiyar_process.jpg', category: 'logo', slug: s('Jay Khodiyar') },
  { title: "Rohan's Makeover", subtitle: 'Beauty Brand', image: "/src/Assets/Roohan's_makeouver.jpg", category: 'logo', slug: s("Rohan's Makeover") },
  { title: 'Logo Z', subtitle: 'Modern Identity', image: '/src/Assets/LOGO_Z.jpg', category: 'logo', slug: s('Logo Z') },

  { title: 'Meenakshi Lifestyle', subtitle: 'Lifestyle Brand', image: '/src/Assets/Meenakshi_lifestyle.jpg', category: 'packaging', slug: s('Meenakshi Lifestyle') },
  { title: 'Primira Global', subtitle: 'Global Solutions', image: '/src/Assets/Primira_global_1.jpg', category: 'packaging', slug: s('Primira Global') },
  { title: 'Proton Energy', subtitle: 'Energy Sector', image: '/src/Assets/Proton_energy.jpg', category: 'packaging', slug: s('Proton Energy') },

  { title: 'PumpTrock', subtitle: 'Industrial Brand', image: '/src/Assets/pumptrock.png', category: 'visiting', slug: s('PumpTrock') },
  { title: 'Rajkot Marketing', subtitle: 'Marketing Agency', image: '/src/Assets/Rajkot_marketing.jpg', category: 'visiting', slug: s('Rajkot Marketing') },
  { title: 'Shreeji Packaging', subtitle: 'Packaging Solutions', image: '/src/Assets/SHREEJI_PACKAGING.jpg', category: 'visiting', slug: s('Shreeji Packaging') },
];

export const sectionByCategory: Record<PortfolioItem['category'], PortfolioItem[]> = {
  brochure: portfolioItems.filter(p => p.category === 'brochure'),
  holding: portfolioItems.filter(p => p.category === 'holding'),
  logo: portfolioItems.filter(p => p.category === 'logo'),
  packaging: portfolioItems.filter(p => p.category === 'packaging'),
  visiting: portfolioItems.filter(p => p.category === 'visiting'),
};

export const getItemBySlug = (slug: string) => portfolioItems.find(p => p.slug === slug);


