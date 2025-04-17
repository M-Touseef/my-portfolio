// src/components/Footer.jsx
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:your.email@example.com"
            className="text-white hover:text-blue-400 transition-colors text-3xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition-colors text-3xl"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-lg mb-4">Feel free to reach out for collaborations or inquiries!</p>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Muhammad Touseef — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
