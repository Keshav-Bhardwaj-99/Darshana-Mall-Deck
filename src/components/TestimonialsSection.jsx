import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

const TestimonialsSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020202] px-6 md:px-24 pt-24 pb-8 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
         <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-luxury-gold rounded-full blur-[150px] animate-pulse"></div>
         <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[200px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-16 text-center"
        >
          <p className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4">09 / Partners</p>
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter leading-none">
            Global <span className="text-luxury-gold italic">Confidence</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {contentData.testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/5 p-12 relative group hover:bg-white/[0.05] transition-all duration-700"
            >
              {/* Luxury Quote Icon */}
              <div className="text-6xl font-serif text-luxury-gold/20 absolute top-8 left-8 transition-all duration-500 group-hover:text-luxury-gold/40">“</div>
              
              <div className="relative z-10 space-y-8">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
                  {item.quote}
                </p>
                
                <div className="flex items-center gap-6 border-t border-white/5 pt-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-luxury-gold/30">
                    <img src={item.avatar} alt={item.partner} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-widest text-xs font-bold">{item.partner}</h4>
                    <p className="text-luxury-gold uppercase tracking-[0.2em] text-[8px] mt-1">Verified Partner</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-luxury-gold transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Strip (Simulated) */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="mt-20 flex flex-wrap justify-center gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        >
           <span className="text-xl font-bold tracking-[0.5em] text-white">HERMÈS</span>
           <span className="text-xl font-bold tracking-[0.4em] text-white uppercase italic">Gucci</span>
           <span className="text-xl font-bold tracking-[0.5em] text-white">SAINT LAURENT</span>
           <span className="text-xl font-bold tracking-[0.3em] text-white">TIFFANY & CO.</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
