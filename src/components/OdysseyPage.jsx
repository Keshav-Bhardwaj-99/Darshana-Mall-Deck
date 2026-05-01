import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const odysseySections = [
  {
    id: 'dawn',
    title: 'The Dawn of Luxury',
    subtitle: 'Morning in The Avenue',
    description: 'Start your day where the world\'s finest curators meet. Soft ambient light filters through glass ceilings, illuminating the latest collections from Milan and Paris.',
    image: 'https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '09:00 AM'
  },
  {
    id: 'pulse',
    title: 'The Noon Pulse',
    subtitle: 'Business & Technology',
    description: 'The heart of commerce beats fast. Global leaders gather in the Smart Atrium for product launches that redefine the future of retail.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '01:00 PM'
  },
  {
    id: 'sunset',
    title: 'Golden Hour',
    subtitle: 'Culinary Artistry',
    description: 'As the sun sets, Darshana transforms. Experience a symphony of flavors from Michelin-starred chefs in our glass-walled dining pavilions.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '06:30 PM'
  },
  {
    id: 'neon',
    title: 'Electric Midnight',
    subtitle: 'Entertainment Unbound',
    description: 'When the neon lights take over, the energy is undeniable. Concerts, digital art, and the world\'s most exclusive nightlife destinations.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    time: '11:00 PM'
  }
];

const OdysseySection = ({ section, playSfx, setModalOpen }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 25 });
  const midX = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), { stiffness: 80, damping: 25 });
  const midY = useSpring(useTransform(y, [-0.5, 0.5], [-25, 25]), { stiffness: 80, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen snap-start flex items-center justify-center p-8 md:p-32 perspective-2000 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isImgLoaded ? 0.4 : 0, scale: 1 }}
          transition={{ duration: 1.5 }}
          src={section.image} 
          onLoad={() => setIsImgLoaded(true)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <motion.div 
        style={{ x: midX, y: midY }}
        className="absolute w-[70vw] h-[50vh] border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-[40px] z-[5] pointer-events-none hidden md:block"
      />

      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 w-full max-w-5xl"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-black/30 backdrop-blur-2xl border border-white/10 p-12 md:p-24 rounded-sm shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-visible"
          style={{ transform: "translateZ(100px)" }}
        >
          <div className="flex items-center gap-8 mb-12" style={{ transform: "translateZ(40px)" }}>
            <span className="text-luxury-gold font-bold tracking-[0.8em] text-[11px] uppercase">{section.time}</span>
            <div className="h-[1px] w-24 bg-luxury-gold/40"></div>
            <span className="ml-auto text-[9px] border border-luxury-gold/30 px-3 py-1 text-luxury-gold uppercase tracking-[0.4em] rounded-sm font-bold">AI-Assisted Vision</span>
          </div>

          <div className="mb-14" style={{ transform: "translateZ(150px)" }}>
             <h2 className="text-6xl md:text-9xl font-light text-white uppercase tracking-tighter leading-[0.85]">
                {section.title.split(' ').slice(0, -1).join(' ')}
                <br />
                <span className="text-luxury-gold italic block mt-6 drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]">{section.title.split(' ').pop()}</span>
             </h2>
          </div>

          <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-16 opacity-90" style={{ transform: "translateZ(60px)" }}>
            {section.description}
          </p>

          <button 
            onClick={() => { setModalOpen(true); playSfx('click'); }}
            onMouseEnter={() => playSfx('hover')}
            className="group relative flex items-center gap-10 px-16 py-8 bg-white text-black text-[11px] uppercase tracking-[0.6em] font-bold hover:bg-luxury-gold transition-all duration-700 shadow-2xl overflow-hidden"
            style={{ transform: "translateZ(120px)" }}
          >
            <span className="relative z-10">Experience Space</span>
            <div className="absolute inset-0 bg-luxury-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const OdysseyPage = ({ playSfx, setModalOpen, setCurrentView }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = odysseySections.length;
    let timer = setTimeout(() => setImagesLoaded(true), 6000);

    odysseySections.forEach((section) => {
      const img = new Image();
      img.src = section.image;
      const handleLoad = () => {
        loadedCount++;
        setLoadingProgress((loadedCount / totalImages) * 100);
        if (loadedCount === totalImages) {
          clearTimeout(timer);
          setTimeout(() => setImagesLoaded(true), 1200);
        }
      };
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#020202] overflow-y-auto snap-y snap-mandatory hide-scrollbar relative">
      <AnimatePresence>
        {!imagesLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-8"
          >
             <div className="space-y-4 text-center">
               <h2 className="text-white uppercase tracking-[0.8em] text-[10px] font-bold">Refining Odyssey</h2>
               <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    className="absolute top-0 left-0 h-full bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,1)]"
                  />
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* RIGHT SIDE INDICATORS - IMPROVED VISIBILITY */}
      <div className="fixed right-16 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-20">
        {odysseySections.map((s) => (
          <div key={s.id} className="group relative flex items-center justify-end">
            <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-all text-luxury-gold text-[11px] uppercase tracking-[0.4em] font-bold whitespace-nowrap -translate-x-4 group-hover:translate-x-0">
              {s.time}
            </span>
            <div className="w-[2px] h-20 bg-white/5 rounded-full relative overflow-hidden">
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: false, amount: 0.8 }}
                 className="w-full bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.9)]"
               />
            </div>
          </div>
        ))}
      </div>

      {odysseySections.map((section) => (
        <OdysseySection 
          key={section.id} 
          section={section} 
          playSfx={playSfx} 
          setModalOpen={setModalOpen} 
        />
      ))}

      <section className="h-screen flex flex-col items-center justify-center snap-start bg-black text-center px-8 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 space-y-20"
        >
          <div className="space-y-6">
            <p className="text-luxury-gold uppercase tracking-[1.5em] text-sm font-bold animate-pulse">The Future is Here</p>
            <h2 className="text-7xl md:text-[12rem] font-light text-white uppercase tracking-tighter leading-none">
              Legacy <span className="text-luxury-gold italic">Defined</span>.
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center pt-16">
            <button 
              onClick={() => { setModalOpen(true); playSfx('click'); }}
              className="px-24 py-8 bg-luxury-gold text-black text-xs uppercase tracking-[0.8em] font-bold hover:bg-white transition-all shadow-[0_40px_100px_rgba(212,175,55,0.5)]"
            >
              Secure Packet
            </button>
            <button 
              onClick={() => { setCurrentView('dashboard'); playSfx('click'); }}
              className="px-24 py-8 border border-white/20 text-white text-xs uppercase tracking-[0.8em] font-bold hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Return to Hub
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OdysseyPage;
