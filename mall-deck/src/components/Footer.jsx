import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-luxury-gold uppercase mb-6">
              Darshana
            </h2>
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Redefining the global standard for retail, entertainment, and luxury experiences in the heart of Northern New Jersey.
            </p>
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-luxury-gold transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-luxury-gold transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-luxury-gold transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-luxury-gold transition-colors"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">Discover</h4>
            <a href="#about" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">About the Mall</a>
            <a href="#attractions" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Major Attractions</a>
            <a href="#retail" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Luxury Brands</a>
            <a href="#events" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Events & Venues</a>
          </div>

          {/* Business Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">Partnership</h4>
            <a href="#retail" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Retail Leasing</a>
            <a href="#events" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Venue Booking</a>
            <a href="#analytics" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Tenant Analytics</a>
            <a href="#" className="text-gray-500 hover:text-luxury-gold text-sm transition-colors font-light">Investor Relations</a>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">Visit Us</h4>
            <div className="flex gap-3 text-gray-500 text-sm font-light">
              <MapPin size={18} className="text-luxury-gold shrink-0" />
              <span>1 American Dream Way,<br />East Rutherford, NJ 07073</span>
            </div>
            <div className="flex gap-3 text-gray-500 text-sm font-light">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <span>+1 (833) 263-7326</span>
            </div>
            <div className="flex gap-3 text-gray-500 text-sm font-light">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>leasing@darshana.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 DARSHANA MALLS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
