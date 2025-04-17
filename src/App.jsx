import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-all">
      <Navbar />

      <main className="pt-24">
        {/* Hero / Home Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Muhammad Touseef
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Backend Engineer specializing in secure systems, efficient APIs, and scalable architectures.
            Bridging cybersecurity with intelligent backend logic.
          </p>
          <a
            href="/Touseef_Resume.pdf"
            download
            className="mt-6 inline-block px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
          >
            Download Resume
          </a>
        </section>

        {/* Portfolio Sections */}
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
