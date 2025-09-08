import { motion } from 'framer-motion';
import { AnimatedCounter } from '../AnimatedCounter';
import { Linkedin, Mail } from 'lucide-react';
export const About = () => {
  return (
    <section id="about" className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Data Scientist with proven expertise in machine learning, deep learning, and cloud analytics. 
              Over the past 3+ years, I've developed predictive models, automated pipelines, and data visualization 
              platforms that improved forecasting accuracy, reduced risks, and optimized operations across industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in Python, SQL, TensorFlow, and cloud platforms (AWS, Azure, GCP), I thrive on transforming 
              large, unstructured datasets into actionable insights. My mission is to deliver intelligent, scalable, 
              and efficient solutions that empower businesses to make better decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <AnimatedCounter end={10} label="Projects Completed" suffix="+" />
            <AnimatedCounter end={3} label="Years Experience" suffix="+" />
            <AnimatedCounter end={100} label="On-time Delivery" suffix="%" />
            <AnimatedCounter end={91} label="Best Model Accuracy" suffix="%" />
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6">
             <a
  href="https://linkedin.com/in/nerellamanish"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-transform duration-300 transform hover:scale-90"
  aria-label="LinkedIn"
>
  <Linkedin className="w-8 h-8" />
</a>

{/* Email */}
<a
  href="mailto:nerellam19@gmail.com"
  className="text-muted-foreground hover:text-primary transition-transform duration-300 transform hover:scale-90"
  aria-label="Email"
>
  <Mail className="w-8 h-8" />
</a>

            {/* <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};