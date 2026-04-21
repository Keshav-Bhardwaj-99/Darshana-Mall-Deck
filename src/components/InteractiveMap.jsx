import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map as MapIcon, Compass, Navigation2 } from 'lucide-react';

const InteractiveMap = () => {
  const [activeZone, setActiveZone] = useState(null);

  const zones = [
    { id: 'hero', name: 'Entrance', x: '50%', y: '85%' },
    { id: 'about', name: 'The Core', x: '50%', y: '50%' },
    { id: 'attractions', name: 'Entertainment', x: '20%', y: '40%' },
    { id: 'retail', name: 'Luxury Wing', x: '80%', y: '40%' },
    { id: 'events', name: 'Global Stage', x: '50%', y: '20%' },
    { id: 'analytics', name: 'Intelligence', x: '80%', y: '15%' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveZone(null); // Close map on selection
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[80]">
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveZone(activeZone ? null : 'open')}
        className="w-16 h-16 bg-luxury-gold text-black rounded-full flex items-center justify-center shadow-2xl group relative"
      >
        <MapIcon size={24} className={activeZone ? 'hidden' : 'block'} />
        <Navigation2 size={24} className={activeZone ? 'block' : 'hidden'} />
        
        {/* Tooltip */}
        <span className="absolute left-20 bg-black/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Interactive Navigator
        </span>
      </motion.button>

      {/* Map Overlay */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
            className="absolute bottom-20 left-0 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 w-[300px] h-[400px] p-8 shadow-2xl rounded-sm"
          >
            <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
              <Compass size={18} className="text-luxury-gold animate-spin-slow" />
              <h3 className="text-xs uppercase tracking-[0.3em] font-medium text-white">Mall Navigator</h3>
            </div>

            <div className="relative w-full h-[250px] border border-white/5 bg-black/40 rounded-sm overflow-hidden">
              {/* Abstract Map Lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50"></div>
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/50"></div>
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/20 rotate-12"></div>
              </div>

              {/* Interaction Nodes */}
              {zones.map((zone) => (
                <motion.button
                  key={zone.id}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => scrollToSection(zone.id)}
                  style={{ left: zone.x, top: zone.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                >
                  <div className="w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-1">
                    {zone.name}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-8 text-[9px] text-gray-500 uppercase tracking-widest text-center italic">
              "Select a zone to explore details"
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMap;
