import { motion } from 'framer-motion';
import { SkillChart } from '../SkillChart';

export const Skills = () => {
  const skills = [
    {
      skill: "Programming & Data Engineering",
      percentage: 90,
      technologies: "Python, SQL, PostgreSQL, MongoDB, PySpark"
    },
    {
      skill: "ML & AI",
      percentage: 85,
      technologies: "TensorFlow, PyTorch, Scikit-learn, NLP, LSTM, Deep Learning"
    },
    {
      skill: "Cloud & Big Data",
      percentage: 80,
      technologies: "AWS (S3, Redshift, Glue, EMR), Azure, GCP BigQuery, Spark, Hadoop"
    },
    {
      skill: "Data Visualization",
      percentage: 80,
      technologies: "Power BI, Tableau, Matplotlib, Seaborn, Plotly"
    },
    {
      skill: "DevOps & Automation",
      percentage: 75,
      technologies: "Docker, Kubernetes, Git, Airflow, Prefect, CI/CD"
    }
  ];

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full data science and engineering stack, 
            from data collection to model deployment and monitoring.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.skill}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillChart {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};