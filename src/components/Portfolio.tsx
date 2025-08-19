import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface SectionItem {
  title: string;
  subtitle: string;
  image?: string;
}

const brochureItems: SectionItem[] = [
  { title: "AI Brochure", subtitle: "Brand Story", image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Tech Brochure", subtitle: "Innovation", image: "https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const holdingItems: SectionItem[] = [
  { title: "Holding Design", subtitle: "Billboards", image: "https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Event Holding", subtitle: "Exhibition", image: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const logoItems: SectionItem[] = [
  { title: "Minimal Logo", subtitle: "Clean Identity", image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Creative Logo", subtitle: "Unique Style", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const packagingItems: SectionItem[] = [
  { title: "Eco Packaging", subtitle: "Sustainable", image: "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Luxury Box", subtitle: "Premium", image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const visitingCardItems: SectionItem[] = [
  { title: "Corporate Card", subtitle: "Professional", image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Creative Card", subtitle: "Unique Style", image: "https://images.pexels.com/photos/37347/office-setup-business-modern-37347.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const AnimatedCard = ({ item }: { item: SectionItem }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.02] duration-500 ease-out bg-gray-800/40 backdrop-blur-xl border border-gray-700">
    {item.image && (
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" loading="lazy" />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-xl font-bold drop-shadow-md">{item.title}</h3>
      <p className="text-sm text-orange-400 font-medium">{item.subtitle}</p>
    </div>
  </div>
);

const SectionWrapper = ({ title, items }: { title: string; items: SectionItem[] }) => (
  <div className="w-screen h-full flex flex-col items-center justify-center px-8">
    <h2 className="text-4xl font-bold text-orange-400 mb-8">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
      {[...items, ...items, ...items].slice(0, 6).map((item, i) => (
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
    <SectionWrapper key="brochure" title="Brochure" items={brochureItems} />,
    <SectionWrapper key="holding" title="Holding" items={holdingItems} />,
    <SectionWrapper key="logo" title="Logo" items={logoItems} />,
    <SectionWrapper key="packaging" title="Packaging" items={packagingItems} />,
    <SectionWrapper key="visiting" title="Visiting Cards" items={visitingCardItems} />,
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
