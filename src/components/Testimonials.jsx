import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager, Tech Solutions",
    text: "Touseef's backend architecture significantly optimized our API response times, reducing latency by 40% while maintaining rigorous security standards.",
    avatar: "👩💻"
  },
  {
    name: "Ali Raza",
    role: "Cybersecurity Lead, SafeNet",
    text: "Implemented robust security measures that helped our system achieve ISO 27001 compliance. His attention to secure coding practices is exceptional.",
    avatar: "👨💻"
  },
  {
    name: "Emily Carter",
    role: "Data Analyst, DataMinds Inc.",
    text: "Developed machine learning pipelines that improved our predictive analytics accuracy by 28% while maintaining computational efficiency.",
    avatar: "👩🔬"
  },
];

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section id="testimonials" className={`relative py-24 px-6 ${isDark ? 'bg-gray-900' : 'bg-indigo-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Endorsements
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Verified feedback from industry peers and collaborators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${
                  isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'
                }`}>
                  {testimonial.avatar}
                </div>
              </div>

              <FaQuoteLeft className={`text-xl absolute top-12 left-6 ${
                isDark ? 'text-indigo-400/50' : 'text-indigo-500/50'
              }`} />
              <FaQuoteRight className={`text-xl absolute bottom-12 right-6 ${
                isDark ? 'text-indigo-400/50' : 'text-indigo-500/50'
              }`} />

              <div className="pt-12 pb-8">
                <p className={`mb-6 text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {testimonial.text}
                </p>
                
                <div className={`border-t pt-6 ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h4 className={`text-lg font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm font-medium ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'border-indigo-400/20' : 'border-indigo-500/20'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full">
          <div className={`hidden md:block absolute top-1/4 left-20 w-24 h-24 rounded-full blur-3xl opacity-50 ${
            isDark ? 'bg-indigo-900' : 'bg-indigo-200'
          }`} />
          <div className={`hidden md:block absolute bottom-1/4 right-20 w-24 h-24 rounded-full blur-3xl opacity-50 ${
            isDark ? 'bg-indigo-900' : 'bg-indigo-200'
          }`} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;