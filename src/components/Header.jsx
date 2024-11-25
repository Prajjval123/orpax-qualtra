import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa"; // Dropdown icon
import ServicesDropdown from "./ServicesDropdown";

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
      setIsServiceDropdownOpen(false); // Close dropdown for other links
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
    <header className="bg-blackBackground flex justify-center items-center h-24 text-white py-4 px-8">
      <div className="w-full mx-auto flex justify-between items-center">
        <img src="/assets/logo.png" alt="Logo" className="w-24 mr-auto" />
        {/* Hamburger Icon for Mobile */}
        <div className="ml-auto lg:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        <nav>
          <ul className="hidden lg:flex space-x-6 mx-auto">
            {links.map((link) => (
              <li key={link} className="relative group">
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
                    to={link === "Services" ? "#" : `/${link.toLowerCase()}`}
                    className={`hover:text-gray-500 transition duration-100 ${
                      selected === link
                        ? "text-gray-500 underline"
                        : "text-white"
                    }`}
                    onMouseOver={(link) =>
                      link === "Services" && isHoverHandle(true)
                    }
                    onMouseOut={(link) =>
                      link === "Services" && isHoverHandle(false)
                    }
                  >
                    {link}
                  </Link>
                  {link === "Services" && (
                    <FaChevronDown
                      className={`ml-2 ${
                        isHover ? "text-gray-500" : "text-white"
                      } transition-transform duration-200 ${
                        isServiceDropdownOpen ? "rotate-180" : ""
                      } `}
                    />
                  )}
                </div>
                {/* Render Dropdown */}
                {link === "Services" && (
                  <div className="absolute top-8 left-0">
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
