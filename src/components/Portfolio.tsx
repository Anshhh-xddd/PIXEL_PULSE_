import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom';
import { sectionByCategory, PortfolioItem } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const brochureItems: PortfolioItem[] = sectionByCategory.brochure;
const holdingItems: PortfolioItem[] = sectionByCategory.holding;
const logoItems: PortfolioItem[] = sectionByCategory.logo;
const packagingItems: PortfolioItem[] = sectionByCategory.packaging;
const visitingCardItems: PortfolioItem[] = sectionByCategory.visiting;

const AnimatedCard = ({ item }: { item: PortfolioItem }) => {
  return (
  <motion.div 
    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-800/40 backdrop-blur-xl border border-gray-700"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3 }
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="relative overflow-hidden">
      <motion.img 
        layoutId={`portfolio-image-${item.slug}`}
        src={item.image} 
        alt={item.title} 
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
    
    <div className="absolute bottom-0 left-0 p-6 text-white w-full text-left">
      <motion.h3 
        layoutId={`portfolio-title-${item.slug}`}
        className="text-xl font-bold drop-shadow-md mb-2"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {item.title}
      </motion.h3>
      <motion.p 
        className="text-sm text-orange-400 font-medium"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {item.subtitle}
      </motion.p>
    </div>
    
    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);
};

const SectionWrapper = ({ title, items, category }: { title: string; items: PortfolioItem[]; category?: string }) => (
  <div className="w-screen h-full flex flex-col items-center justify-center px-8">
    <div className="flex items-center justify-between w-full max-w-6xl mb-8">
      <motion.h2 
        className="text-4xl font-bold text-orange-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {category && (
        <a href={`/portfolio/category/${category}`} className="text-sm text-orange-400 underline">View all</a>
      )}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      {items.map((item, i) => (
        <AnimatedCard key={i} item={item} />
      ))}
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const labels = ["Brochure", "Holding", "Logo", "Packaging", "Visiting Cards"];

  const sections = [
    <SectionWrapper key="brochure" title="Brochure Design" items={brochureItems} category="brochure" />,
    <SectionWrapper key="holding" title="Holding Design" items={holdingItems} category="holding" />,
    <SectionWrapper key="logo" title="Logo Design" items={logoItems} category="logo" />,
    <SectionWrapper key="packaging" title="Packaging Design" items={packagingItems} category="packaging" />,
    <SectionWrapper key="visiting" title="Visiting Cards" items={visitingCardItems} category="visiting" />,
  ];

  // Right-side SVG progress bar refs/state
  const rightSvgRef = useRef<SVGSVGElement | null>(null);
  const rightPathRef = useRef<SVGPathElement | null>(null);
  const rightOrbRef = useRef<SVGCircleElement | null>(null);
  const rightPathLenRef = useRef<number>(0);
  const [rightMarkerPoints, setRightMarkerPoints] = useState<{ x: number; y: number }[]>([]);

  const goToPanel = (index: number) => {
    if (!containerRef.current) return;
    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
    if (panels.length === 0) return;

    const totalPanels = panels.length;
    const scrollDistance = containerRef.current.offsetWidth * (totalPanels - 1);
    const y = containerRef.current.offsetTop + (scrollDistance * (index / (totalPanels - 1)));

    gsap.to(window, { scrollTo: { y }, duration: 0.8, ease: "power2.inOut" });
  };

  useEffect(() => {
    setTimeout(() => {
      gsap.to(window, { scrollTo: { y: containerRef.current?.offsetTop || 0 }, duration: 0 });
    }, 50);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
    const totalPanels = panels.length;
    const scrollDistance = containerRef.current.offsetWidth * (totalPanels - 1);

    const ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          end: () => `+=${scrollDistance}`,
          onUpdate: (self) => {
            setActiveIndex(Math.round(self.progress * (totalPanels - 1)));
            if (progressFillRef.current) {
              gsap.to(progressFillRef.current, { height: `${self.progress * 100}%`, ease: "power2.out", duration: 0.2 });
            }
            // Drive right-side SVG path draw and orb position
            if (rightPathRef.current && rightOrbRef.current) {
              const len = rightPathLenRef.current || rightPathRef.current.getTotalLength();
              rightPathLenRef.current = len;
              const drawLen = len * self.progress;
              rightPathRef.current.style.strokeDasharray = `${len}`;
              rightPathRef.current.style.strokeDashoffset = `${len - drawLen}`;
              const pt = rightPathRef.current.getPointAtLength(drawLen);
              rightOrbRef.current.setAttribute('cx', `${pt.x}`);
              rightOrbRef.current.setAttribute('cy', `${pt.y}`);
            }
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Compute right-side markers and baseline on mount and resize
  useEffect(() => {
    const compute = () => {
      if (!rightPathRef.current) return;
      const path = rightPathRef.current;
      const len = path.getTotalLength();
      rightPathLenRef.current = len;
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      const pts = labels.map((_, idx) => {
        const t = labels.length > 1 ? idx / (labels.length - 1) : 0;
        const p = path.getPointAtLength(len * t);
        return { x: p.x, y: p.y };
      });
      setRightMarkerPoints(pts);
    };
    compute();
    const onResize = () => {
      compute();
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div ref={containerRef} className="relative h-screen w-screen overflow-hidden">
        <div className="flex h-full" style={{ width: `${sections.length * 100}vw` }}>
          {sections.map((content, index) => (
            <div
              key={index}
              ref={(el) => { if (el) panelsRef.current[index] = el; }}
              className="w-screen h-full flex items-center justify-center px-8"
            >
              {content}
            </div>
          ))}
        </div>

        {/* Navigation markers + animated SVG progress bar */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 select-none">
          <svg ref={rightSvgRef} viewBox="0 0 60 260" className="w-10 h-64 md:w-12 md:h-72">
            <defs>
              <linearGradient id="ppRightGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
              <filter id="ppRightGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Track - subtle S curve */}
            <path d="M30,10 C15,60 45,100 30,150 C15,190 45,220 30,250" stroke="rgba(255,255,255,0.15)" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* Progress path with glow */}
            <path ref={rightPathRef} d="M30,10 C15,60 45,100 30,150 C15,190 45,220 30,250" stroke="url(#ppRightGrad)" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#ppRightGlow)" style={{ strokeDasharray: 0, strokeDashoffset: 0 }} />
            {/* Moving orb */}
            <circle ref={rightOrbRef} cx="-100" cy="-100" r="6" fill="url(#ppRightGrad)">
              <animate attributeName="r" values="6;7;6" dur="1.2s" repeatCount="indefinite" />
            </circle>
            {/* Markers */}
            {rightMarkerPoints.map((pt, idx) => (
              <g key={idx} onClick={() => goToPanel(idx)} className="cursor-pointer">
                <circle cx={pt.x} cy={pt.y} r={activeIndex === idx ? 5 : 4} fill={activeIndex === idx ? '#f97316' : '#6b7280'} stroke={activeIndex === idx ? '#fb923c' : '#4b5563'} strokeWidth={2} />
                <title>{labels[idx]}</title>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
