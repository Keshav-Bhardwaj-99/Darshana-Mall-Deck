import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden"
          >
            {/* Top decorative line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-luxury-gold to-transparent"></div>
            
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <h2 className="text-3xl font-light text-white uppercase tracking-wider mb-2">
                Leasing & <span className="text-luxury-gold italic">Sponsorship</span>
              </h2>
              <p className="text-sm text-gray-400 font-light mb-8">Submit your inquiry to receive a tailored digital deck and connect with our VP of Commercial Partnerships.</p>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Inquiry Submitted successfully!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">First Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Last Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Brand / Company</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Interest Area</label>
                  <select className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors appearance-none cursor-pointer">
                    <option>Luxury Retail Flagship</option>
                    <option>Food & Beverage Outlet</option>
                    <option>Event & Concert Booking</option>
                    <option>Brand Activation & Sponsorship</option>
                  </select>
                </div>

                <button type="submit" className="w-full mt-4 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-luxury-gold transition-colors duration-300">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GlobalModal;
