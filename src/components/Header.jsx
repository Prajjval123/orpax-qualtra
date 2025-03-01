// Header.jsx
import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "./Sidebar";
import { GlobalContext } from "../context/GlobalContext";
import gsap from "gsap";

const Header = () => {
  const [selected, setSelected] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { homepageData, loading, error } = useContext(GlobalContext);
  const links = homepageData?.header?.links || [];

  // GSAP Refs
  const headerRef = useRef(null);
  const linkRefs = useRef([]);

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

  // Animate header & nav links
  useEffect(() => {
    if (loading || error || !homepageData) return;

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }
      );
    }

    linkRefs.current.forEach((linkEl, i) => {
      if (!linkEl) return;
      gsap.fromTo(
        linkEl,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.inOut",
          delay: i * 0.2,
        }
      );
    });
  }, [loading, error, homepageData, links]);

  return (
    <header
      ref={headerRef}
      className="bg-blackBackground z-100 flex justify-center items-center h-24 py-4 pt-8 px-4 sm:px-6 lg:px-12"
    >
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/home">
          <div className="flex flex-col">
            <img src="/assets/logo.png" alt="Logo" className="w-44" />
            <p className="text-md text-gray-400 font-medium text-center">
              A Group of Company
            </p>
          </div>
        </Link>

        {/* Hamburger (mobile) */}
        <div className="ml-auto lg:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          {/* 
            If you want the <Sidebar> in the Header, you can keep it here. 
            But ideally, place <Sidebar> in App.jsx for a global overlay. 
          */}
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Desktop Nav */}
        <nav>
          <ul className="hidden lg:flex space-x-6 mx-auto font-light">
            {links.map((link, index) => (
              <li
                key={link}
                ref={(el) => (linkRefs.current[index] = el)}
                className="relative group flex items-center"
              >
                <div
                  className={`flex items-center ${
                    link === "Services" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    handleSelection(link);
                    if (link === "Services") {
                      handleServiceDropdown();
                    } else {
                      isHoverHandle(false);
                    }
                  }}
                  onMouseEnter={() => link === "Services" && isHoverHandle(true)}
                  onMouseLeave={() => link === "Services" && !isHover && isHoverHandle(false)}
                >
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className={`hover:text-red-500 transform transition-transform duration-300 hover:scale-105 cursor-pointer text-md lg:text-lg ${
                      selected === link ? "text-red-500 " : "text-white"
                    } ${
                      link === "Contact"
                        ? "bg-red-600 hover:bg-red-700 rounded p-0.5 px-2 text-white"
                        : ""
                    } `}
                    onMouseOver={() => link === "Services" && isHoverHandle(true)}
                    onMouseOut={() => link === "Services" && isHoverHandle(false)}
                    onClick={(e) => {
                      if (link === "Services") e.preventDefault();
                    }}
                  >
                    {link}
                  </Link>
                </div>

                {/* Services Dropdown */}
                {link === "Services" && (
                  <div className="absolute top-full left-[-900%]">
                    <ServicesDropdown
                      isServiceDropdownOpen={isServiceDropdownOpen}
                      handleServiceDropdown={handleServiceDropdown}
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
