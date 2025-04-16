// src/components/Hero.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Muhammad Touseef</h1>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">Backend Developer | Cybersecurity Learner | MERN Stack Enthusiast</h2>
        <p className="text-gray-400 mb-8">
          I build secure and scalable backend systems. Currently diving deep into cybersecurity, backend APIs, and real-world projects.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300" />
          </a>
        </div>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
