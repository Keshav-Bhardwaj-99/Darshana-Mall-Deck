import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

const SustainabilitySection = () => {
  const { sustainability } = contentData;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black px-6 md:px-24 pt-24 pb-8 relative overflow-hidden">
      {/* Background AI Asset */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/green_tech_mall_ai.png" 
          alt="Sustainability" 
          className="w-full h-full object-cover opacity-40 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4 mb-10">
              <h4 className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold">06 / Impact</h4>
              <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter leading-none">
                Smart & <span className="text-luxury-gold italic">Sustainable</span>.
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 font-light mb-12 max-w-lg leading-relaxed">
              {sustainability.description}
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {sustainability.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-10 h-[10px] bg-luxury-gold/30 mt-3 group-hover:w-16 group-hover:bg-luxury-gold transition-all duration-500"></div>
                  <div>
                    <h3 className="text-white uppercase tracking-widest text-sm font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-xs font-light max-w-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Tech UI Element */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="relative hidden lg:flex justify-center items-center"
          >
             <div className="w-96 h-96 border border-luxury-gold/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-72 h-72 border border-luxury-gold/40 rounded-full animate-[spin_15s_linear_infinite_reverse] flex items-center justify-center">
                   <div className="w-48 h-48 border border-luxury-gold/60 rounded-full flex items-center justify-center">
                      <div className="text-luxury-gold text-4xl font-light scale-x-150">ESG</div>
                   </div>
                </div>
             </div>
             {/* Glowing Pulse */}
             <div className="absolute w-4 h-4 bg-luxury-gold rounded-full blur-md animate-pulse"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SustainabilitySection;
