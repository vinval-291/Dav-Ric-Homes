import React from 'react';
import { motion } from 'motion/react';

export const MediaPage: React.FC = () => {
  const categories = ['All', 'Construction Projects', 'Renovations', 'Assets & Operations'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const galleryItems = [
    { title: 'Toronto High-Rise', category: 'Construction Projects', image: 'https://i.postimg.cc/ZqGH8krz/Davric-Homes-16.jpg' },
    { title: 'Ontario Mixed-Use', category: 'Construction Projects', image: 'https://i.postimg.cc/tgKk30hH/Davric-Homes-17.jpg' },
    { title: 'Modern Renovation', category: 'Renovations', image: 'https://i.postimg.cc/g0CsV9vY/Davric-Homes-18.jpg' },
    { title: 'Kitchen Remodel', category: 'Renovations', image: 'https://i.postimg.cc/zfs7CmnD/Davric-Homes-19.jpg' },
    { title: 'Site Operations', category: 'Assets & Operations', image: 'https://i.postimg.cc/N03D6h1j/Davric-Homes-20.jpg' },
    { title: 'Construction Team', category: 'Assets & Operations', image: 'https://i.postimg.cc/zfs7Cmny/Davric-Homes-1.jpg' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="py-24 dark:bg-primary bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
            <h1 className="text-5xl font-serif dark:text-white text-primary mb-4">Media & Insights</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-accent text-white' 
                    : 'glass dark:text-white text-primary hover:bg-accent/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white font-serif text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
