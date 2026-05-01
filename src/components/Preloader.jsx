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
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center perspective-1000">
        {/* Animated Brand Name */}
        <motion.div
          initial={{ opacity: 0, rotateX: 60, scale: 0.8 }}
          animate={percent < 100 ? { opacity: 1, rotateX: 0, scale: 1 } : { scale: 1.2, opacity: 1, textShadow: "0 0 40px rgba(212,175,55,1)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-[0.5em] text-transparent bg-clip-text bg-gradient-to-b from-white via-luxury-gold to-[#443300] uppercase mb-8 ml-4">
            Darshana
          </h1>
        </motion.div>

        {/* Progress Container */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden z-10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="h-full bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,1)]"
          ></motion.div>
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: percent < 100 ? 0.5 : 0 }}
          className="mt-6 text-[10px] uppercase tracking-[0.3em] font-light text-gray-400 z-10"
        >
          {percent < 100 ? `Crafting the Experience ${percent}%` : ""}
        </motion.p>
      </div>

      {/* Cinematic Flash Effect at 100% */}
      <AnimatePresence>
        {percent >= 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-white z-[50]"
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

export default Preloader;
