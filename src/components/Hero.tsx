import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects, onContactUs }) => {
  const slides = [
    {
      title: "Every New Project Makes the Earth a Better Place.",
      image: "https://i.postimg.cc/zfs7Cmny/Davric-Homes-1.jpg"
    },
    {
      title: "Crafting Quality Homes for Quality Family Moments.",
      image: "https://i.postimg.cc/rm5JghJK/Davric-Homes-2.jpg"
    },
    {
      title: "Redefining Spaces for Memorable Interactions.",
      image: "https://i.postimg.cc/yd0PnfPj/Davric-Homes-3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl text-white font-serif leading-tight mb-8">
            {slides[currentSlide].title}
          </h1>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onViewProjects}
              className="bg-accent text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-accent/80 transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onContactUs}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all ${currentSlide === index ? 'bg-accent' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};
