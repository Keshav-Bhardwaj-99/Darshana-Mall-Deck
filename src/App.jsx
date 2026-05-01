import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AboutSection from './components/AboutSection';
import AttractionsSection from './components/AttractionsSection';
import RetailSection from './components/RetailSection';
import GlobalFootfallGlobe from './components/GlobalFootfallGlobe';
import RoadmapSection from './components/RoadmapSection';
import VenueExplorer from './components/VenueExplorer';
import LeasingPaths from './components/LeasingPaths';
import AttractionsCarousel from './components/AttractionsCarousel';
import InteractiveMasterplan from './components/InteractiveMasterplan';
import ROICalculator from './components/ROICalculator';
import GlobalModal from './components/GlobalModal';
import BrandMatchmaker from './components/BrandMatchmaker';
import PanoramaViewer from './components/PanoramaViewer';
import ExecutiveSummary from './components/ExecutiveSummary';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import AudioAmbience from './components/AudioAmbience';
import OdysseyPage from './components/OdysseyPage';
import Atmosphere from './components/Atmosphere';
import MarketTicker from './components/MarketTicker';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      if (!isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const playSfx = (type = 'click') => {
    if (isMuted) return;
    const clickSfx = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-3124.mp3');
    const hoverSfx = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-light-swoosh-passing-633.mp3');
    
    const sfx = type === 'click' ? clickSfx : hoverSfx;
    sfx.volume = type === 'click' ? 0.3 : 0.1;
    sfx.play().catch(() => {});
  };
  useEffect(() => {
    if (!isLoading) {
      window.history.scrollRestoration = 'manual';
    }
  }, [isLoading]);

  // View Router
  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard setCurrentView={setCurrentView} setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'about':
        return <AboutSection setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'attractions':
        return <AttractionsSection setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'retail':
        return <RetailSection setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'venues':
        return <VenueExplorer setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'leasing':
        return <LeasingPaths setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'carousel':
        return <AttractionsCarousel setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'masterplan':
        return <InteractiveMasterplan setModalOpen={setModalOpen} playSfx={playSfx} />;
      case 'roi':
        return <ROICalculator setModalOpen={setModalOpen} playSfx={playSfx} setCurrentView={setCurrentView} />;
      case 'intelligence':
        return <GlobalFootfallGlobe setCurrentView={setCurrentView} />;
      case 'roadmap':
        return <RoadmapSection setCurrentView={setCurrentView} />;
      case 'matchmaker':
        return <BrandMatchmaker setCurrentView={setCurrentView} />;
      case 'panorama':
        return <PanoramaViewer setCurrentView={setCurrentView} />;
      case 'summary':
        return <ExecutiveSummary setCurrentView={setCurrentView} />;
      case 'odyssey':
        return <OdysseyPage setModalOpen={setModalOpen} playSfx={playSfx} setCurrentView={setCurrentView} />;
      default:
        return <Dashboard setCurrentView={setCurrentView} setModalOpen={setModalOpen} playSfx={playSfx} />;
    }
  };

  return (
    <div className="w-full h-screen bg-luxury-dark text-white transition-colors duration-1000 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-screen relative"
          >
            <CustomCursor />
            <Navbar 
              currentView={currentView} 
              setCurrentView={setCurrentView} 
              isMuted={isMuted} 
              setIsMuted={setIsMuted} 
              playSfx={playSfx}
            />
            
            <audio 
              ref={audioRef} 
              src="/assets/luxury_ambience.mp3" 
              loop 
            />
            
            {/* Cinematic Module Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full overflow-y-auto"
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>

            <GlobalModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            <AudioAmbience />
            <Atmosphere />
            <CustomCursor />
            <MarketTicker />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
