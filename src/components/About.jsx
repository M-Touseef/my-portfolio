
import React from 'react'
export default function About({ darkMode }) {
    return (
      <section id="about" className="pt-12">
        <h2 className={`text-xl md:text-2xl pb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
          About Me
        </h2>
        <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-slate-600'} leading-relaxed`}>
          Full-stack developer specializing in modern web technologies. 
          Passionate about creating efficient, user-friendly applications. 
          Currently focusing on React ecosystem and cloud-native development.
        </p>
      </section>
    )
  }