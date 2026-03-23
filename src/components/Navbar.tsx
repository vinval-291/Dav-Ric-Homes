import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleDark, currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Media', id: 'media' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          <img 
            src="https://i.postimg.cc/pX6QHbph/davric-group-logo.png" 
            alt="Dav-Ric Homes Logo" 
            className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-accent ${
                currentPage === item.id ? 'text-accent font-bold' : 'dark:text-white/70 text-primary/70'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-white/10 transition-colors dark:text-white text-primary"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="https://wa.me/14377752860" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-2 rounded-sm text-sm uppercase tracking-widest font-bold hover:bg-accent/80 transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full dark:text-white text-primary"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="dark:text-white text-primary"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-lg uppercase tracking-widest text-left ${
                    currentPage === item.id ? 'text-accent font-bold' : 'dark:text-white text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="https://wa.me/14377752860" 
                className="bg-accent text-white px-6 py-4 rounded-sm text-center font-bold uppercase tracking-widest"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
