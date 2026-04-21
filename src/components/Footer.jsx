import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#050505] px-6 md:px-24 relative overflow-hidden">
      {/* Decorative Branding in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter">Darshana</h2>
      </div>

      <div className="max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">07 / Contact</h2>
              <h3 className="text-4xl md:text-7xl font-light text-white uppercase tracking-tighter leading-[0.9]">
                Let's Build the <span className="text-luxury-gold italic">Impossible</span>.
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <MapPin className="text-luxury-gold" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</p>
                  <p className="text-lg text-white font-light transition-all group-hover:text-luxury-gold">1 American Dream Way, NJ 07073</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <Mail className="text-luxury-gold" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Inquiries</p>
                  <p className="text-lg text-white font-light transition-all group-hover:text-luxury-gold">leasing@darshana.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <Phone className="text-luxury-gold" size={24} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Line</p>
                  <p className="text-lg text-white font-light transition-all group-hover:text-luxury-gold">+1 (833) 263-7326</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center md:items-end justify-center space-y-16"
          >
            <div className="flex flex-col items-center md:items-end gap-6 w-full">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Partnerships</p>
              <a href="mailto:leasing@darshana.com" className="w-full md:w-auto px-12 py-6 bg-white text-black text-[12px] uppercase tracking-[0.4em] font-black flex items-center justify-center gap-4 hover:bg-luxury-gold transition-all duration-500 group">
                Apply for Leasing <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="flex gap-10 text-gray-400">
               {[FaInstagram, FaTwitter, FaFacebook, FaYoutube].map((Icon, i) => (
                 <a key={i} href="#" className="hover:text-luxury-gold transition-colors duration-300">
                   <Icon size={24} />
                 </a>
               ))}
            </div>

            <div className="pt-20 border-t border-white/5 w-full flex flex-col items-center md:items-end gap-4">
               <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
                 © 2026 DARSHANA MALLS. ALL RIGHTS RESERVED.
               </p>
               <div className="flex gap-6 text-[8px] uppercase tracking-[0.2em] text-gray-800">
                 <a href="#" className="hover:text-white transition-colors">Privacy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms</a>
                 <a href="#" className="hover:text-white transition-colors">Sitemap</a>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
