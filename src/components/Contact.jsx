import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (e.g., sending the message to your backend or email)
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title and Tagline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Whether you're looking for collaboration or have any questions, feel free to reach out!
        </p>

        {/* Form Submission Confirmation */}
        {isSubmitted ? (
          <div className="text-lg text-green-500 mb-6">
            Thank you for your message! I'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social Media Links - Horizontal Layout */}
        <div className="mt-8 flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:example@email.com"
            className="text-3xl text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
