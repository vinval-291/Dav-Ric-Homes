import React from 'react';
import { motion } from 'motion/react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 dark:bg-primary bg-white transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
          <h2 className="text-2xl md:text-5xl font-serif dark:text-white text-primary mb-8 leading-tight">
            A Beacon of Modern Real Estate Development
          </h2>
          <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed mb-6">
            Welcome to Dav-Ric Homes, where we excel in crafting contemporary homes within vibrant communities. 
            Our expertise spans the entire development cycle, ensuring excellence from land acquisition to homeowner care.
          </p>
          <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed">
            This dedication to competence fuels our consistent delivery of outstanding results, setting new benchmarks in the industry.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://i.postimg.cc/DwYBz40b/Davric-Homes-4.jpg" 
              alt="Modern Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 backdrop-blur-xl border border-accent/20 p-8 hidden md:block">
            <span className="text-5xl font-serif font-bold text-accent block mb-2">10+</span>
            <span className="text-xs uppercase tracking-widest font-bold dark:text-white text-primary">Years of Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
