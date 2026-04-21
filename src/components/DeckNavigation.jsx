import React from 'react';
import { motion } from 'framer-motion';

const DeckNavigation = ({ slides, activeSlide }) => {
  const scrollToSlide = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6 items-end">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => scrollToSlide(slide.id)}
          className="group flex items-center gap-4 outline-none"
        >
          <motion.span
            initial={false}
            animate={{ 
              opacity: activeSlide === index ? 1 : 0,
              x: activeSlide === index ? 0 : 20 
            }}
            className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
          >
            {slide.label}
          </motion.span>
          
          <div className="relative w-3 h-3 flex items-center justify-center">
            <motion.div
              initial={false}
              animate={{ 
                scale: activeSlide === index ? 1.5 : 1,
                backgroundColor: activeSlide === index ? "#D4AF37" : "rgba(255,255,255,0.2)"
              }}
              className="w-1.5 h-1.5 rounded-full transition-colors duration-300 group-hover:bg-luxury-gold"
            />
            {activeSlide === index && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 border border-luxury-gold rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DeckNavigation;
