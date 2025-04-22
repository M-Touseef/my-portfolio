// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";           // ← import Hero
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactFooter from "./components/ContactFooter";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-all">
      <Navbar />

      <main className="pt-24">
        {/* Hero / Home Section */}
        <Hero />                              {/* ← render Hero */}

        {/* Portfolio Sections */}
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;
