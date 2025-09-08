import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card } from '../ui/card';

export const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass hover:shadow-glow transition-all duration-300 p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Building className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Data Scientist</h3>
                  <p className="text-lg text-primary font-medium">Sri Annapurna Pvt Ltd</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Apr 2020 – May 2023</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Forecasted product demand using Python (Prophet, ARIMA), cutting stockouts by <span className="text-accent font-semibold">30%</span> and overstock by <span className="text-accent font-semibold">15%</span>.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Designed Power BI dashboards and Python reports for real-time sales and inventory insights.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Deployed anomaly detection models (Scikit-learn) to reduce reporting delays by <span className="text-accent font-semibold">40%</span>.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Automated ETL pipelines in Python & SQL, reducing manual work by <span className="text-accent font-semibold">20%</span>.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  Migrated multi-source data into AWS Redshift and Glue for scalable analytics.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};