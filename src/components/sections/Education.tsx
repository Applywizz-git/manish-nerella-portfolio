import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { Card } from '../ui/card';

export const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Science",
      institution: "University of Bridgeport",
      location: "Bridgeport, CT",
      period: "Sep 2023 – May 2025",
      status: "completed"
    },
    {
      degree: "Bachelors in Computer Science & Engineering",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "Jun 2018 – Jul 2022",
      status: "Completed"
    }
  ];

  // const certifications = [
  //   "Google Data Analytics Professional Certificate – Coursera",
  //   "IBM Data Science Professional Certificate – Coursera",
  //   "Data Engineering Foundations – LinkedIn Learning",
  //   "SQL for Data Science – Coursera"
  // ];

  return (
    <section id="education" className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Education </h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass hover:shadow-glow transition-all duration-300 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                        edu.status === 'completed' 
                          ? 'bg-primary/10 text-primary border border-primary/20' 
                          : 'bg-accent/10 text-accent border border-accent/20'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
{/* 
          Certifications - Moved to separate section, keeping basic info
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Recent Certifications
            </h3>
            <Card className="glass hover:shadow-glow transition-all duration-300 p-6">
              <div className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Professional certifications available in dedicated section
                </p>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View All Certifications
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};