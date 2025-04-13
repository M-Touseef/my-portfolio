import React from 'react'
export default function Projects({ darkMode }) {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack shopping platform with React & Node.js"
    },
    {
      name: "Task Manager App",
      description: "Real-time collaborative task management system"
    }
  ];

  return (
    <section className="min-h-screen pt-20" id="projects">
      <h2 className={`text-3xl py-8 ${darkMode ? 'text-white' : 'text-black'}`}>
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              {project.name}
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
