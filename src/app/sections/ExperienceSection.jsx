// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = ({ experiences, t }) => {
  return (
    <section id="experiencia" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('experience.subtitle')}</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.company}</h3>
                  <h4 className="text-xl font-semibold mb-2">{exp.position}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
