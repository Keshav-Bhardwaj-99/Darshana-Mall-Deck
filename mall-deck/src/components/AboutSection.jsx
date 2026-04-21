import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

// This component highlights key metrics and intro about the mall
const AboutSection = () => {
  return (
    <section className="w-full min-h-screen bg-luxury-dark text-white flex flex-col items-center justify-center py-20 px-4 md:px-20 border-t border-white/10 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Story text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-luxury-gold uppercase tracking-wide">
            {contentData.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
            {contentData.about.description}
          </p>
          <a 
            href="/assets/fact_sheet_ai.png" 
            download="American_Dream_Fact_Sheet.png"
            className="text-sm uppercase tracking-widest border-b border-luxury-gold pb-1 hover:text-luxury-gold transition-colors duration-300 inline-block cursor-pointer"
          >
            Download Fact Sheet
          </a>
        </motion.div>

        {/* Right Side: Data Metrics Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 gap-8"
        >
          {contentData.about.stats.map((stat, index) => (
            <div key={index} className="border-l border-white/20 pl-6 flex flex-col justify-center">
              <span className="text-4xl md:text-5xl font-light text-white mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
