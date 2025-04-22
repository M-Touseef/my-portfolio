import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import shapesAnimation from "../assets/animations/shapes.json"; // Lottie JSON

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Backend Developer", "Cybersecurity Specialist", "Cloud Architect"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gray-900 flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Parallax Background Shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Lottie animationData={shapesAnimation} loop autoplay />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Hi, I'm Muhammad Touseef
        </motion.h1>

        <motion.h2
          className="text-2xl text-gray-300 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span aria-live="polite">{text}</span>
          <Cursor cursorColor="#EC4899" />
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-8 leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          I craft <strong className="text-pink-400">secure</strong>,{" "}
          <strong className="text-purple-400">scalable</strong> systems
          optimized for <strong className="text-pink-400">performance</strong>{" "}
          and <strong className="text-purple-400">reliability</strong>.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-pink-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Collaborate
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, color: "#EC4899" }}
          >
            <FaGithub className="text-2xl text-gray-400" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, color: "#7C3AED" }}
          >
            <FaLinkedin className="text-2xl text-gray-400" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1"
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gray-400 text-sm">Scroll</span>
        <FaArrowDown className="text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
