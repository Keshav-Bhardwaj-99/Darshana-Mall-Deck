import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import contentData from '../data/content.json';
import InquiryModal from './InquiryModal';

const VenueCard = ({ venue, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  
  // 3D Tilt logic using Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse position into rotation values
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
    
    // Normalize position from -0.5 to 0.5
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer overflow-hidden bg-black aspect-video rounded-sm shadow-2xl transition-all duration-300 ease-out"
    >
      {/* Background Image (Static) */}
      <img 
        src={venue.image} 
        alt={venue.name} 
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-60'}`}
      />

      {/* Hover Video Loop */}
      <video
        ref={videoRef}
        src={venue.videoUrl}
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-50' : 'opacity-0'}`}
      />

      {/* Luxury Inner Border */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-luxury-gold/50 m-4 transition-colors duration-500 rounded-sm pointer-events-none"></div>
      
      {/* Glassmorphic Tech Specs Overlay */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`absolute top-10 right-10 flex flex-col gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        {venue.techSpecs && venue.techSpecs.map((spec, i) => (
          <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest text-luxury-gold">
            {spec}
          </span>
        ))}
      </div>

      <div 
        style={{ transform: "translateZ(80px)" }}
        className="absolute inset-0 flex flex-col justify-end p-10"
      >
        <div className="flex items-center gap-2 mb-2">
          {isHovered && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
          <h3 className="text-3xl font-light tracking-wide">{venue.name}</h3>
        </div>
        <p className="text-luxury-gold uppercase tracking-wider text-xs font-semibold">
          Capacity: {venue.capacity}
        </p>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="events" className="w-full py-32 bg-luxury-dark text-white px-4 md:px-10 border-t border-white/5 relative perspective-1000">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h4 className="text-luxury-gold uppercase tracking-widest text-sm mb-4">{contentData.events.subtitle}</h4>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            {contentData.events.title}
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            {contentData.events.description}
          </p>
        </motion.div>

        {/* Venues Grid with 3D Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {contentData.events.venues.map((venue, index) => (
            <VenueCard key={index} venue={venue} index={index} />
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 bg-white text-black text-sm uppercase tracking-widest hover:bg-luxury-gold transition-colors duration-300 font-medium tracking-[0.2em]"
          >
            Book a Venue
          </button>
        </motion.div>
      </div>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        contextTitle="Event Booking"
      />
    </section>
  );
};

export default EventsSection;
