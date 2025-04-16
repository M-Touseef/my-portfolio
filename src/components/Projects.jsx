// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Online Admission Platform",
    description:
      "A MERN-based platform to help students find and apply to universities with automation, payment integration, and personalized suggestions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/admission-platform",
    demo: "#",
  },
  {
    title: "Pure Eats",
    description:
      "A health-focused food delivery web app that lets users order based on dietary preferences. Includes PDF receipt export and mini printer integration.",
    tech: ["React", "Node.js", "MongoDB", "PDFKit"],
    github: "https://github.com/yourusername/pure-eats",
    demo: "#",
  },
  {
    title: "E-commerce Backend",
    description:
      "A scalable backend for a physical product store with custom API, payment gateways, and admin controls.",
    tech: ["Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-backend",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-white text-slate-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-100 p-6 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl z-0" />
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-blue-800 font-medium mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
