import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const professionalProjects = [
  {
    id: 1,
    title: "University Admissions Platform",
    description: "Full-stack application handling 50,000+ annual student applications with automated document processing and real-time analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    github: "#",
    demo: "#",
    year: 2023,
    featured: true
  },
  {
    id: 2,
    title: "Nutrition-Focused E-Commerce",
    description: "AI-powered meal recommendation system with personalized dietary filters and nutrition tracking for health-conscious consumers.",
    tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
    github: "#",
    demo: "#",
    year: 2022,
    featured: true
  },
  {
    id: 3,
    title: "Enterprise E-Commerce API",
    description: "High-performance backend serving 10,000+ RPM with Redis caching, webhook integrations, and multi-payment gateway support.",
    tech: ["Node.js", "MongoDB", "Stripe", "Redis"],
    github: "#",
    demo: "#",
    year: 2023
  },
  {
    id: 4,
    title: "Developer Portfolio Engine",
    description: "CMS platform enabling developers to create customized portfolios with automated GitHub integration and responsive templates.",
    tech: ["React", "Firebase", "Tailwind CSS", "GitHub API"],
    github: "#",
    demo: "#",
    year: 2022
  },
  {
    id: 5,
    title: "Corporate Task Management",
    description: "Enterprise workflow solution with role-based permissions, Gantt chart visualization, and cross-team collaboration features.",
    tech: ["React", "Redux", "GraphQL", "PostgreSQL"],
    github: "#",
    demo: "#",
    year: 2023
  },
  {
    id: 6,
    title: "AI Content Generation Suite",
    description: "GPT-4 integrated platform producing marketing content with brand-aligned tone analysis and multi-language support.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    github: "#",
    demo: "#",
    year: 2023
  }
];

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedTech, setSelectedTech] = useState(null);
  
  // Get all unique technologies
  const allTechnologies = [...new Set(
    professionalProjects.flatMap(project => project.tech)
  )].sort();

  // Filter projects by selected technology
  const filteredProjects = selectedTech
    ? professionalProjects.filter(project => project.tech.includes(selectedTech))
    : professionalProjects;

  return (
    <section id="projects" className={`w-full py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Professional Header */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Engineering Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}
          >
            Scalable solutions built with modern architectures and industry best practices
          </motion.p>
        </div>

        {/* Technology Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedTech 
                  ? (isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                  : (isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100')
              }`}
            >
              All Technologies
            </button>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === tech
                    ? (isDark ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                    : (isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100')
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className={`text-2xl font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects match the selected technology
            </h3>
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-6 py-3 rounded-lg font-medium ${
                isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isDark }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative h-full flex flex-col ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-xl shadow-lg hover:shadow-xl overflow-hidden border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } transition-all`}
    >
      {/* Project Image Placeholder */}
      <div className={`h-48 ${
        isDark ? 'bg-gray-700' : 'bg-gray-100'
      } flex items-center justify-center`}>
        <div className={`text-4xl font-bold ${
          isDark ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {project.id.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Project Meta */}
        <div className="flex justify-between items-start mb-3">
          <span className={`text-sm font-medium ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {project.year}
          </span>
          {project.featured && (
            <span className={`px-2 py-1 text-xs font-bold rounded ${
              isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-800'
            }`}>
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className={`text-xl font-bold mb-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>

        {/* Project Description */}
        <p className={`text-sm mb-4 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDark ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <FiGithub className="w-5 h-5" />
              <span className="text-sm font-medium">Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors`}
            >
              <FiExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;