import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadComplete, 1000); // Wait a bit before revealing
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-[0.4em] text-white uppercase mb-8"
        >
          Darshana
        </motion.h1>

        {/* Progress Container */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="h-full bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          ></motion.div>
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mt-6 text-[10px] uppercase tracking-[0.3em] font-light text-gray-400"
        >
          {percent < 100 ? `Crafting the Experience ${percent}%` : "Welcome to the Future"}
        </motion.p>
      </div>

      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

export default Preloader;
