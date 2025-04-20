import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager, Tech Solutions",
    text: "Working with Touseef was an absolute pleasure. His backend skills and API integration expertise saved our project timeline.",
    avatar: "👩💻" // Replace with image URL
  },
  {
    name: "Ali Raza",
    role: "Cybersecurity Lead, SafeNet",
    text: "He understands system architecture and secure development like a pro. Truly dependable and detail-oriented.",
    avatar: "👨💻" // Replace with image URL
  },
  {
    name: "Emily Carter",
    role: "Data Analyst, DataMinds Inc.",
    text: "Touseef's Python and ML knowledge helped us build powerful predictive models using pandas and numpy. Highly recommended!",
    avatar: "👩🔬" // Replace with image URL
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted Feedback
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights from colleagues and clients on technical expertise and collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
              </div>

              <FaQuoteLeft className="text-indigo-500 text-xl opacity-50 absolute top-12 left-6" />
              <FaQuoteRight className="text-indigo-500 text-xl opacity-50 absolute bottom-12 right-6" />

              <div className="pt-12 pb-8">
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl border-2 border-indigo-50 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full">
          <div className="hidden md:block absolute top-1/4 left-20 w-24 h-24 bg-indigo-100 dark:bg-gray-700 rounded-full blur-3xl opacity-50" />
          <div className="hidden md:block absolute bottom-1/4 right-20 w-24 h-24 bg-indigo-100 dark:bg-gray-700 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;