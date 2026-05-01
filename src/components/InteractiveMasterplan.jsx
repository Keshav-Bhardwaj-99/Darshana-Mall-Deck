import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

const hotspots = [
  { 
    id: 1, 
    name: "The Avenue (Luxury Wing)", 
    x: "30%", y: "40%", 
    data: "Avg Spend: $450 | Available Slots: 2",
    image: "/assets/luxury_avenue_ai.png",
    description: "The crown jewel of Darshana. Housing the world's most prestigious brands in an environment of unparalleled elegance."
  },
  { 
    id: 2, 
    name: "Dream Stage", 
    x: "60%", y: "30%", 
    data: "Capacity: 5000 | Events/Yr: 120",
    image: "/assets/concert_stage_ai.png",
    description: "A state-of-the-art multi-purpose venue designed for world-class performances, cinematic premieres, and global summits."
  },
  { 
    id: 3, 
    name: "Cyber Food Hall", 
    x: "75%", y: "65%", 
    data: "Daily Visitors: 25k | Cuisines: 45+",
    image: "/assets/food_hall_ai.png",
    description: "A futuristic culinary destination blending global flavors with immersive digital art installations."
  },
  { 
    id: 4, 
    name: "Smart Atrium", 
    x: "45%", y: "70%", 
    data: "Brand Activations | Footfall: 40M/Yr",
    image: "/assets/smart_atrium_ai.png",
    description: "The heart of Darshana. A dynamic space for grand brand launches and interactive technological showcases."
  }
];

