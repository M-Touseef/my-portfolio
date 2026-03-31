import React, { useEffect, useRef, useState } from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaArrowDown, 
  FaCode, 
  FaShieldAlt, 
  FaServer, 
  FaCloud,
  FaAws 
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiDocker, 
  SiKubernetes,
  SiPython,
  SiReact,
  SiGraphql,
  SiPostgresql
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const stickerContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingTechIcons = [
    { icon: <SiTypescript className="text-blue-500 dark:text-blue-400" />, size: "w-8 h-8 sm:w-10 sm:h-10", delay: 0, rotate: true },
    { icon: <SiNodedotjs className="text-green-500 dark:text-green-400" />, size: "w-10 h-10 sm:w-12 sm:h-12", delay: 0.3, rotate: false },
    { icon: <SiMongodb className="text-green-400 dark:text-green-300" />, size: "w-9 h-9 sm:w-11 sm:h-11", delay: 0.6, rotate: true },
    { icon: <SiDocker className="text-blue-400 dark:text-blue-300" />, size: "w-12 h-12 sm:w-14 sm:h-14", delay: 0.9, rotate: false },
    { icon: <FaAws className="text-amber-500 dark:text-amber-400" />, size: "w-10 h-10 sm:w-12 sm:h-12", delay: 1.2, rotate: true },
    ...(isMobile ? [] : [
      { icon: <SiKubernetes className="text-blue-400 dark:text-blue-300" />, size: "w-12 h-12", delay: 1.5, rotate: false },
      { icon: <SiPython className="text-blue-300 dark:text-blue-200" />, size: "w-10 h-10", delay: 1.8, rotate: true },
      { icon: <SiGraphql className="text-pink-500 dark:text-pink-400" />, size: "w-12 h-12", delay: 2.1, rotate: false },
      { icon: <SiPostgresql className="text-blue-300 dark:text-blue-200" />, size: "w-12 h-12", delay: 2.4, rotate: true },
      { icon: <GiArtificialIntelligence className="text-purple-400 dark:text-purple-300" />, size: "w-14 h-14", delay: 2.7, rotate: false }
    ])
  ];

  const featureCards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Modular, maintainable architecture",
      animation: { rotate: [0, 5, -5, 0] },
      color: "text-blue-400 dark:text-blue-300"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "OWASP standards implementation",
      animation: { scale: [1, 1.1, 1] },
      color: "text-emerald-400 dark:text-emerald-300"
    },
    {
      icon: <FaServer />,
      title: "Scalable Systems",
      description: "High-performance backend solutions",
      animation: { y: [0, -5, 0] },
      color: "text-amber-400 dark:text-amber-300"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Native",
      description: "Serverless & containerized solutions",
      animation: { x: [0, 5, -5, 0] },
      color: "text-purple-400 dark:text-purple-300"
    }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className={`relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-x-hidden
        bg-gradient-to-br from-slate-100 via-white to-slate-100
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
        transition-colors duration-300`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingTechIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.size} flex items-center justify-center`}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
              rotate: item.rotate ? Math.random() * 360 : 0
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 0.8, 0.4],
              rotate: item.rotate ? [0, 180, 360] : 0,
              transition: {
                duration: 8 + Math.random() * 5,
                delay: item.delay,
                repeat: Infinity,
                repeatType: "loop"
              }
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[length:40px_40px]" />
        </div>

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
              transition: {
                duration: 5 + Math.random() * 10,
                delay: Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
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
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Built a deepfake detector with 96.76% F1 score.
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-sm sm:text-xl lg:text-3xl text-gray-800 dark:text-gray-200 mb-6 font-medium">
              <span className="inline-block bg-blue-100/50 dark:bg-blue-600/20 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-blue-200 dark:border-blue-500/30">
                <span className="text-blue-600 dark:text-blue-400 animate-pulse mr-2">❯</span>
                <span className="typewriter text-gray-800 dark:text-gray-200">
                  Full Stack & ML Engineer — I specialize in React, Node.js, and PyTorch. Currently focused on AI-powered applications and explainable machine learning.
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              I design <span className="font-semibold text-blue-600 dark:text-blue-400">ML‑powered systems</span> that move from research to production — from frame‑level deepfake detection with{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">96.76% F1</span> on FaceForensics++ C23 to secure, full‑stack apps ready for real users.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-6xl mx-auto"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                <motion.div
                  animate={card.animation}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`${card.color} mb-2 sm:mb-4`}
                >
                  {React.cloneElement(card.icon, { className: "text-2xl sm:text-3xl" })}
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <motion.span 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-3"
                >
                  <FaArrowDown />
                </motion.span>
              </span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center bg-transparent hover:bg-gray-100/50 dark:hover:bg-slate-800/70 text-gray-800 dark:text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-300 group shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Get in Touch</span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://github.com/M-Touseef"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/70 dark:bg-slate-800/70 hover:bg-gray-100/70 dark:hover:bg-slate-700/70 backdrop-blur-sm transition-all duration-300 group shadow-md hover:shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-400/50"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-touseef-ab3370371"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/70 dark:bg-slate-800/70 hover:bg-gray-100/70 dark:hover:bg-slate-700/70 backdrop-blur-sm transition-all duration-300 group shadow-md hover:shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-400/50"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator removed as per request */}
    </section>
  );
};

export default Hero;