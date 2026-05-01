import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { id: 'masterplan', title: '3D Masterplan', subtitle: 'Interactive Map', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1 md:row-span-2', bg: 'bg-gradient-to-br from-black to-gray-900', highlight: true },
  { id: 'leasing', title: 'Leasing Paths', subtitle: 'Choose Your Journey', colSpan: 'col-span-1', rowSpan: 'row-span-1', bg: 'bg-[#0a0a0a]' },
  { id: 'venues', title: 'Interactive Venues', subtitle: 'Global Platform', colSpan: 'col-span-1', rowSpan: 'row-span-1', bg: 'bg-gradient-to-tr from-[#1a1500] to-black' },
  { id: 'roi', title: 'ROI Calculator', subtitle: 'Dynamic Projections', colSpan: 'col-span-1 md:col-span-2', rowSpan: 'row-span-1 md:row-span-2', bg: 'bg-[#050505]', highlight: true },
  { id: 'carousel', title: 'Attractions', subtitle: '3D Theme Parks', colSpan: 'col-span-1', rowSpan: 'row-span-1', bg: 'bg-[#0a0a0a]' },
  { id: 'analytics', title: 'Intelligence', subtitle: 'Data & Demographics', colSpan: 'col-span-1', rowSpan: 'row-span-1', bg: 'bg-black' }
];

const Dashboard = ({ setCurrentView, playSfx }) => {
  // Reliable high-quality cinematic background video
  const videoUrl = "https://static.videezy.com/system/resources/previews/000/044/479/original/slow_motion_city_night.mp4";
  const fallbackImg = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center px-8 md:px-24 pt-16"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={fallbackImg}
          className="w-full h-full object-cover opacity-40"
        >
          <source src={videoUrl} type="video/mp4" />
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=bc4c0840c81216a67f0f666f91f744747c327242&profile_id=165" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Compact Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
             <div className="w-8 h-[1px] bg-luxury-gold/50"></div>
             <p className="text-luxury-gold uppercase tracking-[0.4em] text-[10px] font-bold">Sales Portal</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none text-white">
            Interactive <span className="text-luxury-gold italic">Intelligence Hub</span>.
          </h1>
          
          <div className="flex gap-4 mt-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentView('odyssey');
                playSfx('click');
              }}
              onMouseEnter={() => playSfx('hover')}
              className="px-8 py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-all flex items-center gap-3 relative overflow-hidden group shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <motion.div 
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
              <span className="relative z-10">Start The Odyssey</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 group-hover:translate-x-1 transition-transform">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <button 
              onClick={() => { setCurrentView('roadmap'); playSfx('click'); }}
              className="px-6 py-3 border border-white/10 text-white text-[9px] uppercase tracking-[0.3em] font-bold hover:border-luxury-gold transition-all"
            >
              The Roadmap
            </button>
          </div>
        </motion.div>

        {/* Flexible Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-[50vh] md:h-[45vh]">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                if (mod.id === 'masterplan') setCurrentView('masterplan');
                if (mod.id === 'roi') setCurrentView('roi');
                if (mod.id === 'leasing') setCurrentView('matchmaker');
                if (mod.id === 'venues') setCurrentView('panorama');
                if (mod.id === 'carousel') setCurrentView('carousel');
                if (mod.id === 'analytics') setCurrentView('intelligence');
                playSfx('click');
              }}
              onMouseEnter={() => playSfx('hover')}
              className={`${mod.colSpan} ${mod.rowSpan} ${mod.bg} group relative overflow-hidden cursor-pointer border border-white/5 hover:border-luxury-gold/50 transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-luxury-gold font-bold mb-1">{mod.subtitle}</p>
                  <h3 className={`text-xl md:text-2xl font-light text-white leading-tight ${mod.highlight ? 'group-hover:text-luxury-gold transition-colors' : ''}`}>
                    {mod.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-[8px] uppercase tracking-widest text-white/50">Explore Module</span>
                  <div className="w-6 h-[1px] bg-luxury-gold"></div>
                </div>
              </div>

              {/* Decorative Corner Dot */}
              <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${mod.highlight ? 'bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/10'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
