import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaArrowDown, FaCode, FaShieldAlt, FaServer } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiTypescript, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si";

// Fallback for browsers that don't support IntersectionObserver
if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
  import("intersection-observer");
}

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
    fallbackInView: true // For browsers without IntersectionObserver support
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Simple fade-up animation that works everywhere
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Smooth easing
      }
    }
  };

  // Basic floating animation (works without CSS keyframes)
  const floatingAnimation = {
    y: [0, -15, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const featureCards = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Clean Code",
      description: "Modular, maintainable architecture"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security First",
      description: "OWASP standards implementation"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Scalable Systems",
      description: "High-performance backend solutions"
    }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simple grid pattern that works without CSS animations */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {/* Headline */}
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #60a5fa, #3b82f6)'
                }}
              >
                Hi, I'm Muhammad Touseef
              </span>
            </h1>
          </motion.div>

          {/* Subtitle - Simplified without typewriter */}
          <motion.div variants={fadeUp}>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              Backend Developer | Cybersecurity Specialist | Cloud Architect
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp}>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              I engineer <span className="text-blue-400 font-medium">secure</span>,{" "}
              <span className="text-blue-400 font-medium">scalable</span> backend systems with a focus on{" "}
              <span className="text-blue-400 font-medium">performance</span> and{" "}
              <span className="text-blue-400 font-medium">reliability</span>.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-blue-500/30 transition-all"
              >
                <div className="text-blue-400 mb-2">{card.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md"
            >
              View My Projects
              <FaArrowDown className="ml-2" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full border border-slate-600 hover:border-blue-400 transition-all shadow-md"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl text-gray-300 hover:text-blue-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-gray-300 hover:text-blue-400" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm text-gray-400 mb-1">Scroll</span>
        <FaArrowDown className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;