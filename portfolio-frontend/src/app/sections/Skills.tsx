"use client";
import React, { useEffect, useState } from "react";
import { getSkills } from "../services/portfolioService";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws, FaJava, FaAngular, FaJenkins } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiMysql, SiSpringboot, SiMaterialdesign, SiVercel, SiFigma } from "react-icons/si";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Mapeo de iconos actualizado
const iconMap: { [key: string]: React.ElementType } = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  Angular: FaAngular,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Angular Material": SiMaterialdesign,
  Python: FaPython,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  "Node.js": FaNodeJs,
  MySQL: SiMysql,
  Git: FaGitAlt,
  Docker: FaDocker,
  Jenkins: FaJenkins,
  AWS: FaAws,
  Vercel: SiVercel,
  Figma: SiFigma,
};

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData | null>(null);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  const radarData = skills ? [
    ...skills.frontend.slice(0, 2),
    ...skills.backend.slice(0, 2),
    ...skills.tools.slice(0, 2),
  ].map(skill => ({ subject: skill.name, A: skill.level, fullMark: 100 })) : [];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 py-16 px-4 relative overflow-hidden flex flex-col justify-center">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Título */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Habilidades</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Grid principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {/* Columna Frontend */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-cyan-300 text-center lg:text-left mb-4">Frontend</h3>
          {skills?.frontend.map(skill => {
            const Icon = iconMap[skill.name] || FaReact;
            return (
              <div key={skill.name} className="bg-white/5 backdrop-blur-lg p-3 rounded-lg flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="text-2xl text-cyan-400" />
                <div className="w-full">
                  <span className="font-medium text-white text-sm">{skill.name}</span>
                  <div className="w-full bg-black/20 rounded-full h-1.5 mt-1">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-1.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Columna Central - Gráfico Radar y Herramientas */}
        <div className="flex flex-col gap-6">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.2)" />
                <PolarAngleAxis dataKey="subject" stroke="rgba(255, 255, 255, 0.7)" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="none" />
                <Radar name="Nivel" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 20, 30, 0.8)',
                    borderColor: '#06b6d4',
                    borderRadius: '10px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-300 text-center">Herramientas</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills?.tools.map(skill => {
                const Icon = iconMap[skill.name] || FaReact;
                return (
                  <div key={skill.name} className="bg-white/5 backdrop-blur-lg p-3 rounded-lg flex items-center gap-2 border border-white/10 hover:bg-white/10 transition-colors">
                    <Icon className="text-xl text-gray-400" />
                    <span className="font-medium text-white text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Columna Backend */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-blue-300 text-center lg:text-left mb-4">Backend</h3>
          {skills?.backend.map(skill => {
            const Icon = iconMap[skill.name] || FaReact;
            return (
              <div key={skill.name} className="bg-white/5 backdrop-blur-lg p-3 rounded-lg flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-colors">
                <Icon className="text-2xl text-blue-400" />
                <div className="w-full">
                  <span className="font-medium text-white text-sm">{skill.name}</span>
                  <div className="w-full bg-black/20 rounded-full h-1.5 mt-1">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;