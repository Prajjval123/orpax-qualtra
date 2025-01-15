import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const aboveCardsRef = useRef([]);
  const belowCardsRef = useRef([]);
  const headingRef = useRef(null);

  const services = [
    {
      title: "IT Services",
      description:
        "Cloud Computing, Full Stack Development, \n Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
      image:
        "/assets/For_Developing/Service & Domain  Section/software-application.png",
    },
    {
      title: "GIS Services",
      description:
        "GIS Mapping and Digitization, Data Base \n Development, Terrain Modelling,\n Digital Elevation Model, Web GIS Application.",
      image:
        "/assets/For_Developing/Service & Domain  Section/geospatial-technology.png",
    },
    {
      title: "Digital Marketing and Designing",
      description:
        "Social Media Marketing, Google Ads,\n Creative and Concept Designing.",
      image:
        "/assets/For_Developing/Service & Domain  Section/social-media.png",
    },
  ];

  const services_below = [
    [
      "Utilities",
      "Energy Transmission",
      "Natural Resources",
      "Oil, Gas and Minerals",
      "Water Resources",
      "Infrastructure",
    ],
    [
      "Ports and Harbors",
      "Market Research",
      "Finance & Accounts",
      "Education",
      "Govt. Sector",
      "Health & Medical",
    ],
    [
      "Real Estates",
      "Hospitality",
      "Retail Industry",
      "Manufacturing",
      "Entertainment",
      "",
    ],
  ];

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    // Animate cards on scroll
    aboveCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    belowCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative pt-12 pb-0 flex flex-col gap-12">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-semibold mb-8 text-center"
      >
        Services & Domains
      </h1>
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-12">
        {/* IT Card */}
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (aboveCardsRef.current[index] = el)}
            className="relative flex flex-col text-center gap-4 h-full w-full rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg px-2 py-8 lg:py-12 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
          >
            <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 mx-auto">
              <img src={service.image} alt="" className="filter invert" />
            </div>
            <h3 className="text-xl lg:text-2xl px-1 font-bold text-red-600">
              {service.title}
            </h3>
            <p className="text-sm lg:text-md px-6 whitespace-pre-line ">
              {service.description}
            </p>
          </div>
        ))}
        {/* Below Card */}
        {services_below.map((services, index) => (
          <div
            key={index}
            ref={(el) => (belowCardsRef.current[index] = el)}
            className="w-full h-full flex flex-col text-left gap-4 rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg space-y-3 p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700  cursor-pointer"
          >
            {services.map((service) => (
              <h6 className="text-md flex gap-2 items-center whitespace-nowrap h-[297.6]">
                <div className={service == "" ? "hidden" : "inline"}>
                  <img
                    src="/assets/For_Developing/Arrow/next.png"
                    alt=""
                    className="w-3 h-3 invert"
                  />
                </div>{" "}
                {service}
              </h6>
            ))}
          </div>
        ))}
        
      </div>
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="absolute left-[20rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="absolute  left-[60rem] w-20 h-20 mr-52"
      />
    </div>
  );
};

export default HomeServices;
