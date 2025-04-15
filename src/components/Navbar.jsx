// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      <h1 className="font-thin text-2xl italic">MyPortfolio</h1>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <Link to={section} smooth duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <div onClick={toggleNav} className="md:hidden z-10 cursor-pointer">
        {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {/* Mobile Menu */}
      {navOpen && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section} className="py-6 text-4xl">
              <Link onClick={toggleNav} to={section} smooth duration={500}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
