import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Dropdown icon
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "./Sidebar";

const links = [
  "Home",
  "About",
  "Services",
  "Products",
  "Projects",
  "Clients",
  "Testimonials",
  "Contact",
];

const Header = () => {
  const [selected, setSelected] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelection = (link) => {
    setSelected(link);
    if (link !== "Services") {
      setIsServiceDropdownOpen(false); 
    }
  };

  const handleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
    console.log(isServiceDropdownOpen);
  };

  const isHoverHandle = (hover) => {
    setIsHover(hover);
  };

  return (
    <header className="bg-blackBackground flex justify-center items-center h-24 text-white py-4">
      <div className="w-full mx-auto flex justify-between items-center">
        <img src="/assets/logo.png" alt="Logo" className="w-36 mr-auto" />
        {/* Hamburger Icon for Mobile */}
        <div className="ml-auto lg:hidden">
          {/* Hamburger Menu (Mobile View) */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          {/* Sidebar Component */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-6 mx-auto font-light">
            {links.map((link) => (
              <li key={link} className={`relative group flex items-center`} >
                <div
                  className={`flex items-center ${
                    link === "Services" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    handleSelection(link);
                    if (link == "Services") {
                      handleServiceDropdown();
                    } else {
                      isHoverHandle(false);
                    }
                  }}
                  onMouseEnter={() =>
                    link === "Services" && isHoverHandle(true)
                  }
                  onMouseLeave={() =>
                    link === "Services" && !isHover && isHoverHandle(false)
                  }
                >
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className={`hover:text-red-500 transform transition-transform duration-300 hover:scale-105 cursor-pointer text-md ${
                      selected === link
                        ? "text-red-500 underline"
                        : "text-white"
                    } ${link == 'Contact' ? 'bg-red-600 hover:bg-red-700 rounded p-2 hover:text-white' : ''}`}
                    onMouseOver={(link) =>
                      link === "Services" && isHoverHandle(true)
                    }
                    onMouseOut={(link) =>
                      link === "Services" && isHoverHandle(false)
                    }
                  >
                    {link}
                  </Link>
                </div>
                {/* Render Dropdown */}
                {link === "Services" && (
                  <div className="absolute top-full left-[-600%] z-50">
                    <ServicesDropdown
                      isServiceDropdownOpen={isServiceDropdownOpen}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
