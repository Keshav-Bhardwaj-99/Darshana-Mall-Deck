import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const paths = [
  {
    id: 'luxury',
    title: 'Luxury Retail',
    image: '/assets/luxury_avenue_ai.png',
    pitch: "Position your flagship in 'The Avenue'. A curated environment surrounded by the world's most prestigious brands.",
    stats: [
      { label: 'Avg Dwell Time', value: 4.5, suffix: ' Hours', decimals: 1 },
      { label: 'HNWI Footfall', value: 300, prefix: '+', suffix: '%' },
      { label: 'Available Flagships', value: 2 }
    ],
    color: 'text-luxury-gold'
  },
  {
    id: 'fb',
    title: 'Food & Beverage',
    image: '/assets/food_hall_ai.png',
    pitch: "Join the future of culinary experiences. Our smart food halls drive massive evening traffic and lifestyle engagement.",
    stats: [
      { label: 'Daily Diners', value: 85000, suffix: '+' },
      { label: 'Peak Hour Turnover', value: 3, suffix: 'x' },
      { label: 'Delivery Integration', value: 100, suffix: '%' }
    ],
    color: 'text-emerald-400'
  },
  {
    id: 'events',
    title: 'Event Sponsorship',
    image: '/assets/concert_stage_ai.png',
    pitch: "Activate your brand on a global stage. Dominate our concert venues, digital pillars, and massive atriums.",
    stats: [
      { label: 'Annual Impressions', value: 1.2, suffix: 'B', decimals: 1 },
      { label: 'Brand Lift', value: 45, prefix: '+' , suffix: '%' },
      { label: 'Venue Capacity', value: 50000, prefix: 'Up to ' }
    ],
    color: 'text-purple-400'
  }
];

import CountUp from './CountUp';

const LeasingPaths = ({ setModalOpen, playSfx }) => {
  const [activePath, setActivePath] = useState(paths[0]);

  return (
    <div className="w-full h-screen bg-black flex relative overflow-hidden">
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePath.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={activePath.image} 
            alt={activePath.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 pt-32 flex flex-col justify-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4">Choose Your Path</p>
        <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tighter mb-16">
          Tailored <span className="text-luxury-gold italic">Opportunities</span>.
        </h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Path Selectors */}
          <div className="flex flex-col gap-6 md:w-1/3">
            {paths.map((path) => (
              <button
                key={path.id}
                onClick={() => {
                  setActivePath(path);
                  playSfx('click');
                }}
                onMouseEnter={() => playSfx('hover')}
                className={`text-left p-6 border transition-all duration-500 relative overflow-hidden group ${
                  activePath.id === path.id 
                    ? 'border-luxury-gold bg-luxury-gold/5' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className={`absolute left-0 top-0 h-full w-1 transition-all duration-500 ${activePath.id === path.id ? 'bg-luxury-gold' : 'bg-transparent group-hover:bg-white/20'}`}></div>
                <h3 className={`text-xl font-light tracking-widest uppercase ${activePath.id === path.id ? 'text-luxury-gold' : 'text-white'}`}>
                  {path.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="md:w-2/3 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePath.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-12 relative"
              >
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-luxury-gold opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-luxury-gold opacity-50"></div>
                
                <h3 className="text-3xl font-light text-white uppercase tracking-wider mb-6">{activePath.title} Prospectus</h3>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-lg">
                  {activePath.pitch}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                  {activePath.stats.map((stat, i) => (
                    <div key={`${activePath.id}-${i}`}>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{stat.label}</p>
                      <p className={`text-2xl font-light ${activePath.color}`}>
                        <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                      </p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    setModalOpen(true);
                    playSfx('click');
                  }}
                  onMouseEnter={() => playSfx('hover')}
                  className="mt-12 px-8 py-4 bg-luxury-gold text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-colors duration-500"
                >
                  Request {activePath.title} Deck
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeasingPaths;
