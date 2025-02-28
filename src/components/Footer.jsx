import React, { useContext, useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // State for form
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const { homepageData, loading, error } = useContext(GlobalContext);

  // Extract footer data
  const footer = homepageData?.footer;
  const icons = footer?.icons;
  const sitemap = footer?.sitemap;
  const address = footer?.address;
  const phone = footer?.phone;
  const email = footer?.email;

  // Refs for GSAP
  const headingRef = useRef(null);
  const addressRef = useRef(null);
  const iconsRef = useRef([]);
  const newsletterRef = useRef(null);
  const sitemapRef = useRef(null);

  // Animate once data is ready
  useEffect(() => {
    if (loading || error || !footer) return; // Guard clause

    // Animate heading from top with slight scale
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
        }
      );
    }

    // Animate address from left
    if (addressRef.current) {
      gsap.fromTo(
        addressRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: addressRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Animate each icon in a stagger from left
    iconsRef.current.forEach((iconEl, i) => {
      if (!iconEl) return;
      gsap.fromTo(
        iconEl,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: iconEl,
            start: "top 90%",
          },
        }
      );
    });

    // Animate newsletter from right
    if (newsletterRef.current) {
      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Animate sitemap from bottom
    if (sitemapRef.current) {
      gsap.fromTo(
        sitemapRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sitemapRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, [loading, error, footer]);

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/thank-you");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ReCAPTCHA handler
  const onChange = (value) => {
    console.log("ReCAPTCHA value:", value);
  };

  if (loading) return <div>Loading Footer...</div>;
  if (error) return <div>Error loading Footer data.</div>;
  if (!footer) return <div>No footer data found.</div>;

  return (
    <footer className="p-10">
      <div className="mx-auto lg:px-12">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl lg:text-5xl font-semibold mb-12 text-center"
        >
          Contact
        </h1>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 place-items-center justify-between items-start gap-8">
          {/* Address & Phone */}
          <div
            ref={addressRef}
            className="w-full flex flex-col gap-2 text-center lg:text-left"
          >
            <h1 className="text-2xl lg:text-3xl">Address:</h1>
            <div className="text-gray-300">
              <p className="text-md md:text-lg lg:text-md leading-relaxed">
                {address?.[0]} <br className="block md:hidden" />
                {address?.[1]}
                <br className="hidden md:block" />
                {address?.[2]}
                {address?.[3]}
              </p>
              <p className="text-md md:text-lg lg:text-md">
                <strong>M:</strong> {phone?.[0]}
                <br />
                <strong>M:</strong> {phone?.[1]}
              </p>
              <p className="text-md md:text-lg lg:text-md">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-red-500 hover:underline flex-wrap"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="h-full text-center flex flex-col gap-2">
            <h1 className="text-2xl lg:text-3xl text-nowrap">Follow us on:</h1>
            <div className="flex flex-col justify-center gap-3">
              {icons?.map((icon, i) => (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.name}
                  ref={(el) => (iconsRef.current[i] = el)}
                  className="flex gap-2 items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div className="text-gray-400 hover:text-white transition-colors duration-200">
                    <img
                      src={icon.image}
                      alt=""
                      className="w-6 lg:w-8 h-6 lg:h-8 rounded-md"
                    />
                  </div>
                  <h6 className="text-md md:text-lg text-gray-300">
                    {icon.name}
                  </h6>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div ref={newsletterRef} className="w-full h-full flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl text-center">
              Newsletters Signup
            </h3>
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full gap-2 items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="p-2 pl-4 w-full md:w-1/3 lg:w-full rounded-md bg-zinc-800 font-thin text-sm focus:ring-2 focus:ring-red-500 focus:outline-none transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
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
        <div
          ref={sitemapRef}
          className="border-t border-gray-700 mt-10 pt-6 text-gray-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-md md:justify-start">
              {sitemap?.map((site, index) => (
                <div key={index} className="flex gap-3">
                  <Link
                    to={`/${site.toLowerCase()}`}
                    className="hover:text-white"
                  >
                    {site}
                  </Link>
                  {site.toLowerCase() !== "contact" && (
                    <span className="text-xl">|</span>
                  )}
                </div>
              ))}
            </div>
            {/* Copyright */}
            <p className="text-md flex justify-center text-center lg:justify-end">
              {address?.[4]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
