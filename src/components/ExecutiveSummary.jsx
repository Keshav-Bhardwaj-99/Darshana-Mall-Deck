import React from 'react';
import { motion } from 'framer-motion';

const ExecutiveSummary = ({ setCurrentView }) => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden pt-12 pb-12 hide-scrollbar">
      
      {/* Floating Print Action - Minimalist style */}
      <div className="fixed top-24 right-12 z-[200] no-print">
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 bg-luxury-gold text-black text-[9px] uppercase tracking-[0.3em] font-bold shadow-2xl hover:bg-white transition-all flex items-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Print Dossier
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-4xl p-10 md:p-14 bg-white text-black rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.5)] mx-6 overflow-hidden"
      >
        {/* Subtle Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <span className="text-[10rem] font-bold uppercase tracking-tighter">DARSHANA</span>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8 border-b border-black/10 pb-6">
            <div>
              <h2 className="text-2xl font-light uppercase tracking-tighter mb-1">Executive <span className="italic font-normal">Summary</span>.</h2>
              <p className="text-[7px] uppercase tracking-widest text-gray-400 font-bold">Document ID: DAR-AI-2026-XPR</p>
            </div>
            <div className="text-right">
              <span className="text-[8px] font-bold uppercase tracking-widest bg-black text-white px-2 py-0.5">Confidential</span>
              <p className="text-[8px] font-light mt-1">Authorized Investor Copy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-4 border-r border-black/5 pr-6">
              <div className="space-y-1">
                <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Strategy & Synergy</p>
                <p className="text-[10px] leading-relaxed font-medium">Darshana integrates predictive behavioral AI with luxury spatial design to maximize HNI engagement and operational performance.</p>
              </div>
              <div className="pt-2">
                <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-gray-400">Projected Yield</p>
                <p className="text-3xl font-light tracking-tighter">14.8% <span className="text-[8px] uppercase font-bold text-gray-400 tracking-widest ml-1">CAGR (EST.)</span></p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Spatial Allocation</p>
                <p className="text-[10px] leading-relaxed font-medium">Premium positioning within 'The Avenue' ensures seamless proximity to tier-1 anchors and elite demographic flow.</p>
              </div>
              <div className="pt-2 border-l-2 border-black pl-4 bg-gray-50/50 p-3">
                <p className="text-[7px] uppercase tracking-[0.3em] font-bold text-gray-400">AI Verification</p>
                <p className="text-[9px] font-bold uppercase italic tracking-widest">Status: Board Certified</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end pt-8 border-t border-black/10">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-widest font-bold">Darshana Executive Hub</p>
              <div className="w-20 h-[1px] bg-black/30"></div>
              <p className="text-[7px] italic text-gray-400">Digital Signature Verified</p>
            </div>
            <div className="text-right">
              <p className="text-[7px] text-gray-400 uppercase tracking-widest font-bold">Generated via AI-Core 2026</p>
            </div>
          </div>
        </div>
      </motion.div>

      <button 
        onClick={() => setCurrentView('dashboard')}
        className="mt-12 text-luxury-gold uppercase text-[9px] tracking-[0.5em] hover:text-white transition-all no-print border-b border-luxury-gold/20 pb-1"
      >
        [ Return to Dashboard Hub ]
      </button>
    </div>
  );
};

export default ExecutiveSummary;
