import React from "react";

const Projects = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-50 to-pink-100 p-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-white/90 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Proyecto {project}</h3>
            <p className="text-gray-600 mb-4">Descripción del proyecto y tecnologías utilizadas.</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Node.js</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;