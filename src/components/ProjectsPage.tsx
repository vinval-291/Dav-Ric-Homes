import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Building2, Home, CheckCircle2 } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Ontario Mixed-Use Project",
      location: "Ontario, Canada",
      type: "Mixed-use",
      image: "https://i.postimg.cc/pdwCfNK3/Davric-Homes-13.jpg",
      features: ["1 luxury townhouse", "1 modern office space"],
      description: "A pioneering development in Ontario offering a seamless blend of luxury living and professional workspace within a vibrant urban setting."
    },
    {
      title: "Pebble Brook – Jericho Ibadan",
      location: "Jericho, Ibadan, Nigeria",
      type: "Residential Estate",
      image: "https://i.postimg.cc/VNxgqyjy/Davric-Homes-14.jpg",
      features: ["7 Terrace Buildings", "6 Semi-Detached Buildings"],
      description: "A high-end residential community offering modern triplexes with premium finishing in a serene and family-friendly environment in Jericho GRA."
    },
    {
      title: "Rose Vine – Oluyole Ibadan",
      location: "Oluyole, Ibadan, Nigeria",
      type: "Residential Estate",
      image: "https://i.postimg.cc/s2kmYFpd/Davric-Homes-15.jpg",
      features: ["15 Units", "Detached homes with green courtyards", "Semi-detached bungalows"],
      description: "A tranquil residential haven blending luxury living with nature in a lush and serene environment."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 dark:bg-primary bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
            <h1 className="text-3xl md:text-5xl font-serif dark:text-white text-primary mb-4">Exquisite Developments</h1>
            <div className="w-24 h-1 bg-accent" />
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-video overflow-hidden rounded-sm">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-2 text-accent mb-4">
                    <MapPin size={18} />
                    <span className="text-sm font-bold uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h2 className="text-3xl font-serif dark:text-white text-primary mb-6">{project.title}</h2>
                  <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-accent" />
                        <span className="text-sm dark:text-white/80 text-primary/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-accent text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-accent/80 transition-all">
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
