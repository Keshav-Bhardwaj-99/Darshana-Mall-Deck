import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const PanoramaViewer = ({ setCurrentView }) => {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate percentage offset from center (-0.5 to 0.5)
    const offset = (e.clientX - rect.left) / rect.width - 0.5;
    x.set(offset * -1000); // Pan distance
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12">
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
          Immersive <span className="text-luxury-gold italic">Panorama</span>.
        </h2>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.6em] mt-4 font-bold">Drag or Move to Explore Interior Renders</p>
      </div>

      {/* Panorama Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-7xl h-[60vh] border border-white/10 overflow-hidden cursor-move rounded-sm shadow-2xl"
      >
        <motion.div 
          style={{ x: springX }}
          className="absolute inset-0 w-[300%] h-full flex items-center justify-center"
        >
          <img 
            src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=3000" 
            alt="Darshana Interior 360" 
            className="w-full h-full object-cover scale-110 grayscale-[0.2]"
          />
          {/* Overlay Tech Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
          
          {/* Interactive Floating Tags in 360 space */}
          <div className="absolute left-[20%] top-[40%] p-4 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold text-white text-[10px] uppercase tracking-widest">
            SMART GLASS ATRIUM
          </div>
          <div className="absolute left-[50%] top-[60%] p-4 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold text-white text-[10px] uppercase tracking-widest">
            INTERACTIVE LED STAIRS
          </div>
          <div className="absolute left-[80%] top-[30%] p-4 bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold text-white text-[10px] uppercase tracking-widest">
            LUXURY BALCONY SUITE
          </div>
        </motion.div>
        
        {/* Viewport UI Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <div className="w-12 h-12 border border-white rounded-full"></div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="px-12 py-4 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-luxury-gold transition-all"
        >
          Back to Hub
        </button>
      </div>
    </div>
  );
};

export default PanoramaViewer;
