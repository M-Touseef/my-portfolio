import React from 'react'
export default function Navbar({ darkMode, setDarkMode }) {
    return (
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-800/90 z-50 py-2">
        <div className="flex justify-between items-center px-4 md:px-6 max-w-7xl mx-auto">
          <a href="#" className="text-lg font-semibold dark:text-white">Touseef's Portfolio</a>
          <div className="flex gap-4 items-center">
            <a href="#about" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300">About</a>
            <a href="#skills" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300">Skills</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-indigo-600 dark:text-gray-300">Projects</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </nav>
    )
  }