import React from "react";
import logo from "../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="mx-auto px-4">
        <h3 className="text-3xl text-center font-semibold mb-16">
          Stay Connected
        </h3>
        <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-cols-3 place-items-center justify-between items-start gap-8">
          {/* Logo & Address */}
          <div className="w-full sm:w-1/3 text-center sm:text-left">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-14 mb-4 mx-auto sm:mx-0 "
              />
            </div>
            <p className="text-sm leading-relaxed">
              97-A, (FFB) Indraprastha Estate Sector-30-33,
              <br />
              Faridabad, Haryana-121003.
            </p>
            <p className="mt-2 text-sm">
              <strong>Phone:</strong> +91-9810041039, +91-9319644022
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:arnab.paul@orpaxqualtra.com"
                className="text-red-500 hover:underline"
              >
                arnab.paul@orpaxqualtra.com
              </a>
            </p>
          </div>
          {/* Newsletter Signup */}
          <div className="h-full flex items-center justify-center">
            <div className="w-full sm:w-1/3">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Subscribe to our Newsletter
              </h3>
              <form className="flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-3/4 px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-3 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-transform transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}

          <div className="h-full sm:w-1/3 text-center flex items-center justify-center">
            <div className="flex justify-center gap-5">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaSquareXTwitter className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaFacebook className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaPinterest className="text-4xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Sitemap */}
        <div className="border-t border-gray-700 mt-10 pt-6 ">
          <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-cols-2 place-items-center gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-white">
                <i className="fas fa-home mr-1"></i> Home
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-info-circle mr-1"></i> About Us
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-box-open mr-1"></i> Products
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-briefcase mr-1"></i> Projects
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-users mr-1"></i> Clients
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-star mr-1"></i> Testimonials
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-shield-alt mr-1"></i> Privacy Policy
              </a>
            </div>
            {/* Copyright */}
            <p className="text-sm text-center">
              © 2024 ORPAX QUALTRA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
