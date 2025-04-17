import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Project Manager, Tech Solutions",
    text: "Working with Touseef was an absolute pleasure. His backend skills and API integration expertise saved our project timeline.",
  },
  {
    name: "Ali Raza",
    role: "Cybersecurity Lead, SafeNet",
    text: "He understands system architecture and secure development like a pro. Truly dependable and detail-oriented.",
  },
  {
    name: "Emily Carter",
    role: "Data Analyst, DataMinds Inc.",
    text: "Touseef's Python and ML knowledge helped us build powerful predictive models using pandas and numpy. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          What People Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
