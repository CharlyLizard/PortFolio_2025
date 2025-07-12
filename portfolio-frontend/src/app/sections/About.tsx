import React from "react";

const About = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">Sobre mí</h2>
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Soy un desarrollador fullstack apasionado por crear soluciones innovadoras
        y experiencias digitales excepcionales.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/80 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🎯 Enfoque</h3>
          <p className="text-gray-600">Desarrollo centrado en el usuario</p>
        </div>
        <div className="bg-white/80 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">💡 Innovación</h3>
          <p className="text-gray-600">Siempre aprendiendo nuevas tecnologías</p>
        </div>
        <div className="bg-white/80 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🤝 Colaboración</h3>
          <p className="text-gray-600">Trabajo en equipo efectivo</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;