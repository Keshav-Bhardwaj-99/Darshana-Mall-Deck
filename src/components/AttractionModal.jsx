import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import InquiryModal from './InquiryModal';

const AttractionModal = ({ isOpen, onClose, attraction }) => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!attraction) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-10">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-luxury-dark w-full h-full max-w-6xl md:h-auto md:min-h-[500px] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-2xl z-20"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-30 p-2 bg-black/50 text-white rounded-full hover:bg-luxury-gold hover:text-black transition-all"
            >
              <X size={24} />
            </button>

            {/* Left Side: High-Resolution Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={attraction.imageUrl} 
                alt={attraction.name} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side: Content Details */}
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3"
              >
                Experience Excellence
              </motion.h4>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-light tracking-wide mb-6 leading-tight"
              >
                {attraction.name}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 font-light leading-relaxed mb-8 text-lg"
              >
                {attraction.fullDescription}
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 gap-4 mb-10"
              >
                {attraction.stats && attraction.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-luxury-gold rounded-full"></div>
                    <span className="text-sm font-light text-gray-300 tracking-wide">{stat}</span>
                  </div>
                ))}
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsInquiryOpen(true)}
                className="px-10 py-4 bg-luxury-gold text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors duration-300 w-full md:w-fit"
              >
                Book this Experience
              </motion.button>
            </div>
          </motion.div>

          {/* Connect to Inquiry Modal */}
          <InquiryModal 
            isOpen={isInquiryOpen} 
            onClose={() => setIsInquiryOpen(false)} 
            contextTitle={attraction.name}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default AttractionModal;
