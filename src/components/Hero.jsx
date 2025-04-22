import React, { useEffect, useRef } from "react";
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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const stickerContainerRef = useRef(null);

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
    { icon: <SiTypescript className="text-blue-500" />, size: "w-10 h-10", delay: 0, rotate: true },
    { icon: <SiNodedotjs className="text-green-500" />, size: "w-12 h-12", delay: 0.3, rotate: false },
    { icon: <SiMongodb className="text-green-400" />, size: "w-11 h-11", delay: 0.6, rotate: true },
    { icon: <SiDocker className="text-blue-400" />, size: "w-14 h-14", delay: 0.9, rotate: false },
    { icon: <FaAws className="text-amber-500" size={24} />, size: "w-12 h-12", delay: 1.2, rotate: true },
    { icon: <SiKubernetes className="text-blue-400" />, size: "w-12 h-12", delay: 1.5, rotate: false },
    { icon: <SiPython className="text-blue-300" />, size: "w-10 h-10", delay: 1.8, rotate: true },
    { icon: <SiGraphql className="text-pink-500" />, size: "w-12 h-12", delay: 2.1, rotate: false },
    { icon: <SiPostgresql className="text-blue-300" />, size: "w-12 h-12", delay: 2.4, rotate: true },
    { icon: <GiArtificialIntelligence className="text-purple-400" />, size: "w-14 h-14", delay: 2.7, rotate: false }
  ];

  const featureCards = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Clean Code",
      description: "Modular, maintainable architecture",
      animation: { rotate: [0, 5, -5, 0] }
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Security First",
      description: "OWASP standards implementation",
      animation: { scale: [1, 1.1, 1] }
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Scalable Systems",
      description: "High-performance backend solutions",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: <FaCloud className="text-3xl" />,
      title: "Cloud Native",
      description: "Serverless & containerized solutions",
      animation: { x: [0, 5, -5, 0] }
    }
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
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

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
        </div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
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
      <div className="max-w-6xl mx-auto text-center relative z-10">
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
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Muhammad Touseef
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeUp}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 font-mono">
              <span className="text-blue-400 animate-pulse">❯</span>{" "}
              <span className="typewriter">
                Backend Developer | Cybersecurity Specialist | Cloud Architect
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeUp}>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              I engineer <span className="text-blue-400 font-medium">secure</span>,{" "}
              <span className="text-blue-400 font-medium">scalable</span> backend systems with a focus on{" "}
              <span className="text-blue-400 font-medium">performance</span> and{" "}
              <span className="text-blue-400 font-medium">reliability</span>. Currently building robust APIs and
              diving deep into cloud-native architectures.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-xl"
              >
                <motion.div
                  animate={card.animation}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-blue-400 mb-3"
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              View My Projects
              <motion.span 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-3"
              >
                <FaArrowDown />
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full border border-slate-600 hover:border-blue-400 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Let's Collaborate
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 group shadow-md"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 group shadow-md"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl text-gray-300 group-hover:text-blue-400 transition-colors" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center cursor-pointer"
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
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
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
            className="text-gray-400"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Enhanced Sticker Elements */}
      <div ref={stickerContainerRef} className="absolute right-8 bottom-8 hidden lg:block">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            transition: { delay: 1.5, type: "spring", stiffness: 200 }
          }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="relative cursor-pointer"
        >
          <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-sm animate-pulse"></div>
          <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              <FaServer className="text-3xl text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;