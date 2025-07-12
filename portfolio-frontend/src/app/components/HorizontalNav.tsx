"use client";

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', name: 'Inicio', icon: '🏠' },
  { id: 'about', name: 'Sobre mí', icon: '👨‍💻' },
  { id: 'projects', name: 'Proyectos', icon: '🚀' },
  { id: 'experience', name: 'Experiencia', icon: '💼' },
  { id: 'skills', name: 'Skills', icon: '⚡' },
  { id: 'contact', name: 'Contacto', icon: '📬' }
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

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 shadow-2xl px-4 py-3">
      <div className="flex items-center gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              currentSection === index
                ? 'bg-blue-600 text-white shadow-lg scale-110'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span className={`text-sm font-medium transition-all duration-300 ${
              currentSection === index ? 'opacity-100 max-w-20' : 'opacity-0 max-w-0 overflow-hidden'
            }`}>
              {section.name}
            </span>
          </button>
        ))}
      </div>
      
      {/* Indicador de progreso */}
      <div className="absolute -top-1 left-4 right-4 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>
    </nav>
  );
}