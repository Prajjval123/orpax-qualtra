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
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-40 transform transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ×
      </button>

      {/* Sidebar Links */}
      <ul className="mt-16 space-y-4 text-white px-4">
        {services.map((service, index) => <li className="hover:text-gray-400" key={index}>
          <Link to={`${service[1]}`} onClick={toggleSidebar} >{service[0]} </Link>
        </li>)}
      </ul>
    </div>
  );
};

export default Sidebar;
