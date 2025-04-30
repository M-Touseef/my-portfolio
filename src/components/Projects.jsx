import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Online Admission Platform",
    description: "A MERN-based university application system with automation and payment integration that handles thousands of applications annually with a 99.9% uptime.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "#",
    demo: "#",
    featured: true,
    year: 2023
  },
  {
    id: 2,
    title: "Pure Eats",
    description: "Health-focused food delivery app with advanced dietary preference filters and real-time order tracking.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
    featured: true,
    year: 2022
  },
  {
    id: 3,
    title: "E-commerce Backend",
    description: "Scalable backend architecture with custom API and multiple payment gateways integration.",
    tech: ["Node.js", "MongoDB", "Stripe", "Redis"],
    github: "#",
    demo: "#",
    year: 2023
  },
  {
    id: 4,
    title: "Portfolio Builder",
    description: "Interactive tool for developers to create and customize professional portfolios with live previews.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#",
    year: 2022
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Enterprise-grade task management with role-based access control and analytics dashboard.",
    tech: ["React", "Redux", "GraphQL", "PostgreSQL"],
    github: "#",
    demo: "#",
    year: 2023
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "GPT-3 powered content creation tool with customizable templates and tone settings.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    github: "#",
    demo: "#",
    year: 2023
  }
];

const allTech = [...new Set(projects.flatMap(project => project.tech))];
const allYears = [...new Set(projects.map(project => project.year))].sort((a, b) => b - a);

const Projects = () => {
  const [techFilter, setTechFilter] = useState([]);
  const [yearFilter, setYearFilter] = useState(null);
  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const toggleTechFilter = (tech) => {
    setTechFilter(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };

  const toggleYearFilter = (year) => {
    setYearFilter(prev => prev === year ? null : year);
  };

  const clearFilters = () => {
    setTechFilter([]);
    setYearFilter(null);
  };

  const filteredProjects = projects.filter(project => {
    const matchesTech = techFilter.length === 0 || 
      techFilter.every(tech => project.tech.includes(tech));
    const matchesYear = !yearFilter || project.year === yearFilter;
    return matchesTech && matchesYear;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="w-full py-16 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A selection of my recent work showcasing different technologies and solutions
          </motion.p>
        </div>

        {/* Improved Filter System */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-3">
            {/* Technology Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTechDropdown(!showTechDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <span>Technologies</span>
                <FiChevronDown className={`transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showTechDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3"
                  >
                    <div className="max-h-60 overflow-y-auto">
                      {allTech.map(tech => (
                        <label key={tech} className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={techFilter.includes(tech)}
                            onChange={() => toggleTechFilter(tech)}
                            className="rounded text-blue-600 dark:text-blue-400"
                          />
                          <span className="text-gray-800 dark:text-gray-200">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Year Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <span>{yearFilter ? `Year: ${yearFilter}` : 'All Years'}</span>
                <FiChevronDown className={`transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {showYearDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2"
                  >
                    <div className="max-h-60 overflow-y-auto">
                      <button
                        onClick={() => {
                          toggleYearFilter(null);
                          setShowYearDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded ${!yearFilter ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      >
                        All Years
                      </button>
                      {allYears.map(year => (
                        <button
                          key={year}
                          onClick={() => {
                            toggleYearFilter(year);
                            setShowYearDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded ${yearFilter === year ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Active Filters Display */}
            {(techFilter.length > 0 || yearFilter) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded"
              >
                <FiX /> Clear filters
              </button>
            )}
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">
            All Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h4 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-4">
              No projects match your filters
            </h4>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Featured Project Card Component
const FeaturedProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="relative z-10 text-white text-center p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-blue-100">{project.year}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            <FiExternalLink /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Regular Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-end justify-end p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className="relative z-10 text-white text-sm font-medium px-2 py-1 bg-black/30 rounded">
          {project.year}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
          >
            <FiGithub className="w-4 h-4" /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
          >
            <FiExternalLink className="w-4 h-4" /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;