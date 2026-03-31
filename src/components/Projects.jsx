import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { projects, categories } from "../data/projects";

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const showPagination = filteredProjects.length > PROJECTS_PER_PAGE;

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (category) => {
    setIsAnimating(true);
    setActiveCategory(category);
    setCurrentPage(1);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const handlePageChange = (newPage) => {
    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <section id="projects" className={`w-full py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : (isDark ? 'border border-gray-600 text-gray-300 hover:bg-gray-800' : 'border border-gray-300 text-gray-600 hover:bg-gray-100')
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {paginatedProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                isDark={isDark}
                isAnimating={isAnimating}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {showPagination && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 1
                  ? (isDark ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
                  : (isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300')
              }`}
            >
              Previous
            </button>
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? (isDark ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
                  : (isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300')
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className={`text-2xl font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No projects in this category
            </h3>
            <button
              onClick={() => handleCategoryChange("All")}
              className="px-6 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isDark, isAnimating }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`group relative h-full flex flex-col ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-xl shadow-lg hover:shadow-xl overflow-hidden border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      } transition-all`}
    >
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
        <div className="flex justify-between items-start mb-3">
          <span className={`text-sm font-medium ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {project.category}
          </span>
        </div>

        <h3 className={`text-xl font-bold mb-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>

              <p className={`text-sm mb-4 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
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

          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <FiGithub className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors`}
            >
              <FiExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
