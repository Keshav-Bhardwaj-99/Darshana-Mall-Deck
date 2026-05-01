import React from 'react';
import { motion } from 'framer-motion';

const tickerData = [
  { label: "MARKET SENTIMENT", value: "98.4%", color: "text-green-400" },
  { label: "RETAIL INTEREST", value: "HIGH", color: "text-luxury-gold" },
  { label: "PROJECTED FOOTFALL", value: "4.2M/YR", color: "text-white" },
  { label: "SPATIAL EFFICIENCY", value: "92.1%", color: "text-blue-400" },
  { label: "GLOBAL PRESTIGE INDEX", value: "A+", color: "text-purple-400" },
  { label: "INVESTOR CONFIDENCE", value: "96.8%", color: "text-green-400" },
];

const MarketTicker = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-10 bg-black/80 backdrop-blur-md border-t border-white/5 z-[200] flex items-center overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center whitespace-nowrap px-10"
      >
        {[...tickerData, ...tickerData].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">{item.label}</span>
            <span className={`text-[10px] font-bold tracking-widest ${item.color}`}>{item.value}</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarketTicker;
