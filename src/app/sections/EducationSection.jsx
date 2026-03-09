import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EducationSection = ({ education, t }) => {
  return (
    <section id="educacion" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('education.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('education.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.institution}</h3>
                  <h4 className="font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
                  {edu.grade && <p className="text-sm font-medium text-green-600 mb-2">{edu.grade}</p>}
                  <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
