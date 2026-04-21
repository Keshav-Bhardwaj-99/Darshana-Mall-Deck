import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSlide }) => {
  const slideNumber = (activeSlide + 1).toString().padStart(2, '0');

  return (
    <nav className="fixed top-0 left-0 w-full z-[110] px-8 py-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
      {/* Brand */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pointer-events-auto"
      >
        <span className="text-2xl font-bold tracking-[0.3em] text-white uppercase">
          Darshana
        </span>
      </motion.div>

      {/* Slide Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-6 pointer-events-auto"
      >
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold mb-1">
            Slide
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-light text-white tracking-widest leading-none">
              {slideNumber}
            </span>
            <span className="text-xs text-white/30">/ 07</span>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
