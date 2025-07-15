"use client";
import React, { useEffect, useState } from "react";
import { getProjects } from "../services/portfolioService";
import { Project } from "../models/Project";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getProjects()
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
          setError("No se pudieron cargar los proyectos.");
        }
      })
      .catch(() => setError("No se pudieron cargar los proyectos."))
      .finally(() => setLoading(false));
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 2) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 2 + projects.length) % projects.length);
  };

  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <p className="text-xl text-gray-600">Cargando proyectos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-50 to-pink-100 p-8">
        <p className="text-xl text-red-600">{error}</p>
      </section>
    );
  }

  // Obtener los dos proyectos actuales
  const currentProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
  ].filter(Boolean);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4 relative overflow-hidden flex flex-col">
      {/* Partículas de fondo mejoradas */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent"></div>
      </div>

      {/* Título más compacto */}
      <div className="text-center mb-12 relative z-10">
        <div className="mb-2">
          <span className="text-purple-400 font-mono text-xs tracking-widest">
            PORTFOLIO
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
          MIS{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-pulse">
            PROYECTOS
          </span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-2"></div>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Una selección de mis trabajos más destacados
        </p>
      </div>

      {/* Carrusel con 2 proyectos */}
      <div className="max-w-6xl mx-auto relative z-10 flex-1 flex items-center">
        {/* Contenedor del carrusel */}
        <div className="relative w-full">
          {/* Botón anterior */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-2xl"
            disabled={projects.length <= 2}
          >
            <FaChevronLeft className="text-lg" />
          </button>

          {/* Botón siguiente */}
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3 text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 shadow-2xl"
            disabled={projects.length <= 2}
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Grid de 2 proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16">
            {currentProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-700 shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02] transform"
              >
                {/* Imagen del proyecto - AJUSTADA */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  {/* Badge del proyecto - REPOSICIONADO */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                    ⭐ PROYECTO {currentIndex + index + 1}
                  </div>

                  {/* Número del proyecto - REPOSICIONADO PARA EVITAR NAVBAR */}
                  <div className="absolute bottom-3 left-3 text-white z-20">
                    <div className="text-2xl font-black opacity-40 leading-none">
                      {String(currentIndex + index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Efecto de hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Contenido del proyecto - OPTIMIZADO */}
                <div className="p-5">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tecnologías en grid - LIMITADAS */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-2 py-1 rounded-lg text-xs text-center font-medium transition-all duration-300 cursor-pointer border border-purple-500/20 hover:border-purple-400/40 hover:scale-105"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Botones del proyecto */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-gray-900 py-2 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-center text-sm hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      📂 Código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center text-sm hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🚀 Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores y contador - AJUSTADOS PARA NO CHOCAR CON NAVBAR */}
      <div className="relative z-10 mt-8 mb-20">
        {/* Indicadores de proyectos */}
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 2) === index
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Contador de proyectos */}
        <div className="text-center">
          <span className="text-purple-400 font-mono text-xs">
            Mostrando{" "}
            {Math.min(currentIndex + 1, projects.length)}-
            {Math.min(currentIndex + 2, projects.length)} de {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;