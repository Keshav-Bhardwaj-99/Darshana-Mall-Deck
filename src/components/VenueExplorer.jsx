import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const venueModes = {
  concert: {
    id: 'concert',
    label: 'Concert Setup',
    video: '/assets/stage_loop.mp4',
    fallbackImg: 'https://images.unsplash.com/photo-1540039155732-d6749b93fa50?auto=format&fit=crop&q=80&w=2000',
    capacity: '5,500 Pax',
    roi: '$1.2M Avg/Night',
    lighting: 'Dynamic L-Acoustics',
    tint: 'bg-blue-900/30'
  },
  corporate: {
    id: 'corporate',
    label: 'Corporate Expo',
    video: '/assets/atrium_loop.mp4',
    fallbackImg: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2000',
    capacity: '120 Booths',
    roi: '$800k Sponsorship Val',
    lighting: 'Ambient Daylight 5000K',
    tint: 'bg-luxury-gold/10'
  },
  activation: {
    id: 'activation',
    label: 'Brand Activation',
    video: null,
    fallbackImg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000',
    capacity: 'Open Floor 10k Sq.Ft',
    roi: '3.5x Brand Lift',
    lighting: 'Custom Spotlight',
    tint: 'bg-purple-900/20'
  }
};

const VenueExplorer = ({ setModalOpen }) => {
  const [activeMode, setActiveMode] = useState('concert');
  const currentData = venueModes[activeMode];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-black relative flex flex-col justify-end"
    >
      {/* Background Media - Multi-layer for instant transitions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Object.values(venueModes).map((mode) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeMode === mode.id ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {mode.video ? (
              <video
                src={mode.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-60"
              />
            ) : (
              <img 
                src={mode.fallbackImg} 
                alt={mode.label} 
                className="w-full h-full object-cover opacity-60" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className={`absolute inset-0 mix-blend-color transition-opacity duration-1000 ${activeMode === mode.id ? 'opacity-100' : 'opacity-0'} ${mode.tint}`}></div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Controls & Data Overlay */}
      <div className="relative z-10 w-full px-6 md:px-24 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Left: Info */}
          <div className="flex-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                 <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                 </span>
                 <p className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold">Live Simulation</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-light text-white uppercase tracking-tighter leading-none mb-6">
                The Dream <span className="text-luxury-gold italic">Stage</span>.
              </h2>
            </motion.div>

            {/* Live Data HUD */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <AnimatePresence mode="popLayout">
                <motion.div key={`cap-${activeMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">Max Capacity</p>
                  <p className="text-xl text-white font-light">{currentData.capacity}</p>
                </motion.div>
                <motion.div key={`roi-${activeMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: 0.1 }}>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">Projected ROI</p>
                  <p className="text-xl text-emerald-400 font-light">{currentData.roi}</p>
                </motion.div>
                <motion.div key={`light-${activeMode}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ delay: 0.2 }}>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1">Environment Setup</p>
                  <p className="text-xl text-white font-light">{currentData.lighting}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="w-full md:w-auto bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-sm">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 text-center">Select Configuration</p>
            <div className="flex flex-col gap-3">
              {Object.values(venueModes).map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`px-8 py-3 text-xs uppercase tracking-widest border transition-all duration-300 ${
                    activeMode === mode.id 
                      ? 'bg-luxury-gold text-black border-luxury-gold font-bold' 
                      : 'bg-transparent text-white border-white/20 hover:border-white/50'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
              <button 
                onClick={() => setModalOpen(true)}
                className="mt-4 px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors"
              >
                Book This Configuration
              </button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default VenueExplorer;
