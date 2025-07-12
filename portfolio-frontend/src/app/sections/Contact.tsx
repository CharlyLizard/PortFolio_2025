import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">Contacto</h2>
      <p className="text-xl text-gray-600 mb-8">
        ¿Tienes un proyecto en mente? ¡Hablemos!
      </p>
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="mailto:tu@email.com"
          className="flex items-center gap-3 bg-white/90 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FaEnvelope className="text-2xl text-red-500" />
          <span className="text-gray-700 font-medium">Email</span>
        </a>
        <a
          href="https://github.com/tuusuario"
          className="flex items-center gap-3 bg-white/90 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FaGithub className="text-2xl text-gray-800" />
          <span className="text-gray-700 font-medium">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          className="flex items-center gap-3 bg-white/90 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <FaLinkedin className="text-2xl text-blue-600" />
          <span className="text-gray-700 font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;