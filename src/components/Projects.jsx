import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { projects, categories } from "../data/projects";

const Projects = () => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featureProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

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

        {/* Featured Project */}
        {featureProject && (
          <FeatureProjectCard project={featureProject} isDark={isDark} />
        )}

        {/* Secondary Projects */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {secondaryProjects.map((project, index) => (
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
        )}
      </div>
    </section>
  );
};

const FeatureProjectCard = ({ project, isDark }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-2xl border ${
        isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      } shadow-xl`}
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {project.imageUrl && (
          <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <div className="mb-3">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                isDark ? "bg-blue-900/40 text-blue-300" : "bg-blue-50 text-blue-700"
              }`}
            >
              Featured · {project.category}
            </span>
          </div>

          <h3
            className={`text-2xl sm:text-3xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-sm sm:text-base mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {project.description}
          </p>

          {project.highlights?.length > 0 && (
            <ul
              className={`mb-5 space-y-2 text-sm ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDark ? "bg-gray-800 text-blue-300" : "bg-blue-50 text-blue-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              } transition-colors`}
            >
              <FiGithub className="w-5 h-5" />
              Code
            </a>
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <FiExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
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
