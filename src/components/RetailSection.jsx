import React from 'react';

const RetailSection = ({ setModalOpen }) => {

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#020202] relative overflow-hidden">
      {/* Background abstract element for luxury feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.03] to-transparent skew-x-12 translate-x-32 pointer-events-none"></div>

      <div className="max-w-7xl w-full px-6 md:px-24 z-10 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-4 mb-6">
              <h4 className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold">04 / Curation</h4>
              <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter leading-[0.9]">
                Global <span className="text-luxury-gold italic">Excellence</span>.
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 font-light mb-10 max-w-lg leading-relaxed">
              {contentData.retail.description}
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {contentData.retail.brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="group flex items-center gap-6 border-b border-white/5 pb-4 cursor-default"
                >
                  <span className="text-[10px] text-luxury-gold font-mono opacity-40 group-hover:opacity-100 transition-opacity">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="text-2xl font-light tracking-wide text-white group-hover:text-luxury-gold group-hover:translate-x-2 transition-all duration-500">
                    {brand}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-10 py-4 bg-luxury-gold text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-colors duration-500"
            >
              Leasing Inquiries
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] w-full relative border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Retail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>

        </div>
      </div>


    </div>
  );
};

export default RetailSection;
