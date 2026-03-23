import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Users, Star, Lightbulb, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    { name: 'Focus on Detail', icon: <Target size={32} /> },
    { name: 'Partnership', icon: <Users size={32} /> },
    { name: 'Excellence', icon: <Award size={32} /> },
    { name: 'Safety', icon: <ShieldCheck size={32} /> },
    { name: 'Innovation', icon: <Lightbulb size={32} /> },
    { name: 'Competence', icon: <Zap size={32} /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://i.postimg.cc/YS5R6cQy/Davric-Homes-12.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-4"
          >
            Who We Are
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 dark:bg-primary bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif dark:text-white text-primary mb-8">Our Story</h2>
              <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed mb-6">
                Dav-Ric Homes began humbly as a team of artisans driven by a shared passion for craftsmanship and attention to detail in home building.
              </p>
              <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed">
                Over the years, our dedication to professionalism, meticulous workmanship, and transformative designs has propelled us into a trusted leader in residential and mixed-use developments.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif dark:text-white text-primary mb-8">Our Commitment</h2>
              <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed mb-6">
                We handle every stage of development — from land acquisition and marketing to construction and homeowner care — ensuring quality, safety, and client satisfaction.
              </p>
              <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed">
                Dav-Ric Homes is a real estate development company committed to delivering modern homes and mixed-use properties in thriving communities.
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-sm"
            >
              <Eye className="text-accent mb-6" size={48} />
              <h3 className="text-2xl font-serif dark:text-white text-primary mb-4">Our Vision</h3>
              <p className="dark:text-white/70 text-primary/70 leading-relaxed">
                To be the first and preferred choice for ensuring a legacy of timeless beauty and durability in homes and spaces.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-sm"
            >
              <Target className="text-accent mb-6" size={48} />
              <h3 className="text-2xl font-serif dark:text-white text-primary mb-4">Our Mission</h3>
              <p className="dark:text-white/70 text-primary/70 leading-relaxed">
                We enrich lives by crafting exceptional homes and living spaces that provide comfort, style, and quality while exceeding expectations.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif dark:text-white text-primary mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-sm text-center flex flex-col items-center gap-4 group hover:bg-accent/10 transition-all"
              >
                <div className="text-accent group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest dark:text-white text-primary">
                  {value.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
