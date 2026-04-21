import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';
import InquiryModal from './InquiryModal';
import AttractionModal from './AttractionModal';

// This component uses a grid/cards to display the massive attractions.
const AttractionsSection = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const openAttraction = (item) => {
    setSelectedAttraction(item);
  };

  return (
    <section id="attractions" className="w-full py-32 bg-[#050505] text-white px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-4 text-luxury-gold">
            Entertainment Capital
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            Not just a mall. A global platform for interactive experiences, drawing crowds that pure retail simply cannot match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.attractions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => openAttraction(item)}
              className="group relative overflow-hidden h-[500px] bg-black cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                <h3 className="text-2xl font-medium tracking-wide mb-3">{item.name}</h3>
                <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  {item.description}
                </p>
                <div className="mt-4 text-luxury-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  See Experience ↓
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Added Inquiry Button for Brand Partnerships */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex justify-center"
        >
          <button 
            onClick={() => setIsInquiryOpen(true)}
            className="px-8 py-3 border border-white/20 text-xs uppercase tracking-[0.3em] hover:border-luxury-gold transition-all duration-300"
          >
            Sponsorship Inquiry
          </button>
        </motion.div>
      </div>

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        contextTitle="Attraction Partnership"
      />

      {/* Immersive Attraction Lightbox */}
      <AttractionModal 
        isOpen={!!selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        attraction={selectedAttraction}
      />
    </section>
  );
};

export default AttractionsSection;
