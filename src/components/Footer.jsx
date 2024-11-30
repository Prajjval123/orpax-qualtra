import React from "react";
import logo from "/assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto px-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center text-white animate-fade-in">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-cols-3 place-items-center justify-between items-start gap-8">
          {/* Logo & Address */}
          <div className="w-full flex flex-col gap-2 md:grid-cols-3 text-center sm:text-left">
            <h1 className="text-3xl">Address:</h1>
            <div>
              <p className="text-md leading-relaxed">
                97-A, (FFB) Indraprastha Estate Sector-30-33, Faridabad,
                Haryana-121003.
              </p>
              <p className="mt-2 text-md">
                <strong>M:</strong> +91-9810041039 <br />
                <strong>M:</strong> +91-9319644022
              </p>
              <p className="text-md mt-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:arnab.paul@orpaxqualtra.com"
                  className="text-red-500 hover:underline"
                >
                  arnab.paul@orpaxqualtra.com
                </a>
              </p>
            </div>
          </div>
          {/* Social Media */}

          <div className="h-full text-center md:grid-cols-3 flex flex-col gap-2">
            <h1 className="text-3xl text-nowrap">Follow us on:</h1>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <img
                    src="/assets/For_Developing/Contact_Section/twitter.png"
                    alt=""
                    className="w-8 h-8 bg-red-600 rounded-md"
                  />
                </a>
                <h6 className="text-md">Twitter</h6>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <img
                    src="/assets/For_Developing/Contact_Section/facebook.png"
                    alt=""
                    className="w-8 h-8 bg-red-600 rounded-md"
                  />
                </a>
                <h6 className="text-md">Facebook</h6>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <img
                    src="/assets/For_Developing/Contact_Section/instagram (1).png"
                    alt=""
                    className="w-8 h-8 bg-red-600 rounded-md"
                  />
                </a>
                <h6 className="text-md">Instagram</h6>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <img
                    src="/assets/For_Developing/Contact_Section/pinterest.png"
                    alt=""
                    className="w-8 h-8 bg-red-600 rounded-md"
                  />
                </a>
                <h6 className="text-md">Pinterest</h6>
              </div>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="h-full flex flex-col gap-4">
            <h3 className="text-3xl text-nowrap">Newsletter Signup</h3>
            <form className="flex flex-col justify-center">
              <div className="flex flex-col sm:flex gap-2 items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 w-full rounded-md bg-zinc-800 text-white font-thin text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 font-mono text-sm px-4 text-white p-2 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </div>
            </form>
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
            <p className="text-sm flex justify-end">
              © 2024 ORPAX QUALTRA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
