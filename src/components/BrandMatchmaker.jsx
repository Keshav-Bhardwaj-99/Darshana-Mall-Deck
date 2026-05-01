import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandMatchmaker = ({ setCurrentView }) => {
  const [step, setStep] = useState(1);
  const [matching, setMatching] = useState(false);
  const [result, setResult] = useState(null);

  const startMatching = () => {
    setMatching(true);
    setTimeout(() => {
      setResult("The Avenue (Luxury Wing)");
      setMatching(false);
    }, 3000);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-24">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
          Brand <span className="text-luxury-gold italic">Matchmaker</span>.
        </h2>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.6em] mt-4 font-bold">AI-Driven Spatial Allocation</p>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-white/[0.03] border border-white/10 p-12 md:p-20 backdrop-blur-3xl rounded-sm">
        <AnimatePresence mode="wait">
          {!matching && !result && (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block">Brand Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light text-xl focus:outline-none focus:border-luxury-gold transition-colors" placeholder="ENTER YOUR LEGACY..." />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold block">Category</label>
                <select className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light text-xl focus:outline-none focus:border-luxury-gold transition-colors appearance-none">
                  <option className="bg-black">High-End Fashion</option>
                  <option className="bg-black">Culinary Arts</option>
                  <option className="bg-black">Technology & Future</option>
                  <option className="bg-black">Lifestyle & Wellness</option>
                </select>
              </div>
              <button 
                onClick={startMatching}
                className="w-full py-6 bg-luxury-gold text-black text-xs uppercase tracking-[0.5em] font-bold hover:bg-white transition-all shadow-2xl"
              >
                Analyse Placement
              </button>
            </motion.div>
          )}

          {matching && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 flex flex-col items-center gap-12"
            >
              <div className="w-24 h-24 border-2 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin"></div>
              <p className="text-white uppercase tracking-[1em] text-[10px] animate-pulse">Running Spatial Simulations</p>
            </motion.div>
          )}

          {result && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <p className="text-luxury-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-6">Match Confirmed</p>
              <h3 className="text-4xl md:text-5xl text-white font-light uppercase tracking-tighter mb-8 leading-tight">
                Recommended Hub: <br />
                <span className="text-luxury-gold italic">{result}</span>
              </h3>
              <p className="text-gray-400 text-sm font-light max-w-sm mx-auto mb-12 leading-relaxed">
                Our AI suggests this zone based on current footfall demographics and brand synergy indexing.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setResult(null)}
                  className="px-8 py-4 border border-white/10 text-white text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  New Analysis
                </button>
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold transition-all"
                >
                  Proceed to HUB
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button 
        onClick={() => setCurrentView('dashboard')}
        className="mt-16 text-gray-500 uppercase text-[10px] tracking-[0.5em] hover:text-white transition-all"
      >
        [ Skip and Return ]
      </button>
    </div>
  );
};

export default BrandMatchmaker;
