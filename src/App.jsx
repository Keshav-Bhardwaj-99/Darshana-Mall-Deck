import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import AboutSection from './components/AboutSection';
import AttractionsSection from './components/AttractionsSection';
import RetailSection from './components/RetailSection';
import EventsSection from './components/EventsSection';
import AnalyticsSection from './components/AnalyticsSection';
import InteractiveMap from './components/InteractiveMap';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AudioAmbience from './components/AudioAmbience';
import { motion, AnimatePresence } from 'framer-motion';

// This is the main App component that handles rendering the sections.
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Ensure the page always starts at the top on refresh
  useEffect(() => {
    if (!isLoading) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen bg-luxury-dark text-white font-sans overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <CustomCursor />
            <Navbar />
            <div id="hero"><HeroVideo /></div>
            <div id="about"><AboutSection /></div>
            <div id="attractions"><AttractionsSection /></div>
            <div id="retail"><RetailSection /></div>
            <div id="events"><EventsSection /></div>
            <div id="analytics"><AnalyticsSection /></div>
            
            <Footer />
            <AudioAmbience />
            <InteractiveMap />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
