import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const hotspots = [
  { cx: "30%", cy: "35%", label: "NEW YORK", sub: "High Investor Intent" },
  { cx: "47%", cy: "28%", label: "LONDON", sub: "Brand Demand: Luxury" },
  { cx: "55%", cy: "38%", label: "DUBAI", sub: "Premium Retail Interest" },
  { cx: "70%", cy: "42%", label: "TOKYO", sub: "Tech-Luxury Crossover" },
  { cx: "25%", cy: "55%", label: "SÃO PAULO", sub: "Emerging Market HNI" },
  { cx: "62%", cy: "58%", label: "SINGAPORE", sub: "APAC Brand Hub" },
  { cx: "40%", cy: "22%", label: "PARIS", sub: "Flagship Tier-1 Interest" },
  { cx: "75%", cy: "30%", label: "SHANGHAI", sub: "Luxury Footfall Leader" },
];

const GlobalFootfallGlobe = ({ setCurrentView }) => {
  const rotationRef = useRef(0);
  const animFrameRef = useRef(null);
  const svgRef = useRef(null);

  // Auto-rotate the globe lines slowly via SVG transform
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.08; // Very slow rotation speed
      if (svgRef.current) {
        svgRef.current.setAttribute(
          'transform',
          `rotate(${angle}, 50, 50)`
        );
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-start relative overflow-hidden pt-20 pb-12">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* HEADER — compact, well above globe */}
      <div className="relative z-10 text-center mb-6 flex-shrink-0">
        <h2 className="text-3xl md:text-5xl font-light text-white uppercase tracking-tighter">
          Global <span className="text-luxury-gold italic">Reach</span>.
        </h2>
        <p className="text-gray-500 text-[9px] uppercase tracking-[0.6em] mt-2 font-bold">
          Predictive Analytics & World-Wide Sentiment
        </p>
      </div>

      {/* GLOBE — smaller, centered */}
      <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 320, height: 320 }}>

        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full border border-luxury-gold/20 shadow-[0_0_60px_rgba(212,175,55,0.1)]"></div>
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-4 rounded-full bg-luxury-gold"
        />

        {/* SVG Globe Lines — auto-rotating group inside */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <g ref={svgRef}>
            {/* Longitude lines */}
            <ellipse cx="50" cy="50" rx="45" ry="12" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5" />
            <ellipse cx="50" cy="50" rx="45" ry="25" stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" />
            <ellipse cx="50" cy="50" rx="45" ry="38" stroke="#D4AF37" strokeWidth="0.3" opacity="0.35" />
            {/* Latitude lines */}
            <ellipse cx="50" cy="50" rx="12" ry="45" stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" />
            <ellipse cx="50" cy="50" rx="28" ry="45" stroke="#D4AF37" strokeWidth="0.3" opacity="0.35" />
            {/* Equator */}
            <ellipse cx="50" cy="50" rx="45" ry="2" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
          </g>
          {/* Outer border circle (static) */}
          <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" />
        </svg>

        {/* Hotspot Points */}
        {hotspots.map((spot, i) => (
          <div
            key={i}
            className="absolute group cursor-help z-20"
            style={{ left: spot.cx, top: spot.cy, transform: 'translate(-50%, -50%)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 }}
              className="w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"
            />
            {/* Tooltip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
              <div className="bg-black/90 border border-luxury-gold/50 px-3 py-2 rounded-sm text-center">
                <p className="text-[8px] text-luxury-gold font-bold uppercase tracking-widest">{spot.label}</p>
                <p className="text-[7px] text-gray-400">{spot.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STATS BOXES — compact grid, above market ticker */}
      <div className="relative z-10 grid grid-cols-4 gap-4 mt-6 w-full max-w-3xl px-8 flex-shrink-0">
        {[
          { label: "Global Sentiment", value: "98.4%", color: "text-luxury-gold" },
          { label: "Intl. Brands", value: "450+", color: "text-white" },
          { label: "Visitor Origin", value: "85 Countries", color: "text-white" },
          { label: "Pre-Booked", value: "65%", color: "text-green-400" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white/[0.03] border border-white/10 text-center rounded-sm"
          >
            <p className="text-[8px] text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
            <p className={`text-xl font-light ${item.color}`}>{item.value}</p>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setCurrentView('dashboard')}
        className="mt-6 text-luxury-gold uppercase text-[9px] tracking-[0.5em] font-bold border-b border-luxury-gold/20 pb-1 hover:text-white hover:border-white transition-all flex-shrink-0"
      >
        Return to Intelligence Hub
      </button>
    </div>
  );
};

export default GlobalFootfallGlobe;
