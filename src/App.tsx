import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPreview } from './components/AboutPreview';
import { Journey } from './components/Journey';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { MediaPage } from './components/MediaPage';
import { ContactPage } from './components/ContactPage';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const { isDark, toggle } = useDarkMode();
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero 
              onViewProjects={() => setCurrentPage('projects')} 
              onContactUs={() => setCurrentPage('contact')} 
            />
            <AboutPreview />
            <Journey />
            <FeaturedProjects onViewAll={() => setCurrentPage('projects')} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AboutPage />
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProjectsPage />
          </motion.div>
        );
      case 'media':
        return (
          <motion.div
            key="media"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MediaPage />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ContactPage />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        isDark={isDark} 
        toggleDark={toggle} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/14377752860"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
        </svg>
      </motion.a>
    </div>
  );
}

