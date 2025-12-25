import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      href: "mailto:carlossmartinsalvatierra@gmail.com",
      icon: FaEnvelope,
      text: "carlossmartinsalvatierra@gmail.com",
      color: "hover:bg-red-500",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/carlos-martin-salvatierra/",
      icon: FaLinkedin,
      text: "Carlos Martín Salvatierra",
      color: "hover:bg-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/CharlyLizard",
      icon: FaGithub,
      text: "CharlyLizard",
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-20 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Título */}
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Hablemos
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Estoy disponible para nuevos proyectos y colaboraciones. No dudes en contactarme.
        </p>

        {/* Tarjeta de contacto */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="space-y-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-transparent transition-all duration-300 ${link.color} hover:text-white`}
                >
                  <Icon className="text-2xl text-indigo-300 group-hover:text-white transition-colors" />
                  <div className="text-left">
                    <span className="font-semibold text-white">{link.name}</span>
                    <p className="text-sm text-gray-400 group-hover:text-gray-200">{link.text}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Separador */}
          <div className="my-8 h-px bg-white/10"></div>

          {/* Botón de Descargar CV */}
          <a
            href="/cv/Carlos-Martin-CV.pdf" // Asegúrate de que tu CV esté en `public/cv/`
            download
            className="group inline-flex items-center justify-center gap-3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Descargar mi CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;