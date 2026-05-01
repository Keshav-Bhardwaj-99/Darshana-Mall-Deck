import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  { year: "2024", phase: "Concept & Planning", detail: "Visionary architectural design and global brand curation." },
  { year: "2025", phase: "Infrastructure Build", detail: "Groundbreaking of the Smart Atrium and Cyber Food Hall." },
  { year: "2026", phase: "Tech Integration", detail: "Deployment of AI-Driven visitor management and IoT infrastructure." },
  { year: "2027", phase: "The Grand Launch", detail: "Inauguration of The Avenue and Luxury Pavilion." },
  { year: "2028", phase: "Global Expansion", detail: "Integration of the Dream Stage with international touring circuits." },
  { year: "2030", phase: "Project Legacy", detail: "Established as the world's leading immersive retail destination." }
];

const RoadmapSection = ({ setCurrentView }) => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12">
      <div className="relative z-10 text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
          The <span className="text-luxury-gold italic">Legacy</span> Roadmap.
        </h2>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.6em] mt-4 font-bold">2024 - 2030 Evolution</p>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-12 h-[50vh] flex items-center">
        {/* Central Line */}
        <div className="absolute top-1/2 left-12 right-12 h-[1px] bg-white/10"></div>
        
        <div className="flex justify-between w-full relative">
          {roadmapData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center group w-40"
            >
              {/* Year Bubble */}
              <div className="text-luxury-gold font-bold text-xs mb-8 tracking-widest">{item.year}</div>
              
              {/* Point on Line */}
              <div className="w-3 h-3 rounded-full bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,1)] relative z-10 group-hover:scale-150 transition-transform"></div>
              
              {/* Info Box (Alternating Top/Bottom) */}
              <div className={`absolute w-48 text-center ${i % 2 === 0 ? 'top-20' : 'bottom-20'}`}>
                <h4 className="text-white text-[11px] uppercase tracking-widest font-bold mb-3">{item.phase}</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed font-light">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setCurrentView('dashboard')}
        className="mt-24 px-12 py-4 border border-luxury-gold/30 text-luxury-gold uppercase text-[10px] tracking-[0.5em] font-bold hover:bg-luxury-gold hover:text-black transition-all"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default RoadmapSection;
