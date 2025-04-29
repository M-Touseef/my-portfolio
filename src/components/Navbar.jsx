import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX, HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Professional resume sections
  const links = [
    { name: "Home", to: "home" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  // Professional color scheme
  const colors = {
    light: {
      primary: "#1e40af",    // Deep blue
      secondary: "#9333ea",  // Professional purple
      text: "#1f2937",       // Dark gray
      bg: "#f9fafb",         // Light gray background
      border: "#e5e7eb"      // Light border
    },
    dark: {
      primary: "#60a5fa",    // Light blue
      secondary: "#a78bfa",  // Light purple
      text: "#f3f4f6",       // Light text
      bg: "#111827",         // Dark background
      border: "#374151"      // Dark border
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      darkMode 
        ? `bg-[${colors.dark.bg}]/95 backdrop-blur-md border-b border-[${colors.dark.border}]` 
        : `bg-[${colors.light.bg}]/95 backdrop-blur-md border-b border-[${colors.light.border}]`
    } ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Professional Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              offset={-120}  // Adjusted offset for better alignment
              className="flex items-center text-xl font-bold cursor-pointer"
              aria-label="Navigate to home section"
              onSetActive={() => handleSetActive("home")}
            >
              <span className={`${darkMode ? "text-[#60a5fa]" : "text-[#1e40af]"} hover:opacity-80 transition-opacity`}>
                Muhammad Touseef
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}  // Consistent offset for all sections
                spy={true}
                onSetActive={() => handleSetActive(link.to)}
                className={`px-3 py-2 text-sm font-medium relative group ${
                  darkMode 
                    ? `text-[${colors.dark.text}] hover:text-[${colors.dark.primary}]` 
                    : `text-[${colors.light.text}] hover:text-[${colors.light.primary}]`
                } transition-colors`}
                activeClass={`${darkMode ? "text-[#60a5fa]" : "text-[#1e40af]"}`}
              >
                {link.name}
                <motion.span 
                  className={`absolute left-1/2 -bottom-1 h-0.5 ${
                    activeLink === link.to 
                      ? `w-full left-0 ${darkMode ? "bg-[#60a5fa]" : "bg-[#1e40af]"}`
                      : `w-0 ${darkMode ? "bg-[#60a5fa]" : "bg-[#1e40af]"} group-hover:w-full group-hover:left-0`
                  }`}
                  initial={false}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            ))}

            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf" // Replace with your resume path
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                darkMode 
                  ? "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
                  : "bg-[#1e40af] text-white hover:bg-[#1e3a8a]"
              } transition-colors`}
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </motion.a>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
            >
              {darkMode ? (
                <HiSun className="w-5 h-5 text-[#e5e7eb] hover:text-[#fbbf24]" />
              ) : (
                <HiMoon className="w-5 h-5 text-[#4b5563] hover:text-[#1e40af]" />
              )}
            </motion.button>

            <motion.button
              onClick={toggleNav}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              aria-label={`${navOpen ? 'Close' : 'Open'} navigation menu`}
            >
              {navOpen ? (
                <HiOutlineX className={`w-6 h-6 ${darkMode ? "text-[#e5e7eb]" : "text-[#4b5563]"}`} />
              ) : (
                <HiOutlineMenu className={`w-6 h-6 ${darkMode ? "text-[#e5e7eb]" : "text-[#4b5563]"}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {navOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2, delay: 0.1 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 }
                }
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-2 space-y-1">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-100}  // Consistent offset for mobile
                      spy={true}
                      onClick={() => {
                        toggleNav();
                        handleSetActive(link.to);
                      }}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors mx-2 ${
                        darkMode 
                          ? activeLink === link.to
                            ? "bg-[#1e1b4b] text-[#a5b4fc]"
                            : `text-[${colors.dark.text}] hover:bg-[#1e1b4b] hover:text-[${colors.dark.primary}]`
                          : activeLink === link.to
                            ? "bg-[#eff6ff] text-[#1e40af]"
                            : `text-[${colors.light.text}] hover:bg-[#eff6ff] hover:text-[${colors.light.primary}]`
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Resume Download Button */}
                <motion.a
                  href="/resume.pdf"
                  download
                  variants={mobileLinkVariants}
                  transition={{ duration: 0.2, delay: links.length * 0.05 }}
                  className={`flex items-center gap-2 px-4 py-3 mx-2 text-sm font-medium rounded-lg ${
                    darkMode 
                      ? "bg-[#4f46e5] text-white hover:bg-[#4338ca]"
                      : "bg-[#1e40af] text-white hover:bg-[#1e3a8a]"
                  } transition-colors`}
                  onClick={toggleNav}
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;