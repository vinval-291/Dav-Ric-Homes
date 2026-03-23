import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, Home } from 'lucide-react';

export const FeaturedProjects: React.FC<{ onViewAll: () => void }> = ({ onViewAll }) => {
  const projects = [
    {
      title: "Ontario Mixed-Use Project",
      location: "Ontario, Canada",
      type: "Mixed-use",
      image: "https://i.postimg.cc/L80Nsg5z/Davric-Homes-5.jpg",
      description: "A pioneering development offering a seamless blend of luxury living and professional workspace."
    },
    {
      title: "Pebble Brook",
      location: "Jericho, Ibadan",
      type: "Residential Estate",
      image: "https://i.postimg.cc/9fR1wXwP/Davric-Homes-6.jpg",
      description: "High-end residential community offering modern triplexes with premium finishing."
    },
    {
      title: "Rose Vine",
      location: "Oluyole, Ibadan",
      type: "Residential Estate",
      image: "https://i.postimg.cc/LsYvg4g3/Davric-Homes-7.jpg",
      description: "A tranquil residential haven blending luxury living with nature in a lush environment."
    }
  ];

  return (
    <section className="py-24 dark:bg-[#080808] bg-gray-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif dark:text-white text-primary">Featured Projects</h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={onViewAll}
            className="text-accent font-bold uppercase tracking-widest text-sm border-b-2 border-accent pb-1 hover:text-accent/70 hover:border-accent/70 transition-all"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>
              <div className="flex items-center gap-2 text-accent mb-2">
                <MapPin size={14} />
                <span className="text-xs font-bold uppercase tracking-widest">{project.location}</span>
              </div>
              <h3 className="text-2xl font-serif dark:text-white text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm dark:text-white/60 text-primary/60 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
