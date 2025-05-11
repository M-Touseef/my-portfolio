import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleNav = () => setNavOpen(!navOpen);

  const links = [
    { name: "Home", to: "home" },
    { name: "Experience", to: "experience" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to) => setActiveLink(to);

  const navVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 15 } }
  };

  const linkHover = { scale: 1.1, color: isDark ? '#a78bfa' : '#9333EA' };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full z-50 backdrop-blur-md ${
        isDark 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      } border-b ${scrolled ? 'shadow-xl' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="home" smooth duration={500} offset={-120} onClick={() => handleSetActive('home')}
            className={`text-2xl font-extrabold ${
              isDark ? 'text-purple-400' : 'text-indigo-600'
            } cursor-pointer`}>
            Muhammad Touseef
          </Link>
        </motion.div>

        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FiSun className="w-6 h-6 text-purple-400" />
            ) : (
              <FiMoon className="w-6 h-6 text-indigo-600" />
            )}
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <motion.div key={link.to} whileHover={linkHover} transition={{ type: 'spring' }}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-100}
                  spy
                  onSetActive={() => handleSetActive(link.to)}
                  className={`relative ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  } font-medium pb-1 ${activeLink === link.to ? (isDark ? 'text-purple-400' : 'text-indigo-600') : ''}`}
                >
                  {link.name}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5"
                    style={{ backgroundColor: isDark ? '#a78bfa' : '#9333EA' }}
                    initial={false}
                    animate={{ width: activeLink === link.to ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: isDark ? '0 0 8px rgba(167,139,250,0.5)' : '0 0 8px rgba(30,64,175,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 ${
                isDark 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              } rounded-lg transition-colors`}
            >
              <FiDownload className="w-5 h-5" /> Resume
            </motion.a>
          </div>

          {/* Mobile Menu */}
          <motion.button
            onClick={toggleNav}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {navOpen ? (
              <HiOutlineX className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            ) : (
              <HiOutlineMenu className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            className={`md:hidden backdrop-blur-sm ${
              isDark ? 'bg-gray-900/90' : 'bg-white/90'
            }`}
          >
            <div className="flex flex-col px-4 pt-4 pb-6 space-y-3">
              {links.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: idx * 0.05 } }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-100}
                    spy
                    onClick={() => { setNavOpen(false); handleSetActive(link.to); }}
                    className={`block text-lg font-medium ${
                      activeLink === link.to 
                        ? (isDark ? 'text-purple-400' : 'text-indigo-600') 
                        : (isDark ? 'text-gray-300' : 'text-gray-700')
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="/resume.pdf"
                download
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: links.length * 0.05 } }}
                className={`mt-2 flex items-center gap-2 text-lg font-medium px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
                onClick={() => setNavOpen(false)}
              >
                <FiDownload className="w-5 h-5" /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;