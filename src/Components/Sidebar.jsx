import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaUser,
  FaEnvelope,
  FaServicestack,
} from "react-icons/fa";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navItem = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUser /> },
    { name: "Contact", icon: <FaEnvelope /> },
    { name: "Services", icon: <FaServicestack /> },
  ];

  return (
    <div
      className={`h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white shadow-lg transition-all duration-300 ease-in-out ${
        isClicked ? "w-64" : "w-28"
      }`}
    >
      {/* Sidebar Header with Logo and Toggle Button */}
      <div className="flex items-center justify-between py-5 px-2">
        <div className="flex items-center">
          <img src="vite.svg" alt="Logo" className="w-8 h-8" />
        </div>

        <button
          onClick={() => setIsClicked(!isClicked)}
          className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white focus:outline-none"
        >
          {isClicked ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="mt-10 space-y-4">
        {navItem.map((item, idx) => (
          <li key={idx} className="group relative">
            <Link
              to={`/${item.name.toLowerCase()}`}
              className="block py-3 px-5 text-lg font-medium text-white transition-all duration-200 hover:bg-blue-700 rounded-md group-hover:pl-6 flex items-center space-x-4"
            >
              <span className="text-xl">{item.icon}</span>
              {isClicked && <span>{item.name}</span>}
            </Link>
            <span className="absolute top-0 left-0 h-full w-1 bg-blue-500 transition-all duration-200 group-hover:w-2"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
