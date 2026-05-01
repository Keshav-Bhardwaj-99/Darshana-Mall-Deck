import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from './CountUp';

const zones = [
  { id: 'avenue', name: 'The Avenue (Luxury)', footfallMult: 1.5, revenueMult: 2.5, lift: 35 },
  { id: 'atrium', name: 'Central Atrium', footfallMult: 3.0, revenueMult: 1.2, lift: 50 },
  { id: 'entertainment', name: 'Entertainment Hub', footfallMult: 2.5, revenueMult: 1.5, lift: 45 }
];

const ROICalculator = ({ setModalOpen, setCurrentView, playSfx }) => {
  const [sqFt, setSqFt] = useState(2500);
  const [activeZone, setActiveZone] = useState(zones[0]);
  
  // Calculated values
  const baseFootfall = 10000; // per sq ft / yr base
  const baseRevenue = 800; // per sq ft / yr base
  
  const projectedFootfall = Math.round(sqFt * activeZone.footfallMult * 10);
  const projectedRevenue = Math.round(sqFt * activeZone.revenueMult * baseRevenue);
  
  // Animation controls for numbers
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1],
      y: [5, 0],
      transition: { duration: 0.3 }
    });
  }, [sqFt, activeZone, controls]);

  const formatCurrency = (val) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    return `$${(val / 1000).toFixed(0)}k`;
  };

  const formatNumber = (val) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    return `${(val / 1000).toFixed(0)}k`;
  };

  return (
    <div className="w-full h-screen bg-[#050505] flex items-center justify-center pt-20 px-6 md:px-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left: Input Controls */}
        <motion.div 
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tighter mb-4">
              Dynamic <span className="text-luxury-gold italic">Projections</span>.
            </h2>
            <div className="flex items-center gap-2 mb-4">
               <span className="px-2 py-1 bg-luxury-gold/10 border border-luxury-gold/30 text-luxury-gold text-[8px] uppercase tracking-widest rounded-sm font-bold animate-pulse">AI-Powered Analytics</span>
               <span className="text-gray-500 text-[10px] uppercase tracking-widest">• Real-time Intelligence</span>
            </div>
            <p className="text-gray-500 font-light max-w-md">Calculate your brand's potential reach and revenue based on footprint and location.</p>
          </div>

          {/* Size Slider */}
          <div className="space-y-4 bg-white/[0.02] border border-white/5 p-6">
            <div className="flex justify-between items-end">
              <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Store Footprint</label>
              <span className="text-2xl font-light text-white">{sqFt.toLocaleString()} <span className="text-sm text-gray-500">sq ft</span></span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="15000" 
              step="500" 
              value={sqFt} 
              onChange={(e) => setSqFt(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-luxury-gold"
            />
          </div>

          {/* Zone Selector */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Select Zone</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {zones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={`p-4 text-left border transition-all duration-300 ${
                    activeZone.id === zone.id 
                    ? 'border-luxury-gold bg-luxury-gold/10' 
                    : 'border-white/10 bg-transparent hover:border-white/30'
                  }`}
                >
                  <h4 className={`text-xs uppercase tracking-widest font-bold ${activeZone.id === zone.id ? 'text-luxury-gold' : 'text-gray-400'}`}>
                    {zone.name}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* Live Visualization Graph */}
          <div className="h-24 w-full bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden relative flex items-end gap-1 px-4">
             {Array.from({ length: 40 }).map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ height: 10 }}
                 animate={{ 
                   height: Math.max(10, (sqFt / 15000) * 100 * (1 + Math.sin(i * 0.5) * 0.2) * (i / 40)) + "%",
                   backgroundColor: i > 30 ? "#D4AF37" : "rgba(255,255,255,0.1)"
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="flex-1 rounded-t-sm"
               />
             ))}
             <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping"></div>
                <span className="text-[8px] text-luxury-gold uppercase tracking-[0.3em] font-bold">Market Potential Stream</span>
             </div>
          </div>
        </motion.div>

        {/* Right: Data Output */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-black border border-white/10 p-12 flex flex-col justify-center shadow-2xl relative overflow-hidden group"
        >
          {/* Animated Glow on Data Change */}
          <motion.div 
            animate={controls}
            className="absolute inset-0 bg-luxury-gold/5 opacity-0 pointer-events-none"
          ></motion.div>

          <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-8">Annual Projections</h3>

          <div className="space-y-8">
            <motion.div animate={controls}>
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-1">Estimated Revenue</p>
              <h1 className="text-6xl md:text-7xl font-light text-white tracking-tighter">
                <CountUp to={projectedRevenue >= 1000000 ? projectedRevenue / 1000000 : projectedRevenue / 1000} 
                         prefix="$" 
                         suffix={projectedRevenue >= 1000000 ? "M" : "k"} 
                         decimals={projectedRevenue >= 1000000 ? 1 : 0} />
              </h1>
            </motion.div>

            <motion.div animate={controls}>
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">Projected Footfall</p>
              <h1 className="text-5xl font-light text-white tracking-tighter">
                <CountUp to={projectedFootfall >= 1000000 ? projectedFootfall / 1000000 : projectedFootfall / 1000} 
                         suffix={projectedFootfall >= 1000000 ? "M" : "k"} 
                         decimals={projectedFootfall >= 1000000 ? 1 : 0} />
                <span className="text-xl text-gray-500"> / yr</span>
              </h1>
            </motion.div>

            <motion.div animate={controls} className="pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-2">Brand Lift & Exposure</p>
              <div className="flex items-center gap-4">
                <h1 className="text-4xl font-light text-emerald-400">
                  +<CountUp to={activeZone.lift} suffix="%" />
                </h1>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${activeZone.lift}%` }}
                     transition={{ duration: 1, ease: "easeOut" }}
                     className="h-full bg-emerald-400"
                   ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="flex-1 py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-colors"
            >
              Request Leasing Packet
            </button>
            <button 
              onClick={() => setCurrentView('summary')}
              className="flex-1 py-4 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Executive Summary
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ROICalculator;
