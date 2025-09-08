import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/nerellamanish',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:nerellam19@gmail.com',
      icon: Mail,
    },
    // {
    //   name: 'GitHub',
    //   href: '#',
    //   icon: Github,
    // },
  ];

  return (
    <footer className="py-12 border-t border-border/20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Manish Nerella —{' '}
              <span className="text-gradient animate-pulse">
                Transforming Data into Intelligence
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.2, rotateZ: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};