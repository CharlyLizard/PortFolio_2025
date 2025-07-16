"use client";
import React, { useEffect, useState } from "react";
import { getExperience } from "../services/portfolioService";
import { Experience } from "../models/Experience";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    getExperience()
      .then((data) => {
        if (Array.isArray(data)) {
          setExperiences(data);
        } else {
          setExperiences([]);
          setError("No se pudo cargar la experiencia.");
        }
      })
      .catch(() => setError("No se pudo cargar la experiencia."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-orange-50 to-red-100 p-8">
        <p className="text-xl text-gray-600">Cargando experiencia...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-orange-50 to-red-100 p-8">
        <p className="text-xl text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-amber-50 to-red-100 dark:from-gray-900 dark:via-orange-900 dark:to-red-900 py-20 px-4 relative overflow-hidden">
      {/* Partículas de fondo */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent"></div>
      </div>

      {/* Título */}
      <div className="text-center mb-16 relative z-10">
        <div className="mb-2">
          <span className="text-orange-600 dark:text-orange-400 font-mono text-xs tracking-widest">
            MI TRAYECTORIA
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-3 leading-tight">
          MI{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse">
            EXPERIENCIA
          </span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-2"></div>
        <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xl mx-auto">
          Pasa el cursor sobre los puntos para ver mi trayectoria
        </p>
      </div>

      {/* Timeline Horizontal con Hover */}
      <div className="max-w-6xl mx-auto relative z-10 flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          {/* Línea horizontal central */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full transform -translate-y-1/2"></div>
          
          {/* Contenedor de puntos */}
          <div className="relative flex justify-between items-center py-32">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Punto interactivo */}
                <div className={`relative z-20 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 cursor-pointer transition-all duration-300 shadow-lg ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-150 shadow-orange-500/50'
                    : 'bg-gradient-to-r from-orange-400 to-red-400 hover:scale-125'
                }`}>
                  {/* Número del punto */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <span className={`text-sm font-bold transition-colors duration-300 ${
                      hoveredIndex === index 
                        ? 'text-orange-600 dark:text-orange-400 text-lg' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Ripple effect */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Tarjeta de información con hover */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'bottom-12' : 'top-12'
                } left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                }`}>
                  {/* Flecha conectora */}
                  <div className={`absolute ${
                    index % 2 === 0 ? 'top-full' : 'bottom-full'
                  } left-1/2 transform -translate-x-1/2 ${
                    index % 2 === 0 ? '-mt-1' : '-mb-1'
                  }`}>
                    <div className={`w-0 h-0 ${
                      index % 2 === 0 
                        ? 'border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800'
                        : 'border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800'
                    }`}></div>
                  </div>

                  {/* Tarjeta de experiencia */}
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 w-80 hover:shadow-orange-500/20 transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaBriefcase className="text-white text-sm" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-gray-800 dark:text-white mb-1 leading-tight">
                          {experience.role}
                        </h3>
                        <p className="text-orange-600 dark:text-orange-400 font-semibold text-sm">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Período y ubicación */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-orange-500" />
                        <span className="font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Tecnologías */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 text-orange-700 dark:text-orange-300 rounded-lg text-xs font-medium border border-orange-200 dark:border-orange-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {experience.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                            +{experience.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Barra de brillo */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-t-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ExperienceSection;