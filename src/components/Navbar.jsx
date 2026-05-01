import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentView, setCurrentView, isMuted, setIsMuted, playSfx }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[110] px-8 py-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none transition-colors duration-1000">
      {/* Brand */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => {
          setCurrentView('dashboard');
          playSfx('click');
        }}
        onMouseEnter={() => playSfx('hover')}
      >
        <span className="text-2xl font-bold tracking-[0.3em] uppercase hover:text-luxury-gold transition-colors text-white">
          Darshana
        </span>
      </motion.div>

      {/* Dynamic Controls based on View */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6 pointer-events-auto"
      >
        <button 
          onClick={() => {
            setIsMuted(!isMuted);
            playSfx('click');
          }}
          onMouseEnter={() => playSfx('hover')}
          className="flex items-center gap-2 px-3 py-2 border border-white/30 text-white hover:border-luxury-gold transition-all duration-500 rounded-full"
        >
          <div className="flex items-center gap-[2px] h-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={isMuted ? { height: 2 } : { height: [2, 12, 4, 10, 2] }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  ease: "easeInOut" 
                }}
                className="w-[2px] rounded-full bg-luxury-gold"
              />
            ))}
          </div>
          <span className="text-[9px] uppercase tracking-widest min-w-[30px]">
            {isMuted ? 'Muted' : 'Live'}
          </span>
        </button>



        <button 
          onClick={() => {
            setCurrentView('odyssey');
            playSfx('click');
          }}
          onMouseEnter={() => playSfx('hover')}
          className={`px-4 py-2 text-[10px] uppercase tracking-widest border border-white/10 text-white hover:border-luxury-gold transition-colors rounded-full ${currentView === 'odyssey' ? 'bg-luxury-gold text-black border-luxury-gold' : ''}`}
        >
          The Odyssey
        </button>

        {currentView !== 'dashboard' ? (
          <button 
            onClick={() => {
              setCurrentView('dashboard');
              playSfx('click');
            }}
            onMouseEnter={() => playSfx('hover')}
            className="group flex items-center gap-3 px-6 py-2 border border-white/20 bg-black/50 backdrop-blur-md hover:border-luxury-gold hover:bg-white/5 transition-all duration-300 pointer-events-auto"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] uppercase tracking-widest text-white group-hover:text-luxury-gold transition-colors">Back to Hub</span>
          </button>
        ) : (
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] uppercase tracking-widest text-gray-400">Live Portal</span>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
