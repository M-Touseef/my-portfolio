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
    <nav className={`fixed w-full z-50 transition-all ${darkMode ? "bg-gray-900" : "bg-white shadow-md"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-black">Touseef.dev</div>

        {/* Centered Links */}
        <div className="flex-grow flex justify-center space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className={`text-black dark:text-gray-200 hover:text-indigo-500 relative group cursor-pointer font-medium transition`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="cursor-pointer text-black dark:text-white text-2xl md:hidden" onClick={toggleTheme}>
          {darkMode ? <HiSun /> : <HiMoon />}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-3xl text-black dark:text-white" onClick={toggleNav}>
          {navOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className={`md:hidden bg-white dark:bg-gray-800 backdrop-blur-xl px-6 pb-6 pt-4 shadow-lg transition-all`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={toggleNav}
              className="block text-lg text-black dark:text-gray-200 hover:text-indigo-500 py-2 border-b border-gray-200 dark:border-gray-700"
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