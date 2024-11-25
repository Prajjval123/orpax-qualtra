import React from "react";
import { Link } from "react-router-dom";

const services = [['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Products', '/products'],
  ['Projects', 'projects'],
  ['Clients', '/clients'],
  ['Testimonials', '/testimonials'],
  ['Partners', '/partners'],
  ['Contact', '/contact']]


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
    className={`fixed top-0 right-0 h-2/3 bg-gray-800 z-40 transform transition-transform duration-300 rounded-md ${
      isSidebarOpen ? "translate-x-0" : "translate-x-full"
    } w-3/4 sm:w-64 md:w-72`}
  >
    {/* Close Button */}
    <button
      onClick={toggleSidebar}
      className="absolute top-4 left-4 text-white text-2xl hover:text-red-400 transition-colors duration-200"
    >
      ×
    </button>

    {/* Sidebar Links */}
    <ul className="flex flex-col items-center mt-16 space-y-4 text-white">
      {services.map((service, index) => (
        <li className="hover:text-gray-400" key={index}>
          <Link to={`${service[1]}`} onClick={toggleSidebar}>
            {service[0]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Sidebar;
