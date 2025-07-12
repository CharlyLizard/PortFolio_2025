import React from "react";

const Experience = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-orange-50 to-red-100 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">Experiencia</h2>
      <div className="space-y-8">
        {[
          { company: "Empresa ABC", role: "Desarrollador Senior", period: "2023 - Presente" },
          { company: "StartUp XYZ", role: "Desarrollador Fullstack", period: "2021 - 2023" },
          { company: "Freelance", role: "Desarrollador Web", period: "2020 - 2021" }
        ].map((exp, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-xl shadow-lg text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-600">{exp.role}</h3>
            <h4 className="text-lg font-medium text-gray-700">{exp.company}</h4>
            <p className="text-gray-500">{exp.period}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;