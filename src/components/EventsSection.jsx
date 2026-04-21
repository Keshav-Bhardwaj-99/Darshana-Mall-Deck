import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import contentData from '../data/content.json';
import InquiryModal from './InquiryModal';

const VenueCard = ({ venue, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay blocked or video not ready"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative cursor-pointer overflow-hidden bg-black h-full border border-white/5"
    >
      <img 
        src={venue.image} 
        alt={venue.name} 
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-60'}`}
      />

      <video
        ref={videoRef}
        src={venue.videoUrl}
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-50' : 'opacity-0'}`}
      />

      <div className="absolute inset-x-0 bottom-0 p-8 z-20 pointer-events-none">
        <div style={{ transform: "translateZ(30px)" }}>
           <h3 className="text-2xl font-light tracking-wide text-white uppercase">{venue.name}</h3>
           <p className="text-luxury-gold uppercase tracking-[0.2em] text-[10px] font-bold mt-2">Capacity: {venue.capacity}</p>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`absolute top-8 right-8 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        {venue.techSpecs && venue.techSpecs.map((spec, i) => (
          <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-luxury-gold">
            {spec}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-luxury-dark px-6 md:px-24 pt-32">
      <div className="max-w-7xl w-full">
        {/* Slide Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10 text-center"
        >
          <p className="text-luxury-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4">05 / Venues</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white uppercase leading-none">
            Unrivaled <span className="text-luxury-gold italic">Capacity</span>.
          </h2>
          <p className="text-gray-400 font-light mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            {contentData.events.description}
          </p>
        </motion.div>

        {/* Venues Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[40vh] md:h-[50vh]">
          {contentData.events.venues.map((venue, index) => (
            <VenueCard key={index} venue={venue} index={index} />
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-12 flex justify-center"
        >
           <button 
             onClick={() => setIsModalOpen(true)}
             className="px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-black transition-all duration-300"
           >
             Book Venue
           </button>
        </motion.div>
      </div>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        contextTitle="Event Booking"
      />
    </div>
  );
};

export default EventsSection;
