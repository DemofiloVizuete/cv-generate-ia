import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Brain,
  ChevronDown,
  ExternalLink,
  Download
} from 'lucide-react';
import './App.css';

// Importar imágenes
import iaImage from './assets/ia_tecnologia_profesional.png';
import futuroImage from './assets/futuro_ia_minimalista.png';
import redesImage from './assets/redes_neuronales_abstractas.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      company: "Avanade",
      position: "Consultor en Automatización Inteligente, Azure AI Engineer",
      period: "dic. 2022 - actualidad",
      duration: "2 años 8 meses",
      location: "Sevilla, Andalucía, España · En remoto",
      description: "Optimización de procesos empresariales mediante soluciones RPA. Liderazgo de proyectos de transformación digital con Azure AI.",
      skills: ["Dirección de proyectos de TI", "Microsoft Azure", "RPA", "Inteligencia Artificial"]
    },
    {
      company: "Avanade",
      position: "Sr Anls, Solution Dev",
      period: "feb. 2019 - feb. 2023",
      duration: "4 años 1 mes",
      location: "Sevilla y alrededores, España",
      description: "Desarrollo de soluciones y análisis senior con enfoque en automatización inteligente.",
      skills: ["Desarrollo de oportunidades de negocio", "Análisis de soluciones"]
    },
    {
      company: "Indra",
      position: "Analista Sistemas (BPO Endesa) - RPA Technologies",
      period: "mar. 2017 - ene. 2019",
      duration: "1 año 11 meses",
      location: "Sevilla y alrededores, España",
      description: "Cobertura integral de procesos de back office en el sector energético. Análisis y desarrollo de tecnologías RPA.",
      skills: ["RPA Technologies", "Análisis de sistemas", "Sector energético"]
    }
  ];

  const education = [
    {
      institution: "Sevilla",
      degree: "Técnico Especialista Informatica Gestión, Administrativa y Comercial",
      period: "1996 - 2002",
      grade: "Nota: 8",
      description: "Formación Reglada impartida en el I.E.S Punta del Verde de Sevilla."
    },
    {
      institution: "Instituto de Estudios Cajasol",
      degree: "100 Caminos AI Éxito, Master Empresarial",
      period: "2014 - 2014",
      description: "Una de las escuelas de negocio más prestigiosas de Andalucía con 25 años de experiencia."
    }
  ];

  const certifications = [
    {
      name: "Microsoft AI Product Manager",
      issuer: "Microsoft",
      date: "jul. 2025",
      credentialId: "ZDWURP3GQA57"
    },
    {
      name: "Enterprise Product Management Fundamentals",
      issuer: "Microsoft",
      date: "jun. 2025",
      credentialId: "P2SKY4RZ0ZGG"
    }
  ];

  const skills = [
    "Inteligencia Artificial",
    "Microsoft Azure",
    "RPA (Robotic Process Automation)",
    "Automatización Inteligente",
    "Dirección de Proyectos de TI",
    "Desarrollo de Oportunidades de Negocio",
    "Análisis de Sistemas",
    "Transformación Digital",
    "Machine Learning",
    "Azure AI",
    "Power Platform",
    "Python",
    "C#",
    ".NET",
    "SQL Server"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            Demófilo Vizuete
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Experiencia', 'Educación', 'Certificaciones', 'Habilidades', 'Contacto'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase().replace('ó', 'o'))}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
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
                Demófilo Vizuete Diaz
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8">
                Consultor en Inteligencia Artificial
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Más de 20 años de experiencia en el sector tecnológico, especializado en 
                automatización inteligente y soluciones de IA. Experto en transformación 
                digital y optimización de procesos empresariales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contacto')}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Contactar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Descargar CV
                </motion.button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Sevilla, España
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Avanade
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
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

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experiencia Profesional</h2>
            <p className="text-muted-foreground text-lg">
              Más de dos décadas liderando proyectos de transformación digital
            </p>
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
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
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

      {/* Education Section */}
      <section id="educacion" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Educación</h2>
            <p className="text-muted-foreground text-lg">
              Formación académica y especialización profesional
            </p>
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
                    {edu.grade && (
                      <p className="text-sm font-medium text-green-600 mb-2">{edu.grade}</p>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificaciones" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certificaciones</h2>
            <p className="text-muted-foreground text-lg">
              Certificaciones profesionales en tecnologías Microsoft
            </p>
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
                      Expedición: {cert.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground text-lg">
              Tecnologías y competencias especializadas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20 rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-muted-foreground text-lg">
              ¿Interesado en colaborar? ¡Hablemos!
            </p>
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
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">demofilo.vizuete@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Ubicación</h3>
                      <p className="text-muted-foreground">Sevilla, España</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/demofilovizuete/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Demófilo Vizuete Diaz. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

