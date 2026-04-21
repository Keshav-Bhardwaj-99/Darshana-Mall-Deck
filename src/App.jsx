import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import AboutSection from './components/AboutSection';
import AttractionsSection from './components/AttractionsSection';
import RetailSection from './components/RetailSection';
import EventsSection from './components/EventsSection';
import SustainabilitySection from './components/SustainabilitySection';
import RoadmapSection from './components/RoadmapSection';
import AnalyticsSection from './components/AnalyticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AudioAmbience from './components/AudioAmbience';
import DeckNavigation from './components/DeckNavigation';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { id: 'hero', label: 'Intro' },
    { id: 'about', label: 'Mission' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'retail', label: 'Brands' },
    { id: 'events', label: 'Venues' },
    { id: 'sustainability', label: 'Impact' },
    { id: 'roadmap', label: 'Vision' },
    { id: 'analytics', label: 'Intelligence' },
    { id: 'testimonials', label: 'Trust' },
    { id: 'footer', label: 'Contact' }
  ];

  const handleScroll = (e) => {
    const scrollPos = e.currentTarget.scrollTop;
    const height = window.innerHeight;
    const index = Math.round(scrollPos / height);
    if (index !== activeSlide && index < slides.length) setActiveSlide(index);
  };

  useEffect(() => {
    if (!isLoading) {
      window.history.scrollRestoration = 'manual';
    }
  }, [isLoading]);

  return (
    <div className="w-full h-screen bg-luxury-dark text-white font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-deck"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
            onScroll={handleScroll}
          >
            <CustomCursor />
            <Navbar activeSlide={activeSlide} totalSlides={slides.length} />
            <DeckNavigation slides={slides} activeSlide={activeSlide} />
            
            <section id="hero" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <HeroVideo />
            </section>
            
            <section id="about" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <AboutSection />
            </section>
            
            <section id="attractions" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <AttractionsSection />
            </section>
            
            <section id="retail" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <RetailSection />
            </section>
            
            <section id="events" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <EventsSection />
            </section>

            <section id="sustainability" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <SustainabilitySection />
            </section>

            <section id="roadmap" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <RoadmapSection />
            </section>
            
            <section id="analytics" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <AnalyticsSection />
            </section>

            <section id="testimonials" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden">
              <TestimonialsSection />
            </section>
            
            <section id="footer" className="w-full h-screen snap-start flex-shrink-0 relative overflow-hidden bg-[#050505]">
              <Footer />
            </section>
            
            <AudioAmbience />
            <InteractiveMap />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
