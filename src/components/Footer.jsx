import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";

const icons = [
  {
    name: "Twitter",
    image: "/assets/For_Developing/Contact_Section/Twitter.png",
  },
  {
    name: "Facebook",
    image: "/assets/For_Developing/Contact_Section/FB.png",
  },
  {
    name: "Instagram",
    image: "/assets/For_Developing/Contact_Section/Insta.png",
  },
  {
    name: "Pinterest",
    image: "/assets/For_Developing/Contact_Section/Pinterest.png",
  },
];

const sitemap = [
  "Home",
  "About",
  "Products",
  "Projects",
  "Clients",
  "Testimonials",
  "Privacy Policy",
  "Contact"
];

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/thank-you");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onChange = (value) => {
    setVerified(!verified);
  };

  return (
    <footer className="p-10 ">
      <div className="mx-auto lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-12 text-center animate-fade-in">
          Contact
        </h1>
        <div className="relative grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 place-items-center justify-between items-start gap-8">
          {/* Logo & Address */}
          <div className="w-full flex flex-col gap-2 md:grid-cols-3 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl">Address:</h1>
            <div className="text-gray-300">
              <p className="text-md md:text-lg lg:text-md leading-relaxed">
                97-A, (FFB) Indraprastha Estate{" "}
                <br className="block md:hidden" />
                Sector-30-33, <br className="hidden md:block" /> Faridabad,
                Haryana-121003.
              </p>
              <p className="text-md md:text-lg lg:text-md">
                <strong>M:</strong> +91-9810041039 <br />
                <strong>M:</strong> +91-9319644055
              </p>
              <p className="text-md md:text-lg lg:text-md">
                <strong>Email:</strong>{" "}
                <a
                   href="mailto:arnab.paul@orpaxqualtra.com"
                  className="text-red-500 hover:underline flex-wrap"
                >
                  arnab.paul@orpaxqualtra.com
                </a>
              </p>
            </div>
          </div>
          {/* Social Media */}
          <div className="h-full text-center md:grid-cols-3 flex flex-col gap-2">
            <h1 className="text-2xl lg:text-3xl text-nowrap">Follow us on:</h1>
            <div className="flex flex-col justify-center gap-3 ">
              {icons.map((icon) => (
                <div
                  key={icon.name}
                  className="flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <img
                      src={icon.image}
                      alt=""
                      className="w-6 lg:w-8 h-6 lg:h-8 rounded-md"
                    />
                  </a>
                  <h6 className="text-md md:text-lg text-gray-300">
                    {icon.name}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="w-full h-full flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl lg:text-nowrap text-center lg:text-center lg:pr-8">
              Newsletters Signup
            </h3>
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full  lg:flex justify-center gap-2 items-center ">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 pl-4 w-full md:w-1/3 lg:w-full rounded-md bg-zinc-800 font-thin text-sm focus:ring-2 focus:ring-red-500 focus:outline-none transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <div className="flex justify-center">
                  {/* Optional: ReCAPTCHA */}
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                    className="rounded-lg shadow-md"
                    theme="dark"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-1/3 lg:w-full bg-red-600 text-sm px-4 p-2 rounded-md hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          <img
            src="/assets/For_Developing/Background/Dot.png"
            className="absolute -top-60 -left-60 hidden lg:block opacity-40"
          />
        </div>

        {/* Sitemap */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-gray-300">
          <div className="grid grid-cols-1 lg:grid-rows-1 md:grid-cols-2 gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-md md:justify-start">
              {sitemap.map((site) => (
                <div className="flex gap-3 ">
                  <Link to={`/${site.toLowerCase()}`} className="hover:text-white ">
                    {site}
                  </Link>
                  {!(site.toLowerCase() == "contact") && <span className="text-xl">|</span>}
                </div>
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
