import { Navigation } from '../components/Navigation';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Certifications } from '../components/sections/Certifications';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';
import { LoadingScreen } from '../components/LoadingScreen';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadImage = (src: string) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.src = src;
      });
    };

    // Preload hero background and profile pic
    Promise.all([
      // Add your image preloading here if needed
    ]).then(() => {
      // Minimum loading time for smooth experience
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;