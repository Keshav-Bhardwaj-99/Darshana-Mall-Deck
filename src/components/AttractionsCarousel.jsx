import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contentData from '../data/content.json';

const AttractionsCarousel = ({ setModalOpen }) => {
  const attractions = contentData.attractions;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % attractions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  return (
    <div className="w-full h-screen bg-[#050505] flex flex-col items-center justify-center pt-24 pb-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={attractions[currentIndex].imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover grayscale blur-md"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 text-center mb-12">
        <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4">03 / Entertainment</p>
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
          Global <span className="text-luxury-gold italic">Attractions</span>.
        </h2>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center perspective-1000">
        <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center transform-style-3d">
          <AnimatePresence initial={false} mode="popLayout">
            {attractions.map((attraction, index) => {
              // Calculate relative position (-1, 0, 1)
              let offset = index - currentIndex;
              if (offset < -1) offset += attractions.length;
              if (offset > 1) offset -= attractions.length;

              // Only render adjacent and active slides for performance
              if (Math.abs(offset) > 1) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: offset * 200, 
                    scale: 0.8, 
                    rotateY: offset * -30,
                    z: -100
                  }}
                  animate={{ 
                    opacity: offset === 0 ? 1 : 0.4, 
                    x: offset * 300, 
                    scale: offset === 0 ? 1 : 0.8,
                    rotateY: offset * -45,
                    z: offset === 0 ? 0 : -200,
                    zIndex: offset === 0 ? 10 : 1
                  }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute w-[300px] md:w-[400px] h-[450px] cursor-pointer"
                  onClick={() => {
                    if (offset === 1) nextSlide();
                    if (offset === -1) prevSlide();
                  }}
                >
                  <div className={`w-full h-full relative border rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${offset === 0 ? 'border-luxury-gold shadow-[0_0_50px_rgba(212,175,55,0.3)]' : 'border-white/10'}`}>
                    <img src={attraction.imageUrl} alt={attraction.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {offset === 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 left-0 w-full p-8"
                      >
                        <h3 className="text-2xl font-light text-white uppercase tracking-wider mb-2">{attraction.name}</h3>
                        <p className="text-xs text-luxury-gold uppercase tracking-widest mb-4">{attraction.stats[0]}</p>
                        <p className="text-sm text-gray-300 font-light line-clamp-3">{attraction.fullDescription}</p>
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
                          className="mt-6 w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] uppercase tracking-widest text-white hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-colors"
                        >
                          View Details
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex gap-6 mt-8">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all text-white hover:text-luxury-gold">
          &larr;
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-luxury-gold hover:bg-luxury-gold/10 transition-all text-white hover:text-luxury-gold">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default AttractionsCarousel;
