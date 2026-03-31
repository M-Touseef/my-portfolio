import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Headshot from "../images/Headshot.jpeg";

const About = () => {
  const timelineItems = [
    {
      title: "Education",
      content: "B.S. Software Engineering\nUniversity of Central Punjab • 2020-2024\nGPA: 3.5/4.0",
      icon: <FaGraduationCap />,
      delay: 0.2
    },
    {
      title: "Current Focus",
      content: "Developing blockchain-based fraud detection system for FYP\nCompleting IBM Cybersecurity Professional Certificate\nContributing to open-source backend projects",
      icon: <FaBriefcase />,
      delay: 0.4
    }
  ];

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-gray-900 py-12 md:py-24 px-4 sm:px-6 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-16 items-start">
          {/* Profile Column - Mobile Optimized */}
          <motion.div 
            className="space-y-6 md:space-y-8 lg:sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative group max-w-[250px] mx-auto md:max-w-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={Headshot} 
                alt="Muhammad Touseef"
                className="w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-300 border-4 border-white dark:border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent rounded-2xl mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Muhammad Touseef</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                Full Stack & ML Engineer
              </p>
              <motion.div 
                className="flex justify-center md:justify-start gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <a href="/resume.pdf" className="btn-primary text-sm md:text-base px-4 py-2">
                  View Resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column - Mobile Optimized */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                Building Secure & Scalable Backend Systems
              </h2>
              
              <div className="prose dark:prose-invert max-w-3xl">
                <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  As a final-year Software Engineering student at the University of Central Punjab, 
                  I specialize in architecting robust backend solutions using modern technologies 
                  while integrating cybersecurity best practices. My work focuses on creating 
                  resilient systems that balance performance with security.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                  {[
                    {
                      icon: <FaServer />,
                      title: "Technical Stack",
                      items: [
                        "Node.js / Express / NestJS",
                        "MongoDB / PostgreSQL",
                        "REST & GraphQL APIs",
                        "Docker & Kubernetes"
                      ]
                    },
                    {
                      icon: <FaShieldAlt />,
                      title: "Security Focus",
                      items: [
                        "OWASP Top 10 Protection",
                        "JWT & OAuth2 Implementation",
                        "Blockchain Security Patterns",
                        "Fraud Detection Systems"
                      ]
                    }
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="text-blue-600 dark:text-blue-400 text-2xl md:text-3xl mb-3 md:mb-4 inline-block p-2 md:p-3 rounded-full bg-blue-50 dark:bg-gray-900"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {card.icon}
                      </motion.div>
                      <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-white">{card.title}</h4>
                      <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
                        {card.items.map((item, i) => (
                          <motion.li 
                            key={i}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 md:gap-3"
                          >
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Timeline Section - Mobile Optimized */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <div className="relative pl-4 md:pl-8">
                <motion.div
                  className="absolute left-0 top-0 w-0.5 h-full bg-gray-200 dark:bg-gray-700 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                />

                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative mb-8 md:mb-12 last:mb-0 group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <motion.div
                        className="text-white text-xs md:text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>

                    <div className="space-y-2 ml-6 md:ml-10 pt-1 md:pt-2">
                      <motion.div
                        className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg md:rounded-xl shadow-xs hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <h4 className="text-lg md:text-xl font-semibold dark:text-white mb-2 md:mb-3">
                          {item.title}
                        </h4>
                        <motion.p
                          className="text-sm md:text-base text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: item.delay + 0.2 }}
                        >
                          {item.content}
                        </motion.p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;