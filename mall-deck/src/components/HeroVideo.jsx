import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

// We create a Hero component with an autoplay background video.
// It uses Framer Motion for cinematic text reveal animations.
const HeroVideo = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay video loading to prioritize preloader and initial layout
    const timer = setTimeout(() => setShouldLoad(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Function to handle smooth scroll to the next section
  const handleExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Video - Only load when ready */}
      {shouldLoad && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            key="hero-video-render"
            className="h-full w-full object-cover opacity-60"
          >
            <source src={contentData.heroVideoUrl} type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Dark Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content Layer */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6 uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {contentData.mallName}
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase mb-10"
        >
          {contentData.tagline}
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          onClick={handleExplore}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="px-8 py-4 bg-transparent border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 text-white uppercase tracking-widest text-sm"
        >
          Explore the Experience
        </motion.button>
      </div>

      {/* Down Arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={handleExplore}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
