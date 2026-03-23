import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 dark:bg-primary bg-white border-t border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="https://i.postimg.cc/pX6QHbph/davric-group-logo.png" 
                alt="Dav-Ric Homes Logo" 
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm dark:text-white/60 text-primary/60 leading-relaxed mb-8">
              Redefining spaces for memorable interactions and crafting quality homes for quality family moments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center dark:text-white text-primary hover:bg-accent hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center dark:text-white text-primary hover:bg-accent hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center dark:text-white text-primary hover:bg-accent hover:border-accent transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest dark:text-white text-primary mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-sm dark:text-white/60 text-primary/60 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-sm dark:text-white/60 text-primary/60 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm dark:text-white/60 text-primary/60 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#" className="text-sm dark:text-white/60 text-primary/60 hover:text-accent transition-colors">Media</a></li>
              <li><a href="#" className="text-sm dark:text-white/60 text-primary/60 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest dark:text-white text-primary mb-8">Nigeria Office</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm dark:text-white/60 text-primary/60">26a, Block 27, Alaafin Avenue, Oluyole, Ibadan, Nigeria</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm dark:text-white/60 text-primary/60">+234 800 000 0000</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest dark:text-white text-primary mb-8">Canada Office</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-sm dark:text-white/60 text-primary/60">305 King Street West Suite, Kitchener, Ontario, N2G 1B9, Canada</span>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm dark:text-white/60 text-primary/60">+1 437 775 2860</span>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm dark:text-white/60 text-primary/60">info@davrichomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs dark:text-white/40 text-primary/40">
            © 2026 Dav-Ric Homes. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs dark:text-white/40 text-primary/40 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs dark:text-white/40 text-primary/40 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
