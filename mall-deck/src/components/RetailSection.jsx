import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';
import InquiryModal from './InquiryModal';

const RetailSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="retail" className="w-full min-h-screen bg-[#020202] text-white flex flex-col justify-center py-24 relative overflow-hidden">
      {/* Background abstract element for luxury feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-luxury-gold uppercase tracking-widest text-sm mb-4">Retail Excellence</h4>
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-tight">
              {contentData.retail.title}
            </h2>
            <p className="text-lg text-gray-400 font-light mb-10 max-w-lg">
              {contentData.retail.description}
            </p>
            
            <div className="space-y-6">
              {contentData.retail.brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.8 }}
                  className="border-b border-white/10 pb-4 text-2xl font-light tracking-wide hover:text-luxury-gold hover:ps-4 transition-all duration-300"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-12 px-8 py-4 border-2 border-luxury-gold text-luxury-gold uppercase tracking-widest text-sm hover:bg-luxury-gold hover:text-black transition-colors duration-500"
            >
              Inquire About Leasing
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="h-[600px] w-full bg-black relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Retail" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>

        </div>
      </div>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        contextTitle="Retail Leasing"
      />
    </section>
  );
};

export default RetailSection;
