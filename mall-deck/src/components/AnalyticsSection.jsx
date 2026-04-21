import React from 'react';
import { motion } from 'framer-motion';
import contentData from '../data/content.json';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const AnalyticsSection = () => {
  const { analytics } = contentData;

  return (
    <section id="analytics" className="w-full py-32 bg-[#020202] text-white px-4 md:px-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-luxury-gold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <BarChart3 size={16} /> Data-Driven Decisions
            </h4>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              {analytics.title}
            </h2>
            <p className="text-lg text-gray-400 font-light mb-12 max-w-lg">
              {analytics.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {analytics.metrics.map((metric, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{metric.label}</p>
                  <h3 className="text-3xl font-light text-white mb-1">{metric.value}</h3>
                  <span className="text-emerald-400 text-xs font-medium flex items-center gap-1">
                    <TrendingUp size={12} /> {metric.growth}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-[#050505] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative"
          >
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-gray-400">Demographic Insights</h3>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-luxury-gold"></div>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>

            <div className="space-y-8">
              {analytics.demographics.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-xs tracking-widest uppercase text-gray-500">
                    <span>{item.segment}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                      className="h-full bg-luxury-gold"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Insight */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-gray-500 italic font-light text-sm">
              <Users size={18} className="text-luxury-gold" />
              "Reach the highest-spending demographic in the tri-state area."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
