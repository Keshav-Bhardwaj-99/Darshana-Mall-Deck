import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

const RoadmapSection = () => {
  const { roadmap } = contentData;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] px-6 md:px-24 pt-24 pb-8 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Future Vision" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        {/* Slide Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-16 text-center"
        >
          <p className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4">07 / Vision</p>
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
            The <span className="text-luxury-gold italic">Roadmap</span>.
          </h2>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative mt-20">
          {/* Central Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {roadmap.phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-4 h-4 rounded-full border-2 border-luxury-gold bg-black mb-10 relative z-20 group-hover:scale-150 group-hover:bg-luxury-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
                
                <div className="space-y-4">
                  <span className="text-2xl font-light text-white group-hover:text-luxury-gold transition-colors">{phase.year}</span>
                  <div className="h-[1px] w-8 bg-luxury-gold/50 mx-auto"></div>
                  <h3 className="text-[10px] uppercase tracking-widest text-white font-bold h-8 flex items-center justify-center">
                    {phase.event}
                  </h3>
                  <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-[8px] uppercase tracking-widest text-gray-500 group-hover:border-luxury-gold/30 group-hover:text-luxury-gold transition-all">
                    {phase.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>
  );
};

export default RoadmapSection;
