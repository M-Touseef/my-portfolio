import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
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

  const linkHover = { scale: 1.1, color: '#9333EA' };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 ${scrolled ? 'shadow-xl' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="home" smooth duration={500} offset={-120} onClick={() => handleSetActive('home')}
            className="text-2xl font-extrabold text-indigo-600 cursor-pointer">
            Muhammad Touseef
          </Link>
        </motion.div>

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
                className={`relative text-gray-700 font-medium pb-1 ${activeLink === link.to ? 'text-indigo-600' : ''}`}
              >
                {link.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 bg-indigo-600"
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(30,64,175,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            <FiDownload className="w-5 h-5" /> Resume
          </motion.a>
        </div>

        {/* Mobile Menu */}
        <motion.button
          onClick={toggleNav}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-gray-600"
        >
          {navOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3 } }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            className="md:hidden bg-white/90 backdrop-blur-sm"
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
                    className={`block text-lg font-medium ${activeLink === link.to ? 'text-indigo-600' : 'text-gray-700'}`}
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
                className="mt-2 flex items-center gap-2 text-lg font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg"
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
