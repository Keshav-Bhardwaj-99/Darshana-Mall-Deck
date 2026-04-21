import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

const AboutSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black px-6 md:px-24">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Animated Left Column */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">
              02 / The Concept
            </h2>
            <h3 className="text-4xl md:text-6xl font-light leading-tight text-white uppercase tracking-tighter">
              Redefining the <span className="text-luxury-gold italic">Global Standard</span>.
            </h3>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
            {contentData.about.description}
          </p>
          
          <div className="flex gap-8">
            <a 
              href="/assets/fact_sheet_ai.png" 
              download="American_Dream_Fact_Sheet.png"
              className="text-xs uppercase tracking-widest border border-white/20 px-8 py-4 hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 cursor-pointer"
            >
              Download Fact Sheet
            </a>
          </div>
        </motion.div>

        {/* Cinematic Illustration / Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {contentData.about.stats.map((stat, i) => (
            <div key={i} className="space-y-2 border-l border-white/10 pl-8">
              <p className="text-4xl md:text-5xl font-light text-white">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-white/5 pointer-events-none rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] border border-white/5 pointer-events-none rounded-full"></div>
    </div>
  );
};

export default AboutSection;
