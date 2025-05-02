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

const Hero = () => {
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
    { icon: <SiTypescript className="text-blue-500" />, size: "w-8 h-8 sm:w-10 sm:h-10", delay: 0, rotate: true },
    { icon: <SiNodedotjs className="text-green-500" />, size: "w-10 h-10 sm:w-12 sm:h-12", delay: 0.3, rotate: false },
    { icon: <SiMongodb className="text-green-400" />, size: "w-9 h-9 sm:w-11 sm:h-11", delay: 0.6, rotate: true },
    { icon: <SiDocker className="text-blue-400" />, size: "w-12 h-12 sm:w-14 sm:h-14", delay: 0.9, rotate: false },
    { icon: <FaAws className="text-amber-500" />, size: "w-10 h-10 sm:w-12 sm:h-12", delay: 1.2, rotate: true },
    ...(isMobile ? [] : [
      { icon: <SiKubernetes className="text-blue-400" />, size: "w-12 h-12", delay: 1.5, rotate: false },
      { icon: <SiPython className="text-blue-300" />, size: "w-10 h-10", delay: 1.8, rotate: true },
      { icon: <SiGraphql className="text-pink-500" />, size: "w-12 h-12", delay: 2.1, rotate: false },
      { icon: <SiPostgresql className="text-blue-300" />, size: "w-12 h-12", delay: 2.4, rotate: true },
      { icon: <GiArtificialIntelligence className="text-purple-400" />, size: "w-14 h-14", delay: 2.7, rotate: false }
    ])
  ];

  const featureCards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Modular, maintainable architecture",
      animation: { rotate: [0, 5, -5, 0] },
      color: "text-blue-400"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description: "OWASP standards implementation",
      animation: { scale: [1, 1.1, 1] },
      color: "text-emerald-400"
    },
    {
      icon: <FaServer />,
      title: "Scalable Systems",
      description: "High-performance backend solutions",
      animation: { y: [0, -5, 0] },
      color: "text-amber-400"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Native",
      description: "Serverless & containerized solutions",
      animation: { x: [0, 5, -5, 0] },
      color: "text-purple-400"
    }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 overflow-x-hidden"
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

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>

        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Muhammad Touseef
              </span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-sm sm:text-xl lg:text-3xl text-gray-100 mb-6 font-medium">
              <span className="inline-block bg-blue-600/20 px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-blue-500/30">
                <span className="text-blue-400 animate-pulse mr-2">❯</span>
                <span className="typewriter">
                  Backend Developer | Cybersecurity Specialist | Cloud Architect
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              I specialize in building <span className="font-semibold text-blue-300">secure</span>,{' '}
              <span className="font-semibold text-blue-300">high-performance</span> backend systems with{' '}
              <span className="font-semibold text-blue-300">99.9% uptime</span>. My solutions power applications for{' '}
              <span className="font-semibold text-blue-300">millions of users</span> worldwide.
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
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                <motion.div
                  animate={card.animation}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`${card.color} mb-2 sm:mb-4`}
                >
                  {React.cloneElement(card.icon, { className: "text-2xl sm:text-3xl" })}
                </motion.div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center">
                View My Projects
                <motion.span 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-3"
                >
                  <FaArrowDown />
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center bg-transparent hover:bg-slate-800/70 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-300 group shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Let's Collaborate</span>
              <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700/70 backdrop-blur-sm transition-all duration-300 group shadow-md hover:shadow-lg border border-slate-700/50 hover:border-blue-400/50"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl text-gray-100 group-hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800/70 hover:bg-slate-700/70 backdrop-blur-sm transition-all duration-300 group shadow-md hover:shadow-lg border border-slate-700/50 hover:border-blue-400/50"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl text-gray-100 group-hover:text-blue-400 transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 20]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
      >
        <span className="text-sm text-gray-300 mb-2 group-hover:text-blue-400 transition-colors">Explore More</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
          className="group-hover:text-blue-400 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;