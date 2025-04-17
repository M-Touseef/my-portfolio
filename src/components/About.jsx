import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBookOpen, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-blue-50 to-blue-100 text-slate-900 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-700 mb-6 leading-relaxed text-justify"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm Muhammad Touseef, a passionate Backend Developer and cybersecurity learner from the University of Central Punjab. I specialize in building robust and scalable backend applications using the MERN stack. I'm also exploring the world of cybersecurity, digital fraud prevention, and blockchain-powered solutions to prepare for my Final Year Project.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-700 mb-6 leading-relaxed text-justify"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          With a strong background in backend development, academic excellence, and real-world exposure through university societies and projects, I aim to contribute to impactful tech solutions. I'm continuously learning and evolving through online courses, hands-on projects, and teamwork.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {[
            {
              title: "🎓 Education",
              content: "Bachelor in Software Engineering\nUniversity of Central Punjab",
              icon: <FaGraduationCap className="text-indigo-600 text-2xl mr-2" />
            },
            {
              title: "👨‍💻 Interests",
              content: "Backend APIs, Cybersecurity, Blockchain, MERN Stack, Digital Fraud Detection",
              icon: <FaLaptopCode className="text-indigo-600 text-2xl mr-2" />
            },
            {
              title: "🌐 Ongoing Learning",
              content: "Coursera Specializations (IBM, AI, Blockchain, React), React + Tailwind Projects",
              icon: <FaBookOpen className="text-indigo-600 text-2xl mr-2" />
            },
            {
              title: "💼 Career Goal",
              content: "To become a skilled backend engineer, cybersecurity expert, and blockchain project contributor",
              icon: <FaBriefcase className="text-indigo-600 text-2xl mr-2" />
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-2">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;