import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, Download, MapPin } from 'lucide-react';

const HeroSection = ({ t, onScrollToSection, cvUrl, cvFileName, iaImage, redesImage }) => {
  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={redesImage}
          alt="Neural Network Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t('hero.name')}
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onScrollToSection('contacto')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                {t('hero.contact_button')}
              </motion.button>
              <a href={cvUrl} download={cvFileName}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {t('hero.download_button')}
                </motion.button>
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t('hero.location')}
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {t('hero.company')}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <img
                src={iaImage}
                alt="AI Technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
