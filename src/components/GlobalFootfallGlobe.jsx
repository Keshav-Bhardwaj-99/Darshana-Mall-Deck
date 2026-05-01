import React from 'react';
import { motion } from 'framer-motion';

const GlobalFootfallGlobe = ({ setCurrentView }) => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
          Global <span className="text-luxury-gold italic">Reach</span>.
        </h2>
        <p className="text-gray-500 text-xs uppercase tracking-[0.5em] mt-4 font-bold">Predictive Analytics & World-Wide Sentiment</p>
      </div>

      <div className="relative w-full max-w-4xl h-[50vh] flex items-center justify-center">
        {/* Animated Globe (Tech-Style SVG) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-[500px] h-[500px]"
        >
          {/* Main Globe Circle */}
          <div className="absolute inset-0 rounded-full border border-luxury-gold/30 shadow-[0_0_80px_rgba(212,175,55,0.15)] bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
          
          {/* Inner Pulsing Core */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-10 rounded-full bg-luxury-gold"
          />

          {/* Latitude/Longitude Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
            <ellipse cx="50" cy="50" rx="45" ry="15" stroke="#D4AF37" strokeWidth="0.2" fill="none" />
            <ellipse cx="50" cy="50" rx="15" ry="45" stroke="#D4AF37" strokeWidth="0.2" fill="none" />
            <ellipse cx="50" cy="50" rx="45" ry="30" stroke="#D4AF37" strokeWidth="0.2" fill="none" />
            <ellipse cx="50" cy="50" rx="30" ry="45" stroke="#D4AF37" strokeWidth="0.2" fill="none" />
          </svg>

          {/* Data Arcs (Simulated) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0], x: [0, 100, 200], y: [0, -50, -100] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
              style={{ rotate: `${i * 60}deg` }}
            />
          ))}

          {/* Target Indicators */}
          <div className="absolute top-1/4 left-1/4 group cursor-help">
            <div className="w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_15px_#D4AF37] animate-ping"></div>
            <div className="absolute top-4 left-4 bg-black/80 border border-luxury-gold/50 p-2 rounded hidden group-hover:block whitespace-nowrap">
              <p className="text-[8px] text-white font-bold">NEW YORK: HIGH INTEREST</p>
            </div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 group cursor-help">
            <div className="w-2 h-2 bg-luxury-gold rounded-full shadow-[0_0_15px_#D4AF37] animate-ping"></div>
            <div className="absolute top-4 left-4 bg-black/80 border border-luxury-gold/50 p-2 rounded hidden group-hover:block whitespace-nowrap">
              <p className="text-[8px] text-white font-bold">LONDON: BRAND DEMAND</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl w-full px-12">
        <div className="p-6 bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Global Sentiment</p>
          <p className="text-2xl text-luxury-gold font-light">98.4%</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Intl. Brands</p>
          <p className="text-2xl text-white font-light">450+</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Visitor Origin</p>
          <p className="text-2xl text-white font-light">85 Countries</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Pre-Booked</p>
          <p className="text-2xl text-green-400 font-light">65%</p>
        </div>
      </div>

      <button 
        onClick={() => setCurrentView('dashboard')}
        className="mt-12 text-luxury-gold uppercase text-[10px] tracking-[0.5em] font-bold border-b border-luxury-gold pb-2 hover:text-white hover:border-white transition-all"
      >
        Return to Intelligence Hub
      </button>
    </div>
  );
};

export default GlobalFootfallGlobe;
