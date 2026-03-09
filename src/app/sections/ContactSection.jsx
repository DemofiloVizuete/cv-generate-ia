// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import ProtectedEmail from '../../components/ProtectedEmail';

const ContactSection = ({ t, futuroImage }) => {
  return (
    <section id="contacto" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.email')}</h3>
                    <ProtectedEmail
                      email="personal@demofilo.net"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.location')}</h3>
                    <p className="text-muted-foreground">{t('hero.location')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('contact.linkedin')}</h3>
                    <a
                      href="https://www.linkedin.com/in/demofilovizuete/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline"
                      aria-label="Perfil de LinkedIn de Demófilo Vizuete"
                    >
                      /in/demofilovizuete
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={futuroImage}
                  alt="Future of AI"
                  className="w-full h-48 object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
