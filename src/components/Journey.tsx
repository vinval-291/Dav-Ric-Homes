import React from 'react';
import { motion } from 'motion/react';

export const Journey: React.FC = () => {
  return (
    <section className="py-24 dark:bg-primary bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Our Journey</span>
            <h2 className="text-2xl md:text-5xl font-serif dark:text-white text-primary mb-8 leading-tight">
              Our Journey So Far
            </h2>
            <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed mb-6">
              Dav-Ric Homes began humbly as a team of artisans driven by a shared passion for craftsmanship and attention to detail in home building.
            </p>
            <p className="text-lg dark:text-white/70 text-primary/70 leading-relaxed">
              Over the years, our dedication to professionalism, meticulous workmanship, and transformative designs has propelled us into a trusted leader in residential and mixed-use developments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-1 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img src="https://i.postimg.cc/R06GJCJR/Davric-Homes-8.jpg" alt="Construction" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://i.postimg.cc/cJgTt1tX/Davric-Homes-9.jpg" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <img src="https://i.postimg.cc/hGzMQ4Q2/Davric-Homes-10.jpg" alt="Site" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden">
                <img src="https://i.postimg.cc/tgZDnRn8/Davric-Homes-11.jpg" alt="Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
