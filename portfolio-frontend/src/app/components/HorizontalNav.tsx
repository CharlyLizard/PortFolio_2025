"use client";

import { useState, useEffect } from 'react';
import { 
  HiHome, 
  HiUser, 
  HiLightningBolt, 
  HiBriefcase, 
  HiCog, 
  HiMail 
} from 'react-icons/hi';

const sections = [
  { id: 'hero', name: 'Inicio', icon: HiHome },
  { id: 'about', name: 'Sobre mí', icon: HiUser },
  { id: 'projects', name: 'Proyectos', icon: HiLightningBolt },
  { id: 'experience', name: 'Experiencia', icon: HiBriefcase },
  { id: 'skills', name: 'Skills', icon: HiCog },
  { id: 'contact', name: 'Contacto', icon: HiMail }
];

export default function HorizontalNav() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    const container = document.getElementById('sections-container');
    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
    setCurrentSection(index);
  };

  // Detectar automáticamente la sección activa
  useEffect(() => {
    const container = document.getElementById('sections-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newIndex = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 shadow-2xl px-3 py-2">
      <div className="flex items-center gap-1">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                currentSection === index
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <IconComponent className="text-base" />
              <span className={`text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                currentSection === index ? 'opacity-100 w-20' : 'opacity-0 w-0 overflow-hidden'
              }`}>
                {section.name}
              </span>
            </button>
          );
        })}
      </div>
      
      
    </nav>
  );
}