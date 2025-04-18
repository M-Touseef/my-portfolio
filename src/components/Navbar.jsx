import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX, HiSun, HiMoon } from "react-icons/hi";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
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
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-50"} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors">
          Touseef.dev
        </div>

        {/* Centered Links */}
        <div className="flex-grow flex justify-center space-x-8 items-center max-md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={`text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 relative group cursor-pointer font-medium transition-all duration-300`}
              activeClass="text-indigo-600 dark:text-indigo-400"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-6">
          <div 
            className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl transition-colors"
            onClick={toggleTheme}
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </div>

          {/* Mobile Toggle */}
          <div 
            className="md:hidden text-3xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            onClick={toggleNav}
          >
            {navOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 pb-4 transition-all`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleNav}
              className="block text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 py-3 transition-colors"
              activeClass="text-indigo-600 dark:text-indigo-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;