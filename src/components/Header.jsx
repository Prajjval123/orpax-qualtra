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
  const isLinkDisabled = true;

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
  };

  const isHoverHandle = (hover) => {
    setIsHover(hover);
  };

  const handleLink = (e) => {
    // isLinkDisabled  = 0 e.preventDefault()
    console.log(e.target.value());
    console.log("geee");
  };

  return (
    <header className="bg-blackBackground flex justify-center items-center h-24 py-4 pt-8 z-50">
      <div className="w-full mx-auto flex justify-between items-center">
        <Link to="/home">
          <div className="flex flex-col animate-slide-down">
            <img src="/assets/logo.png" alt="Logo" className="w-44 " />
            <p className="text-md text-gray-400 font-medium text-center">
              A Group of Company
            </p>
          </div>
        </Link>
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
            {links.map((link, index) => {
              const animationDelay = `delay-${(index + 1) * 1000}ms`;
              return (
                <li
                  key={link}
                  className={`relative group flex items-center animate-slide-down`}
                >
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
                      className={`hover:text-red-500  ${
                        link === "Contact" ? "hover:text-white" : ""
                      } transform transition-transform duration-300 hover:scale-105 cursor-pointer text-md lg:text-lg ${
                        selected === link ? "text-red-500" : "text-white"
                      } ${
                        link === "Contact"
                          ? "bg-red-600 hover:bg-red-700 rounded p-0.5 px-2 text-white"
                          : ""
                      }`}
                      onMouseOver={(link) =>
                        link === "Services" && isHoverHandle(true)
                      }
                      onMouseOut={(link) =>
                        link === "Services" && isHoverHandle(false)
                      }
                      onClick={(e) => {
                        if (link == "Services") return e.preventDefault();
                      }}
                    >
                      {link}
                    </Link>
                  </div>
                  {/* Render Dropdown */}
                  {link === "Services" && (
                    <div className="absolute top-full left-[-900%]">
                      <ServicesDropdown
                        isServiceDropdownOpen={isServiceDropdownOpen}
                        handleServiceDropdown={handleServiceDropdown}
                      />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
