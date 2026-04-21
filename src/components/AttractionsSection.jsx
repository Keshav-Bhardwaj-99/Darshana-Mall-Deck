import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';
import InquiryModal from './InquiryModal';
import AttractionModal from './AttractionModal';

const AttractionsSection = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const openAttraction = (item) => {
    setSelectedAttraction(item);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] px-6 md:px-24">
      <div className="max-w-7xl w-full">
        {/* Slide Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-12"
        >
          <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold mb-4">03 / Entertainment</p>
          <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tighter">
            Massive <span className="text-luxury-gold italic">Traffic Drivers</span>.
          </h2>
        </motion.div>

        {/* Presentation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[50vh] md:h-[60vh]">
          {contentData.attractions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => openAttraction(item)}
              className="group relative overflow-hidden h-full bg-black cursor-pointer border border-white/5"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-xl font-medium tracking-wide mb-2 text-white">{item.name}</h3>
                <div className="w-8 h-[1px] bg-luxury-gold mb-4 transition-all duration-500 group-hover:w-full"></div>
                <p className="text-xs text-gray-400 font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slide Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex items-center justify-between border-t border-white/10 pt-8"
        >
          <p className="text-[10px] uppercase tracking-widest text-gray-500 max-w-md">
            Drawing global audiences that pure retail simply cannot match. A platform for brand immersion.
          </p>
          <button 
            onClick={() => setIsInquiryOpen(true)}
            className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white hover:border-luxury-gold transition-all duration-300"
          >
            Leasing Inquiries
          </button>
        </motion.div>
      </div>

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
        contextTitle="Attraction Partnership"
      />

      <AttractionModal 
        isOpen={!!selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        attraction={selectedAttraction}
      />
    </div>
  );
};

export default AttractionsSection;
