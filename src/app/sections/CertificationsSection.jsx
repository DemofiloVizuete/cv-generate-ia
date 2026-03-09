import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CertificationsSection = ({ certifications, t }) => {
  return (
    <section id="certificaciones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('certifications.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('certifications.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t('certifications.issued')}: {cert.date}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('certifications.id')}: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
