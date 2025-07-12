import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => (
  <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          { icon: FaReact, name: "React", color: "text-blue-500" },
          { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
          { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
          { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
          { icon: FaPython, name: "Python", color: "text-yellow-500" },
          { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" }
        ].map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white/90 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <skill.icon className={`text-5xl ${skill.color} mb-3`} />
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;