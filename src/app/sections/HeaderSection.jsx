import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { navigationItems } from '../constants/navigationItems';
import LanguageToggle from '../../components/LanguageToggle';

const HeaderSection = ({ darkMode, onToggleDarkMode, onScrollToSection, t }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border" role="banner">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          <span aria-label="Nombre completo">Demófilo Vizuete</span>
        </motion.div>

        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onScrollToSection(item.id)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t(`nav.${item.key}`)}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => onScrollToSection('privacy-policy')}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
          >
            {t('privacy.title')}
          </motion.button>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
