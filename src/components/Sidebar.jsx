import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  "Home",
  "About",
  "Services",
  "Products",
  "Projects",
  "Clients",
  "Testimonials",
  "Partners",
  "Contact",
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-blackBackground flex items-center h-24 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/assets/logo.png" alt="Logo" className="w-24" />
        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:hidden`}
        >
          <button
            className="text-white text-2xl absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <ul className="mt-16 space-y-4 px-4">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="block text-white text-lg hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-white hover:text-gray-500 transition duration-100"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
