// src/components/Skills.jsx
import React from "react";
import {
  FaReact, FaNodeJs, FaGithub, FaLinux, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiFirebase,
  SiPandas, SiNumpy, SiTensorflow,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsTerminal } from "react-icons/bs";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript size={24} /> },
    { name: "React.js", icon: <FaReact size={24} /> },
    { name: "Node.js", icon: <FaNodeJs size={24} /> },
    { name: "Express.js", icon: <SiExpress size={24} /> },
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    { name: "Firebase", icon: <SiFirebase size={24} /> },
    { name: "Git & GitHub", icon: <FaGithub size={24} /> },
    { name: "Linux CLI", icon: <FaLinux size={24} /> },
    { name: "SQL / Databases", icon: <FaDatabase size={24} /> },
    { name: "Pandas", icon: <SiPandas size={24} /> },
    { name: "NumPy", icon: <SiNumpy size={24} /> },
    { name: "Machine Learning", icon: <GiArtificialIntelligence size={24} /> },
    { name: "Metasploit", icon: <BsTerminal size={24} /> },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-slate-100 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">My Skills</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-slide">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="min-w-[150px] flex-shrink-0 bg-white shadow rounded-xl p-4 flex flex-col items-center justify-center"
              >
                <div className="text-blue-600 mb-2">{skill.icon}</div>
                <p className="text-sm font-medium text-slate-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            display: flex;
            animation: slide 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
