import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Navbar component provides non-linear navigation requested in the assignment
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Change nav background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'Retail', href: '#retail' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl tracking-widest uppercase font-bold text-luxury-gold drop-shadow-sm">
          Darshana
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-gray-300 hover:text-luxury-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <button className="md:hidden text-white uppercase text-xs tracking-widest">
          Menu
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
