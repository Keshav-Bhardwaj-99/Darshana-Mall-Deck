import React from 'react';
import { motion } from 'framer-motion';

const Atmosphere = () => {
  // Create an array for particles
  const particles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[150] overflow-hidden">
      {/* Floating Gold Dust Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%"
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: ["-10%", "110%"],
            x: ["-5%", "5%"]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute w-[2px] h-[2px] bg-luxury-gold rounded-full blur-[1px]"
        />
      ))}

      {/* Cinematic Light Leaks */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] blur-3xl"
      />
      
      <motion.div 
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1.2, 1, 1.2],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl"
      />

      {/* Subtle Grain Overlay (Pure CSS) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none brightness-100 contrast-150 grayscale invert" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default Atmosphere;
