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
  { title: 'AP Investment', subtitle: 'Financial Branding', image: '/src/Assets/APinvestment.jpg', category: 'brochure', slug: s('AP Investment') },
  { title: 'Ashirvad Jewellers', subtitle: 'Luxury Brand Design', image: '/src/Assets/ASHIRVAD_jewellwers.jpg', category: 'brochure', slug: s('Ashirvad Jewellers') },
  { title: 'Cake & Delight', subtitle: 'Food & Beverage', image: '/src/Assets/Cake_and_delight_logo.jpg', category: 'brochure', slug: s('Cake & Delight') },

  { title: 'Creatolive', subtitle: 'Creative Agency', image: '/src/Assets/Creatolive.jpg', category: 'holding', slug: s('Creatolive') },
  { title: 'Donzel Makeover', subtitle: 'Beauty & Fashion', image: '/src/Assets/Donzel_make_over.jpg', category: 'holding', slug: s('Donzel Makeover') },
  { title: 'Duplex Engineered', subtitle: 'Engineering Solutions', image: '/src/Assets/Duplex_engineered.jpg', category: 'holding', slug: s('Duplex Engineered') },

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


