import { useTranslation } from 'react-i18next';
import './App.css';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieSettings from './components/CookieSettings';
import { getCvAsset } from './app/features/cv/download';
import { useThemeMode } from './app/hooks/useThemeMode';
import HeaderSection from './app/sections/HeaderSection';
import HeroSection from './app/sections/HeroSection';
import ExperienceSection from './app/sections/ExperienceSection';
import EducationSection from './app/sections/EducationSection';
import CertificationsSection from './app/sections/CertificationsSection';
import SkillsSection from './app/sections/SkillsSection';
import ContactSection from './app/sections/ContactSection';
import FooterSection from './app/sections/FooterSection';

import iaImage from './assets/ia_tecnologia_profesional.png';
import futuroImage from './assets/futuro_ia_minimalista.png';
import redesImage from './assets/redes_neuronales_abstractas.png';

const App = () => {
  const { darkMode, toggleDarkMode } = useThemeMode();
  const { t, i18n } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = t('experience.jobs', { returnObjects: true }) || [];
  const education = t('education.items', { returnObjects: true }) || [];
  const certificationsData = t('certifications.items', { returnObjects: true });
  const skillsData = t('skills.items', { returnObjects: true });
  const certifications = Array.isArray(certificationsData) ? certificationsData : [];
  const skills = Array.isArray(skillsData) ? skillsData : [];
  const { url: cvUrl, fileName: cvFileName } = getCvAsset(i18n.language);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <HeaderSection
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onScrollToSection={scrollToSection}
        t={t}
      />
      <HeroSection
        t={t}
        onScrollToSection={scrollToSection}
        cvUrl={cvUrl}
        cvFileName={cvFileName}
        iaImage={iaImage}
        redesImage={redesImage}
      />
      <ExperienceSection experiences={experiences} t={t} />
      <EducationSection education={education} t={t} />
      <CertificationsSection certifications={certifications} t={t} />
      <SkillsSection skills={skills} t={t} />
      <ContactSection t={t} futuroImage={futuroImage} />
      <PrivacyPolicy />
      <FooterSection t={t} />
      <CookieBanner />
      <CookieSettings />
    </div>
  );
};

export default App;
