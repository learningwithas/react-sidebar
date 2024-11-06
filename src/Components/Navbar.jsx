import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItem = ["Home", "About", "Contact", "Services"];

  return (
    <div className="navbar flex justify-between items-center mt-5 container m-auto bg-gradient-to-r from-blue-500 to-blue-700  text-white py-5 px-4 relative shadow-md ">
      {/* Logo Section */}
      <Link to="/" className="logo-heading flex gap-4 items-center">
        <div className="img">
          <img src="vite.svg" alt="Logo" className="w-8 h-8" />
        </div>
        <h1 className="text-xl font-semibold hidden sm:flex">Sidebar</h1>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="item-container gap-8 hidden md:flex">
        {navItem.map((item, idx) => (
          <li key={idx} className="px-3 py-2 hover:bg-blue-600 rounded-md">
            <Link to={`/${item.toLowerCase()}`} className="text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-white hover:bg-blue-600 transition duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {/* Toggle between hamburger and close icon */}
        {isMenuOpen ? (
          <FaTimes className="w-6 h-6" />
        ) : (
          <FaBars className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-20 right-0 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-lg w-48 text-center transition-transform duration-500 ease-out transform">
          {navItem.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="px-4 py-2 border-b border-blue-300 last:border-b-0 hover:bg-blue-600"
            >
              <Link to={`/${item.toLowerCase()}`} className="block text-white">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
