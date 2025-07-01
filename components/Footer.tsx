"use client";

import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white dark:bg-black-100 border-t border-gray-200 dark:border-gray-800">
      {/* Background Grid Pattern */}
      <div className="absolute top-0 left-0 w-full h-full dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Title */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-black dark:text-white">
            E-Cell IET Lucknow
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Igniting Entrepreneurship.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl text-neutral-600 dark:text-neutral-300">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:ecell@ietlucknow.ac.in" className="hover:text-emerald-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="relative z-10 text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} E-Cell IET Lucknow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
