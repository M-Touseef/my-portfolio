// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white text-slate-900 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          I'm Muhammad Touseef, a passionate Backend Developer and cybersecurity learner from the University of Central Punjab. I specialize in building robust and scalable backend applications using the MERN stack. I'm also exploring the world of cybersecurity, digital fraud prevention, and blockchain-powered solutions to prepare for my Final Year Project.
        </p>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
          With a strong background in backend development, academic excellence, and real-world exposure through university societies and projects, I aim to contribute to impactful tech solutions. I'm continuously learning and evolving through online courses, hands-on projects, and teamwork.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-slate-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
            <p>Bachelor in Software Engineering<br />University of Central Punjab</p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">👨‍💻 Interests</h3>
            <p>Backend APIs, Cybersecurity, Blockchain, MERN Stack, Digital Fraud Detection</p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌐 Ongoing Learning</h3>
            <p>Coursera Specializations (IBM, AI, Blockchain, React), React + Tailwind Projects</p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">💼 Career Goal</h3>
            <p>To become a skilled backend engineer, cybersecurity expert, and blockchain project contributor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
