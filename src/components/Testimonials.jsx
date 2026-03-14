import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaSearch, FaRocket } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const valueProps = [
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: "Problem Solver",
    description: "I break down complex ML and engineering challenges into clean, working solutions."
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: "Detail Oriented",
    description: "From 96.76% F1 scores to pixel-perfect UIs, I care about quality at every layer."
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Fast Learner",
    description: "Built a full deepfake detection platform with PyTorch Transformers as a student project."
  }
];

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section id="testimonials" className={`py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What I Bring
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Skills and mindset that drive every project I work on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`mb-4 ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
