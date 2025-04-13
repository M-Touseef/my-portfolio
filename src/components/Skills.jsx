import React from 'react'
export default function Skills({ darkMode }) {
  const skills = ["React", "JavaScript", "Node.js", "Python", "Tailwind CSS", "MongoDB", "AWS", "Docker"]
  
  return (
    <section id="skills" className="pt-8">
      <h2 className={`text-xl md:text-2xl pb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div 
            key={skill}
            className={`px-3 py-1.5 text-sm rounded-md ${
              darkMode 
                ? 'bg-gray-700 text-gray-100' 
                : 'bg-indigo-100 text-indigo-800'
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}