import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen w-full text-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden transition-all duration-500">
    
    {/* Elementos de fondo decorativos mejorados */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      {/* Partículas flotantes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full animate-float animation-delay-2000 opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 dark:bg-pink-300 rounded-full animate-float animation-delay-4000 opacity-60"></div>
    </div>
    
    {/* Contenido principal */}
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      
      {/* Layout horizontal: Avatar + Contenido */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8">
        
        {/* Avatar con efectos mejorados */}
        <div className="relative group flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-spin-slow opacity-75 blur-sm group-hover:opacity-90 transition-opacity"></div>
          <img
            src="images/Photo_person.png"
            alt="Carlos Martín Salvatierra"
            className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover hover:scale-110 transition-transform duration-500 animate-fade-in"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 dark:bg-green-400 rounded-full border-2 border-white dark:border-gray-800 animate-pulse shadow-lg"></div>
        </div>

        {/* Contenido de texto */}
        <div className="text-center lg:text-left">
          {/* Nombre principal con efecto neón */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-300 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent animate-fade-in filter drop-shadow-lg">
            Carlos Martín Salvatierra
          </h1>

          {/* Subtítulo con animación de escritura */}
          <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-white mb-6 animate-slide-up opacity-90">
            Desarrollador <span className="text-blue-600 dark:text-blue-400">Fullstack</span>
          </h2>

          {/* Descripción con efectos de texto */}
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed animate-slide-up animation-delay-500">
            Construyo aplicaciones web <span className="text-blue-600 dark:text-blue-400 font-semibold">modernas</span>, 
            <span className="text-green-600 dark:text-green-400 font-semibold"> escalables</span> y 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> eficientes</span>. 
            Apasionado por la innovación y el aprendizaje continuo.
          </p>
        </div>
      </div>

      {/* Stack de tecnologías con Grid responsivo */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center text-4xl lg:text-5xl mb-10 animate-fade-up max-w-2xl mx-auto">
        <FaReact
          className="text-blue-500 dark:text-blue-400 hover:scale-125 hover:rotate-180 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="React"
        />
        <SiNextdotjs
          className="text-black dark:text-white hover:scale-125 hover:rotate-12 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="Next.js"
        />
        <FaNodeJs
          className="text-green-600 dark:text-green-400 hover:scale-125 hover:-rotate-12 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="Node.js"
        />
        <SiTypescript
          className="text-blue-600 dark:text-blue-400 hover:scale-125 hover:rotate-180 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="TypeScript"
        />
        <FaPython
          className="text-yellow-500 dark:text-yellow-400 hover:scale-125 hover:rotate-12 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="Python"
        />
        <SiTailwindcss
          className="text-cyan-500 dark:text-cyan-400 hover:scale-125 hover:-rotate-12 transition-all duration-500 animate-icon-glow cursor-pointer"
          title="Tailwind CSS"
        />
      </div>

      {/* Botones mejorados con mejor responsividad */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-up mb-8">
        <a
          href="#projects"
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full shadow-2xl hover:scale-105 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-400 dark:hover:to-pink-400 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 active:scale-95 hover:shadow-blue-500/25"
        >
          <span className="group-hover:animate-bounce">🚀</span>
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="group px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3 active:scale-95 hover:shadow-blue-500/25"
        >
          <span className="group-hover:animate-pulse">📬</span>
          Contactar
        </a>
      </div>

      {/* Redes sociales mejoradas */}
      <div className="flex justify-center gap-6 animate-fade-up mb-8">
        <a
          href="https://github.com/CharlyLizard"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-mart%C3%ADn-salvatierra-275b45166/"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
      </div>

      {/* Separador mejorado */}
      <div className="relative w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 rounded-full opacity-60 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  </section>
);

export default Hero;