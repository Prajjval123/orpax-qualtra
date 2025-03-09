import React, { useContext, useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // State remains if needed elsewhere
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

  // Refs for GSAP animations
  const headingRef = useRef(null);
  const addressRef = useRef(null);
  const iconsRef = useRef([]);
  // Renamed ref: using mapRef instead of newsletterRef for the new map section
  const mapRef = useRef(null);
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

    // Animate map section from right
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 90%",
          },
        }
      );
    }

    // Animate sitemap (navigation links) from bottom
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
            <h1 className="text-2xl lg:text-3xl text-nowrap">
              Follow us on:
            </h1>
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

          {/* Map Section (replacing Newsletter) */}
          <div ref={mapRef} className="w-full flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl text-center">Our Location</h3>
            <div className="w-full h-64">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-lg border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.9537363153162!3d-37.81720997975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a88ef6e3db0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611659365393!5m2!1sen!2sau"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Sitemap (Navigation Links) */}
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
