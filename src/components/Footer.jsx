import React from "react";
import logo from "/assets/logo.png";

const icons = [
  {
    name: "Twitter",
    image: "/assets/For_Developing/Contact_Section/twitter.png",
  },
  {
    name: "Facebook",
    image: "/assets/For_Developing/Contact_Section/facebook.png",
  },
  {
    name: "Instagram",
    image: "/assets/For_Developing/Contact_Section/instagram (1).png",
  },
  {
    name: "Pinterest",
    image: "/assets/For_Developing/Contact_Section/pinterest.png",
  },
];

const sitemap = [
  "Home",
  "About Us",
  "Products",
  "Projects",
  "Clients",
  "Testimonials",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="mx-auto px-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center text-white animate-fade-in">
          Contact
        </h1>
        <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 place-items-center justify-between items-start gap-8">
          {/* Logo & Address */}
          <div className="w-full flex flex-col gap-2 md:grid-cols-3 text-center lg:text-left">
            <h1 className="text-3xl">Address:</h1>
            <div>
              <p className="text-md leading-relaxed">
                97-A, (FFB) Indraprastha Estate Sector-30-33, Faridabad, Haryana-121003.
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
            <div className="flex flex-col justify-center gap-3 ">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  className="flex gap-2 items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <img
                      src={icon.image}
                      alt=""
                      className="w-8 h-8 bg-red-600 rounded-md"
                    />
                  </a>
                  <h6 className="text-lg">{icon.name}</h6>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="h-full flex flex-col gap-4">
            <h3 className="text-3xl text-nowrap">Newsletter Signup</h3>
            <form className="flex flex-col justify-center">
              <div className="flex flex-col sm:flex gap-2 items-center ">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 w-full rounded-md bg-zinc-800 text-white font-thin text-sm focus:ring-2 focus:ring-red-500 focus:outline-none transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
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
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-cols-2 gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-md  md:justify-start">
              {sitemap.map((site) => (
                <a href="#" className="hover:text-white">
                  {site}
                </a>
              ))}
            </div>
            {/* Copyright */}
            <p className="text-md flex justify-center text-center lg:justify-end">
              © 2024 ORPAX QUALTRA. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
