import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, contextTitle }) => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate API Call
    setTimeout(() => {
      setFormState('success');
      // Auto close after success
      setTimeout(() => {
        onClose();
        setFormState('idle');
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        ></motion.div>

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-12 max-w-lg w-full shadow-2xl z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <CheckCircle size={64} className="text-emerald-500 mb-6" />
              <h3 className="text-2xl font-light mb-2">Request Received</h3>
              <p className="text-gray-400 text-center font-light">
                Our commercial team will connect with you shortly regarding {contextTitle}.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <h3 className="text-2xl tracking-wide uppercase font-light text-luxury-gold mb-2">
                Inquire Now
              </h3>
              <p className="text-sm text-gray-400 mb-8 font-light">
                Secure your presence at the world's most ambitious destination.
              </p>

              <label className="text-xs uppercase tracking-widest text-gray-500 mb-1">Company Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-white/20 pb-2 mb-6 text-white focus:outline-none focus:border-luxury-gold transition-colors" 
              />

              <label className="text-xs uppercase tracking-widest text-gray-500 mb-1">Work Email</label>
              <input 
                required
                type="email" 
                className="w-full bg-transparent border-b border-white/20 pb-2 mb-8 text-white focus:outline-none focus:border-luxury-gold transition-colors" 
              />

              <button 
                type="submit" 
                disabled={formState === 'loading'}
                className="w-full py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-colors duration-300 font-medium tracking-[0.2em] relative flex justify-center items-center"
              >
                {formState === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InquiryModal;
