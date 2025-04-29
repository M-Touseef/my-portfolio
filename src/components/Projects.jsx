import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "Online Admission Platform",
    description: "A MERN-based university application system with automation and payment integration that handles thousands of applications annually with a 99.9% uptime.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Pure Eats",
    description: "Health-focused food delivery app with advanced dietary preference filters and real-time order tracking.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "E-commerce Backend",
    description: "Scalable backend architecture with custom API and multiple payment gateways integration.",
    tech: ["Node.js", "MongoDB", "Stripe", "Redis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Builder",
    description: "Interactive tool for developers to create and customize professional portfolios with live previews.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Management System",
    description: "Enterprise-grade task management with role-based access control and analytics dashboard.",
    tech: ["React", "Redux", "GraphQL", "PostgreSQL"],
    github: "#",
    demo: "#"
  }
];

// Calculate technology frequency and sort by most common
const techFrequency = projects.reduce((acc, project) => {
  project.tech.forEach(tech => {
    acc[tech] = (acc[tech] || 0) + 1;
  });
  return acc;
}, {});

const allTech = [...new Set(projects.flatMap(project => project.tech))]
  .sort((a, b) => techFrequency[b] - techFrequency[a]);

const Projects = () => {
  const [filters, setFilters] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  
  const colors = {
    light: { primary: "#1e40af", secondary: "#9333ea" },
    dark: { primary: "#60a5fa", secondary: "#a78bfa" }
  };

  const toggleFilter = (tech) => {
    setFilters(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
    setCurrentSlide(0); // Reset to first slide when filters change
  };

  const filteredProjects = filters.length === 0
    ? projects
    : projects.filter(project => 
        filters.every(filter => project.tech.includes(filter))
      );

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => 
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => 
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  // Variants for slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0
    })
  };

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-800 dark:text-blue-400"
        >
          My Projects
        </motion.h2>
        
        {/* Enhanced Filter System */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-lg font-medium mb-4 text-center text-gray-700 dark:text-gray-300">
            Filter by Technology:
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto px-4">
            {allTech.map(tech => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleFilter(tech)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  filters.includes(tech)
                    ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500 shadow-md"
                    : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-gray-600 dark:hover:bg-gray-700"
                }`}
              >
                {tech} {techFrequency[tech] > 2 && (
                  <span className="ml-1 text-xs opacity-80">({techFrequency[tech]})</span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Carousel */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700 dark:text-blue-400">
              Featured Projects
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl"
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">
                          {featuredProjects[currentSlide].title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                          {featuredProjects[currentSlide].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredProjects[currentSlide].tech.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                filters.includes(tech)
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={featuredProjects[currentSlide].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <FiGithub className="w-5 h-5" />
                            View Code
                          </a>
                          <a
                            href={featuredProjects[currentSlide].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <FiExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                      <div className="lg:w-1/2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                        <div className="w-full h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-medium">
                          Project Preview
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FiChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FiChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </button>
              
              <div className="flex justify-center mt-4 gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentSlide ? 1 : -1);
                      setCurrentSlide(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide 
                        ? "bg-blue-600 dark:bg-blue-400" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-700 dark:text-blue-400">
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-medium">
                  Project Preview
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          filters.includes(tech)
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;