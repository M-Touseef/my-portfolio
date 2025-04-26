import React, { useState } from "react";
import { 
  FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane, FaTwitter 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Move static content to config objects
const SOCIAL_LINKS = [
  { icon: <FaEnvelope />, href: "mailto:your.email@example.com", label: "Email" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: <FaWhatsapp />, href: "https://wa.me/923001234567", label: "WhatsApp" },
  { icon: <FaTwitter />, href: "https://twitter.com/yourhandle", label: "Twitter" }
];

const QUOTES = [
  `"Great things in business are never done by one person. They're done by a team of people." - Steve Jobs`,
  `"Alone we can do so little; together we can do so much." - Helen Keller`,
  `"Innovation is the outcome of a habit, not a random act." - Sukant Ratnakar`
];

const ContactFooter = ({ copyrightName = "Muhammad Touseef" }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API call
      // await axios.post('/api/contact', formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-14">
            <motion.h2 
              className="text-4xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Let's Collaborate
              <FaPaperPlane className="inline-block ml-3 text-indigo-400 animate-float" />
            </motion.h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Drop me a message and let's create something amazing together.
            </p>
          </div>

          <AnimatePresence mode='wait'>
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="text-center p-8 bg-gray-800 rounded-xl max-w-lg mx-auto"
              >
                <div className="text-2xl text-emerald-400 mb-2">🎉 Message Sent!</div>
                <p className="text-gray-300 mb-4">I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-400">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="block text-sm text-gray-400">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="5"
                    className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="transition-transform group-hover:-translate-y-1" /> 
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 pt-12"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="flex gap-8 mb-8 flex-wrap justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-indigo-400 transition-colors group relative"
                  aria-label={link.label}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <p className="text-gray-400 text-center mb-4 max-w-2xl mx-auto">
              {currentQuote}
            </p>

            <div className="text-sm text-gray-500 text-center space-y-1">
              <p>© {new Date().getFullYear()} {copyrightName}. All rights reserved.</p>
              <p>Built with <span className="text-indigo-400">React</span> & <span className="text-indigo-400">Tailwind CSS</span></p>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactFooter;