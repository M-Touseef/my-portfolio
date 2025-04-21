import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX, HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference
    return localStorage.getItem('theme') === 'dark';
  });
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
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
    // Persist theme preference
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      darkMode 
        ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" 
        : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
    } ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"
            aria-label="Navigate to home section"
          >
            Touseef.dev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                className={`px-3 py-2 text-sm font-medium ${
                  darkMode 
                    ? "text-gray-300 hover:text-indigo-400" 
                    : "text-gray-600 hover:text-indigo-600"
                } transition-colors relative group`}
                activeClass="!text-indigo-600 dark:!text-indigo-400"
              >
                {link.name}
                <span className={`absolute left-1/2 -bottom-1 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                  darkMode ? "bg-opacity-90" : "bg-opacity-100"
                }`} />
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
            >
              {darkMode ? (
                <HiSun className="w-6 h-6 text-gray-300 hover:text-indigo-400 transition-colors" />
              ) : (
                <HiMoon className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors" />
              )}
            </button>

            <button
              onClick={toggleNav}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`${navOpen ? 'Close' : 'Open'} navigation menu`}
            >
              {navOpen ? (
                <HiOutlineX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <HiOutlineMenu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          navOpen ? "max-h-96" : "max-h-0"
        }`}
        >
          <div className="pt-4 pb-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={toggleNav}
                className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                  darkMode 
                    ? "text-gray-300 hover:bg-gray-800 hover:text-indigo-400" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                } transition-colors mx-2`}
                activeClass="!text-indigo-600 dark:!text-indigo-400 bg-gray-100 dark:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;