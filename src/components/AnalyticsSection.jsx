import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';

const AnalyticsSection = () => {
  const { analytics } = contentData;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020202] px-6 md:px-24 pt-32">
      <div className="max-w-7xl w-full">
        {/* Slide Header */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-16"
        >
          <div className="flex items-center gap-6 mb-4">
             <p className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold">06 / Intelligence</p>
             <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter leading-none">
            Data-Driven <span className="text-luxury-gold italic">Success</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-between py-4"
          >
            <p className="text-xl text-gray-400 font-light mb-12 max-w-md leading-relaxed">
              {analytics.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {analytics.metrics.map((metric, i) => (
                <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4">{metric.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-light text-white leading-none">{metric.value}</h3>
                    <span className="text-[10px] text-emerald-400 font-bold">{metric.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-[#050505] border border-white/5 p-10 md:p-14 relative"
          >
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">Consumer Segments</h3>
              <div className="flex gap-1.5 indicator-dots">
                <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
              </div>
            </div>

            <div className="space-y-10">
              {analytics.demographics.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">
                    <span>{item.segment}</span>
                    <span className="text-white">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                      className="h-full bg-luxury-gold"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
