import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <FaEnvelope />,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/923001234567",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="relative bg-gray-900 text-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Let's Collaborate
              <FaPaperPlane className="inline-block ml-3 text-indigo-400" />
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Drop me a message and let's create something amazing together.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-center p-8 bg-gray-800 rounded-xl max-w-lg mx-auto"
            >
              <div className="text-2xl text-emerald-400 mb-2">🎉 Message Sent!</div>
              <p className="text-gray-300">I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none mb-6"
              />
              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Social Links & Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-12"
        >
          <div className="flex flex-col items-center">
            <div className="flex gap-8 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl ${link.color} transition-colors`}
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <p className="text-gray-400 text-center mb-4">
              "Great things in business are never done by one person. They're done by a team of people."
              <br />- Steve Jobs
            </p>

            <div className="text-sm text-gray-500 text-center">
              <p>© {new Date().getFullYear()} Muhammad Touseef. All rights reserved.</p>
              <p>Built with React & Tailwind CSS</p>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactFooter;