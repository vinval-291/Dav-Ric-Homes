import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 dark:bg-primary bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-3xl md:text-5xl font-serif dark:text-white text-primary mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-sm"
              >
                <h3 className="text-xl font-serif dark:text-white text-primary mb-6">Nigeria Office</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="text-accent shrink-0" size={20} />
                    <p className="text-sm dark:text-white/70 text-primary/70">
                      26a, Block 27, Alaafin Avenue, Oluyole, Ibadan, Nigeria
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass p-8 rounded-sm"
              >
                <h3 className="text-xl font-serif dark:text-white text-primary mb-6">Canada Office</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="text-accent shrink-0" size={20} />
                    <p className="text-sm dark:text-white/70 text-primary/70">
                      305 King Street West Suite, Kitchener, Ontario, N2G 1B9, Canada
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-accent shrink-0" size={20} />
                    <p className="text-sm dark:text-white/70 text-primary/70">+1 437 775 2860</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-accent shrink-0" size={20} />
                    <p className="text-sm dark:text-white/70 text-primary/70">info@davrichomes.com</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-sm space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest dark:text-white/70 text-primary/70">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 dark:text-white text-primary focus:border-accent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest dark:text-white/70 text-primary/70">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 dark:text-white text-primary focus:border-accent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest dark:text-white/70 text-primary/70">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 dark:text-white text-primary focus:border-accent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest dark:text-white/70 text-primary/70">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 dark:text-white text-primary focus:border-accent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button className="w-full bg-accent text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-accent/80 transition-all flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-primary/50 dark:text-white/50 font-bold uppercase tracking-widest">Google Maps Integration</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.223594611598!2d-80.4950454234057!3d43.45041006505364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4f329978437%3A0x238053787729864a!2s305%20King%20St%20W%2C%20Kitchener%2C%20ON%20N2G%201B9%2C%20Canada!5e0!3m2!1sen!2sca!4v1711147745678!5m2!1sen!2sca" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(1) opacity(0.4)' }} 
          allowFullScreen 
          loading="lazy"
        />
      </section>
    </div>
  );
};
