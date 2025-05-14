import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import img1 from "../assets/img1.jpg"; // Make sure to update this path correctly

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 bg-black text-white flex justify-between items-center p-4 z-50 shadow-lg">
      {/* Left - Profile Picture */}
      <div className="flex items-center">
        <img
          src={img1}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Right - Social Icons */}
      <div className="flex gap-6 text-lg">
        <a
          href="https://www.linkedin.com/in/nivedithakulkarni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-3xl hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NivedithaKulkarni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-3xl hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      
      </div>
    </nav>
  );
};

export default Navbar;
