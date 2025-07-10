import React from "react";

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Carlos Martín Salvatierra</h1>
    <p className="text-lg text-gray-600 mb-6">
      Desarrollador web | Apasionado por la tecnología | Portfolio 2025
    </p>
    <a
      href="#projects"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Ver proyectos
    </a>
  </section>
);

export default Hero;