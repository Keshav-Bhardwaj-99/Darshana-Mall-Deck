import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const AudioAmbience = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("User interaction needed for audio"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[80] flex items-center gap-4">
      {/* Audio Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAudio}
        className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:border-luxury-gold transition-colors relative group"
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        
        {/* Animated Sound Bars when playing */}
        {isPlaying && (
          <div className="absolute -top-1 left-1/2 -translateX-1/2 flex items-center gap-[2px]">
            {[1, 2, 3].map(i => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-[2px] bg-luxury-gold"
              ></motion.div>
            ))}
          </div>
        )}

        <span className="absolute right-16 bg-black/80 backdrop-blur-md text-white text-[8px] uppercase tracking-widest px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 uppercase">
          {isPlaying ? 'Mute Ambience' : 'Unmute Experience'}
        </span>
      </motion.button>

      <audio
        ref={audioRef}
        src="/assets/luxury_ambience.mp3"
        loop
      />
    </div>
  );
};

export default AudioAmbience;
