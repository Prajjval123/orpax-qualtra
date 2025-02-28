import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { GlobalContext } from "../context/GlobalContext";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Get data from context
  const { homepageData, loading, error } = useContext(GlobalContext);
  const heroData = homepageData?.hero || {};

  // Destructure hero fields
  const {
    serviceCards = [],
    divisions = [],
    divisionsHeading = "",
    heading = [],
    subheading = [],
    typingTexts = [],
  } = heroData;

  // Animation refs
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const cardsRef = useRef([]); // store multiple refs
  const typingHeadingRef = useRef(null);
  const typingRef = useRef(null);
  const divisionsRef = useRef(null);

  useEffect(() => {
    // Only animate if we have the data
    if (loading || error || !homepageData) return;

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.in",
          delay: 1,
        }
      );
    }

    // Animate subheading
    if (subHeadingRef.current) {
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.in",
          delay: 1.5,
        }
      );
    }

    // Animate each card on scroll
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Animate the typing heading container
    if (typingHeadingRef.current) {
      gsap.fromTo(
        typingHeadingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 2,
        }
      );
    }

    // Animate the divisions part
    if (divisionsRef.current) {
      gsap.fromTo(
        divisionsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          delay: 2.5,
        }
      );
    }
  }, [loading, error, homepageData]);

  // Handle loading/errors
  if (loading) return <div>Loading hero...</div>;
  if (error) return <div>Error loading hero data.</div>;
  if (!homepageData) return <div>No homepage data found.</div>;

  return (
    <div className="gap-8 relative mt-16 z-10 flex flex-col">
      {/* ─────────────────────────────────────────────────────────────────────────
          HERO CONTENT
      ────────────────────────────────────────────────────────────────────────── */}
      <div>
        {/* HEADING */}
        <h1
          ref={headingRef}
          className="text-4xl lg:text-5xl font-semibold leading-snug text-center md:text-left max-w-4xlr"
        >
          {heading[0]}{" "}
          <span className="text-red-500">{heading[1]} </span>
          <br className="hidden md:block" />
          {heading[2]}{" "}
          <br className="block md:hidden" />
          {heading[3]}
        </h1>

        {/* SUBHEADING */}
        <div
          ref={subHeadingRef}
          className="mt-6 text-lg max-w-2xl text-justify"
        >
          {subheading.length > 6 ? (
            <p>
              {subheading[0]}
              <span className="text-red-500 font-semibold"> {subheading[1]}</span>{" "}
              <span className="text-red-500 font-semibold">{subheading[2]}</span>{" "}
              {subheading[3]}{" "}
              <span className="text-red-500 font-semibold">{subheading[4]}</span>
              {subheading[5]}
              <br />
              {subheading[6]}
            </p>
          ) : (
            <p>{subheading.join(" ")}</p>
          )}
        </div>

        {/* TYPING HEADING */}
        <div className="mt-12" ref={typingHeadingRef}>
          <h2
            ref={typingRef}
            className="mt-4 text-4xl lg:text-5xl text-center md:text-left font-medium text-red-600"
          >
            <Typewriter
              options={{
                strings: typingTexts,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
                pauseFor: 1000,
              }}
            />
          </h2>
        </div>

        {/* DIVISIONS */}
        <div className="flex justify-center flex-col mt-8" ref={divisionsRef}>
          <h3 className="text-3xl text-center md:text-left mt-4 font-semibold">
            {divisionsHeading}
          </h3>
          <div className="mt-4 flex flex-col md:flex-row md:space-x-4">
  {divisions.map((division, index) => (
    <a
      href={division.href}
      target="_blank"
      rel="noopener noreferrer"
      key={index}
      className="relative flex items-center py-2 px-6 mb-2 md:mb-0 bg-transparent text-lg border border-gray-600 rounded hover:ring-2 hover:ring-red-500 w-full md:w-auto"
    >
      {/* Division text */}
      <p className="mr-4">{division.name}</p>

      {/* Arrow pinned to the right */}
      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <img
          src="/assets/For_Developing/Arrow/next.png"
          alt=""
          className="w-3 h-3 invert -rotate-45"
        />
      </span>
    </a>
  ))}
</div>

        </div>
      </div>

      {/* DECORATIVE IMAGES (as in your original code) */}
      <div>
        <img
          src="/assets/additional_images/Computer_bg.png"
          alt="Background Decor"
          className="absolute w-2/3 object-contain opacity-100 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50 sm:w-2/5 sm:-top-16 sm:right-12 hidden lg:block animate-fade-in-slow"
        />
        <img
          src="/assets/For_Developing/Background/Dot.png"
          className="absolute top-10 right-10 w-20 h-20"
        />
        <img
          src="/assets/For_Developing/Background/Dot.png"
          className="absolute top-0 right-80 w-10 h-10 mr-52"
        />
        <img
          src="/assets/For_Developing/Background/Dot.png"
          className="absolute top-[22rem] left-[20rem] w-10 h-10 mr-52"
        />
        <img
          src="/assets/For_Developing/Background/Dot.png"
          className="absolute top-[30rem] left-[40rem] w-16 h-16 mr-52"
        />
      </div>

      {/* SERVICE CARDS */}
      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center lg:text-left gap-12 bg-repeat">
        {serviceCards.map((card, index) => (
          <div
            key={card.number}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col justify-between rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg p-4 lg:p-6 px-8 pr-10 md:pb-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:shadow-red-700"
          >
            <div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center space-y-2">
                  <span className="text-red-600 text-3xl md:text-4xl font-medium">
                    {card.number}.
                  </span>
                </div>
                <img
                  src={card.image}
                  alt=""
                  className="w-6 md:w-7 h-6 md:h-7 invert"
                />
              </div>
              <div className="space-y-2 pt-6">
                <h3 className="text-3xl md:text-4xl font-bold ">
                  {card.industry}
                </h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-8 lg:mt-12">
              <a
                href={card.href}
                target="blank"
                className="bg-red-700 text-xs p-0.5 px-2 rounded hover:bg-red-600"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
