import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export const Certifications = () => {
  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      provider: "Coursera",
      year: "2023",
      description: "Comprehensive program covering data analysis fundamentals, data cleaning, visualization with Tableau, and R programming for statistical analysis.",
      skills: ["Data Analysis", "Tableau", "R Programming", "SQL", "Data Visualization"],
      link: "#"
    },
    {
      title: "IBM Data Science Professional Certificate",
      provider: "Coursera", 
      year: "2023",
      description: "Hands-on training in data science methodology, Python programming, machine learning, and deploying ML models in production environments.",
      skills: ["Python", "Machine Learning", "Data Science", "Jupyter", "GitHub"],
      link: "#"
    },
    {
      title: "Data Engineering Foundations",
      provider: "LinkedIn Learning",
      year: "2022",
      description: "Comprehensive overview of data engineering concepts, ETL pipelines, data warehousing, and big data technologies.",
      skills: ["ETL", "Data Warehousing", "Big Data", "Apache Spark", "Data Pipelines"],
      link: "#"
    },
    {
      title: "SQL for Data Science",
      provider: "Coursera",
      year: "2022", 
      description: "Advanced SQL techniques for data analysis, complex queries, database design, and performance optimization for large datasets.",
      skills: ["Advanced SQL", "Database Design", "Query Optimization", "Data Analysis"],
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Professional Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover:shadow-glow transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {cert.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{cert.title}</CardTitle>
                  <p className="text-primary font-medium">{cert.provider}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity mt-4 p-0 h-auto"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary">
                      View Certificate
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};