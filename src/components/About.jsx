import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaShieldAlt, FaCodeBranch, FaDatabase } from "react-icons/fa";
import Headshot from "../images/headshot.jpg"; // Add your headshot image

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-gray-900 py-24 px-6 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Profile Column */}
          <motion.div 
            className="space-y-8 sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <img 
                src={Headshot} 
                alt="Muhammad Touseef"
                className="w-full h-auto rounded-2xl shadow-xl transform group-hover:scale-101 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-indigo-600/10 rounded-2xl mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Muhammad Touseef</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                Backend Engineer & Security Enthusiast
              </p>
              <div className="flex gap-4">
                <a href="/resume.pdf" className="btn-primary">
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Building Secure & Scalable Backend Systems
              </h2>
              
              <div className="prose dark:prose-invert max-w-3xl">
                <p className="text-lg leading-relaxed">
                  As a final-year Software Engineering student at University of Central Punjab, 
                  I specialize in architecting robust backend solutions using modern technologies 
                  while integrating cybersecurity best practices. My work focuses on creating 
                  resilient systems that balance performance with security.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <FaServer className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Technical Stack</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Node.js / Express / NestJS</li>
                      <li>• MongoDB / PostgreSQL</li>
                      <li>• REST & GraphQL APIs</li>
                      <li>• Docker & Kubernetes</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <FaShieldAlt className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Security Focus</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• OWASP Top 10 Protection</li>
                      <li>• JWT & OAuth2 Implementation</li>
                      <li>• Blockchain Security Patterns</li>
                      <li>• Fraud Detection Systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8 space-y-8">
                <div className="relative">
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[25px] top-1" />
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B.S. Software Engineering<br />
                    University of Central Punjab • 2020-2024<br />
                    GPA: 3.8/4.0
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[25px] top-1" />
                  <h4 className="text-xl font-semibold mb-2">Current Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developing blockchain-based fraud detection system for FYP<br />
                    Completing IBM Cybersecurity Professional Certificate<br />
                    Contributing to open-source backend projects
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;