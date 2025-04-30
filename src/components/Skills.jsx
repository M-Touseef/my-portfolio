import React, { useRef, useEffect } from "react";
import {
  FaReact, FaNodeJs, FaGithub, FaLinux, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiFirebase,
  SiPandas, SiNumpy, SiTensorflow, SiPython, SiTypescript,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BsTerminal, BsShieldLock } from "react-icons/bs";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={28} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={28} /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" size={28} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={28} /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" size={28} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" size={28} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" size={28} /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-300" size={28} /> },
    { name: "Linux CLI", icon: <FaLinux className="text-gray-800 dark:text-gray-300" size={28} /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-600" size={28} /> },
    { name: "Pandas", icon: <SiPandas className="text-blue-800" size={28} /> },
    { name: "NumPy", icon: <SiNumpy className="text-blue-700" size={28} /> },
    { name: "Python", icon: <SiPython className="text-blue-600" size={28} /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" size={28} /> },
    { name: "Machine Learning", icon: <GiArtificialIntelligence className="text-purple-600" size={28} /> },
    { name: "Metasploit", icon: <BsTerminal className="text-red-500" size={28} /> },
    { name: "Cybersecurity", icon: <BsShieldLock className="text-blue-600" size={28} /> },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 overflow-hidden transition-colors duration-300"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
            variants={itemVariants}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Technologies I work with to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Desktop Swiper */}
        <motion.div
          className="hidden md:block"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper pb-16"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!w-[200px] !h-[200px]">
                <motion.div
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -10, scale: 1.05 }}
                  variants={itemVariants}
                >
                  <div className="mb-4">{skill.icon}</div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Mobile Swiper */}
        <motion.div
          className="md:hidden"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper pb-10"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="!h-[120px]">
                <motion.div
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;