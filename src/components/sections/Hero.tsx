import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import heroBg from '../../assets/hero-bg.jpg';
import profilePic from '../../assets/profile-pic.jpg';

export const Hero = () => {
  const skills = ["Python", "SQL", "Machine Learning", "Cloud"];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0
            }}
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Content container (constrained + vertically centered) */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Use a responsive grid to “fit” both sides cleanly */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Area (Left on desktop) */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Header Info */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                Manish Nerella
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Data Scientist
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                Bridgeport, CT • nerellam19@gmail.com • +1 (203) 414-4229
              </p>
            </div>

            {/* Typewriter Headline */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Building Scalable Data Solutions with{" "}
                <span className="text-gradient">
                  <TypewriterText words={skills} />
                </span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Results-driven Data Scientist with 3+ years of experience in ML, data engineering,
                and predictive analytics—deploying cloud-native solutions that drive measurable business impact.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Projects
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/manish-resume.pdf" target="_blank" rel="noreferrer">
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile (Right on desktop) */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-pulse">
                <img
                  src={profilePic}
                  alt="Manish Nerella - Data Scientist"
                  className="w-full h-full rounded-full object-cover border-2 border-background"
                />
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/30"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