const InteractiveMasterplan = ({ setModalOpen, playSfx }) => {
  const containerRef = useRef(null);
  const [activeSpot, setActiveSpot] = useState(null);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isXRayMode, setIsXRayMode] = useState(false);

  const panelX = useMotionValue(0);
  const panelY = useMotionValue(0);
  const panelRotateX = useSpring(useTransform(panelY, [-0.5, 0.5], ["15deg", "-15deg"]));
  const panelRotateY = useSpring(useTransform(panelX, [-0.5, 0.5], ["-15deg", "15deg"]));
  
  // Dynamic shadow offset for depth
  const shadowX = useTransform(panelX, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(panelY, [-0.5, 0.5], [20, -20]);
  
  const dynamicBoxShadow = useTransform(
    [shadowX, shadowY],
    ([x, y]) => `${x}px ${y}px 40px rgba(0,0,0,0.5)`
  );

  const handlePanelMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    panelX.set((e.clientX - rect.left) / rect.width - 0.5);
    panelY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePanelMouseLeave = () => {
    panelX.set(0);
    panelY.set(0);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Rotate the map based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-screen bg-[#020202] flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute top-32 left-12 md:left-24 z-20">
        <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tighter">
          3D <span className="text-luxury-gold italic">Masterplan</span>.
        </h2>
        <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Hover to explore commercial zones</p>
        <div className="mt-4 flex items-center gap-3">
           <span className="px-2 py-1 bg-white/5 border border-white/10 text-white/40 text-[8px] uppercase tracking-[0.3em] rounded-sm font-bold">AI-Assisted Spatial Planning</span>
           <button 
             onClick={() => {
               setIsXRayMode(!isXRayMode);
               playSfx('click');
             }}
             onMouseEnter={() => playSfx('hover')}
             className={`px-3 py-1 border transition-all text-[8px] uppercase tracking-[0.2em] font-bold rounded-sm ${isXRayMode ? 'bg-blue-500/20 border-blue-400 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'border-white/20 text-white/40 hover:border-luxury-gold hover:text-luxury-gold'}`}
           >
             {isXRayMode ? 'X-Ray Active' : 'Enable X-Ray Vision'}
           </button>
        </div>
      </div>

      {/* Layout Wrapper for sliding effect */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center h-full">
        
        {/* 3D Container - Slides left when a spot is selected */}
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ 
            x: selectedSpot ? "-20%" : "0%",
            scale: selectedSpot ? 0.8 : 1
          }}
          style={{ perspective: 1500 }}
          className="w-full h-[70vh] flex items-center justify-center relative z-10 cursor-grab active:cursor-grabbing"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[800px] h-[500px] max-w-full bg-white/[0.02] border border-white/10 rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.05)] backdrop-blur-sm"
          >
            {/* Layer 1: Base Blueprint & Grid */}
            <div className={`absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:40px_40px] transition-all duration-700 ${isXRayMode ? 'bg-blue-900/10 !opacity-40' : ''}`} style={{ transform: "translateZ(0px)" }}></div>
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 500" fill="none" style={{ transform: "translateZ(10px)" }}>
              <path d="M100 250C100 150 200 50 400 50C600 50 700 150 700 250C700 350 600 450 400 450C200 450 100 350 100 250Z" stroke={isXRayMode ? "#3b82f6" : "#D4AF37"} strokeWidth="2" strokeDasharray="10 10" className="transition-all duration-700"/>
            </svg>


            {/* Layer 2: 3D Mall Structure Base */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" style={{ transform: "translateZ(30px)" }}>
              <path d="M250 150L550 150L600 350L200 350L250 150Z" fill={isXRayMode ? "#3b82f6" : "#D4AF37"} fillOpacity={isXRayMode ? "0.05" : "0.1"} stroke={isXRayMode ? "#3b82f6" : "#D4AF37"} strokeWidth="1" className="transition-all duration-700"/>
              <path d="M250 150L250 170L550 170L550 150Z" fill={isXRayMode ? "#3b82f6" : "#D4AF37"} fillOpacity="0.3" className="transition-all duration-700"/>
              <path d="M200 350L200 370L600 370L600 350Z" fill={isXRayMode ? "#3b82f6" : "#D4AF37"} fillOpacity="0.3" className="transition-all duration-700"/>
            </svg>

            {/* Layer 3: Pop-out Attractions */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" style={{ transform: "translateZ(60px)" }}>
              <circle cx="600" cy="150" r="80" fill="black" fillOpacity="0.5" stroke="white" strokeOpacity="0.3" strokeWidth="2"/>
              <circle cx="600" cy="150" r="30" fill="url(#blue-glow)" />
              <rect x="250" y="250" width="100" height="100" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.2"/>
              <defs>
                <radialGradient id="blue-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>

            {/* Layer 4: Floating Roof Elements */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" style={{ transform: "translateZ(90px)" }}>
              <path d="M280 180L520 180L560 320L240 320L280 180Z" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.5" strokeWidth="0.5"/>
              <line x1="280" y1="180" x2="520" y2="320" stroke="white" strokeOpacity="0.2"/>
              <line x1="520" y1="180" x2="240" y2="320" stroke="white" strokeOpacity="0.2"/>
            </svg>

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div 
                key={spot.id}
                className="absolute"
                style={{ top: spot.y, left: spot.x, transform: "translateZ(120px)" }}
                onMouseEnter={() => {
                  setActiveSpot(spot.id);
                  playSfx('hover');
                }}
                onMouseLeave={() => setActiveSpot(null)}
                onClick={() => {
                  setSelectedSpot(spot);
                  playSfx('click');
                }}
              >
                {/* Pulsing Dot */}
                <span className="flex h-4 w-4 relative cursor-pointer group">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold ${selectedSpot?.id === spot.id ? 'opacity-100' : 'opacity-75'}`}></span>
                  <span className={`relative inline-flex rounded-full h-4 w-4 bg-luxury-gold border-2 border-black group-hover:scale-150 transition-transform ${selectedSpot?.id === spot.id ? 'scale-150' : ''}`}></span>
                </span>

                {/* Tooltip Popup (Hidden when selected) */}
                <AnimatePresence>
                  {(activeSpot === spot.id && !selectedSpot) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute top-6 left-1/2 -translate-x-1/2 w-48 bg-black/80 backdrop-blur-md border border-luxury-gold/50 p-4 rounded-sm shadow-2xl pointer-events-none"
                    >
                      <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-2">{spot.name}</h4>
                      <div className="h-[1px] w-full bg-white/20 mb-2"></div>
                      <p className="text-luxury-gold text-[10px] uppercase tracking-widest">{spot.data}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Side Detail Panel */}
        <AnimatePresence>
          {selectedSpot && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onMouseMove={handlePanelMouseMove}
              onMouseLeave={handlePanelMouseLeave}
              className="absolute right-0 w-full md:w-[400px] h-[80vh] bg-black/40 backdrop-blur-xl border-l border-white/10 p-8 z-30 flex flex-col overflow-y-auto shadow-[-50px_0_100px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => {
                  setSelectedSpot(null);
                  playSfx('click');
                }}
                onMouseEnter={() => playSfx('hover')}
                className="self-end text-luxury-gold uppercase text-[10px] tracking-widest hover:text-white transition-colors mb-8"
              >
                [ Close ]
              </button>

              <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden border border-white/10 perspective-1000 shadow-2xl">
                <motion.div 
                  style={{ 
                    rotateX: panelRotateX, 
                    rotateY: panelRotateY,
                    transformStyle: "preserve-3d"
                  }}
                  className="w-full h-full"
                >
                  <motion.img 
                    key={selectedSpot.image}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1.3, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={selectedSpot.image} 
                    alt={selectedSpot.name} 
                    className="w-full h-full object-cover shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
                    style={{ 
                      boxShadow: dynamicBoxShadow
                    }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none"></div>
              </div>

              <h3 className="text-2xl font-light text-white uppercase tracking-widest mb-2">{selectedSpot.name}</h3>
              <p className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-6">{selectedSpot.data}</p>
              
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                {selectedSpot.description}
              </p>

              <div className="mt-auto space-y-4">
                <button 
                  onClick={() => {
                    setModalOpen(true);
                    playSfx('click');
                  }}
                  onMouseEnter={() => playSfx('hover')}
                  className="w-full py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors"
                >
                  Book This Zone
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">ROI Est.</p>
                    <p className="text-white text-lg font-light">12.5%</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Footfall</p>
                    <p className="text-white text-lg font-light">High</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default InteractiveMasterplan;
