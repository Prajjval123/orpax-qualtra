import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients } from "../constants/utils";

const clientPoints = [
  [
    "Business Standard",
    "Sahara India Life Insurance Co. Ltd",
    "SBI Life Insurance company ltd",
    "Standard Chartered AMC",
    "Invest India Market Solution Private Limited",
    "Bharti AXA Life Insurance Company Ltd",
    "Canara Bank",
    "Citi Bank",
    "First Rand Bank Limited, South Africa",
    "HDFC AMC Limited",
    "HSBC Asset management Pvt Ltd",
  ],
  [
    "ICICI Bank Limited",
    "UTI AMC",
    "ICICI Prudential Life Insurance Co. Ltd.",
    "IDBI Fortis Life Insurance Company",
    "Indian School of Microfinance for women",
    "Investsmart Financial Services Ltd.",
    "Kotak Mahindra Bank Limited",
    "LIC Housing Finance Limited",
    "Life Insurance Council",
    "Met Life India Insurance Company Pvt. Ltd",
    "Motilal Oswal Securities Ltd",
  ],
  [
    "NSE Investor Protection Fund Trust",
    "Prudential Insurance Company of America",
    "Reliance Insurance Company",
    "Reserve Bank of India",
    "SBI Funds management private ltd.",
    "Shriram Life Insurance",
    "Standard Chartered Bank",
    "TATA AMC",
    "Western Union Services India Private Limited",
    "Tata Securities Ltd",
    "State Bank of India",
  ],
];

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const underlineRef = React.useRef(null);

  const handleMouseEnter = () => {
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center",
        duration: 1.5,
        ease: "power2.out",
      }
    );
    
  };

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current,{ scaleX: 1 }, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 2,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: (index) * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
          },
        }
      );
    });
    handleMouseEnter()
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center px-8 md:px-16 my-24">
      <h1 ref={headingRef} className="text-4xl md:text-5xl font-semibold text-center w-full p-4 animate-fade-in">
        Clients
        <div
          ref={underlineRef}
          onMouseLeave={handleMouseLeave}
          className="absolute left-0 bottom-0 h-[2px] bg-red-500 w-full scale-x-0 transform origin-center"
        ></div>
      </h1>
      <div className="grid grid-cols-1 px-12 sm:grid-cols-3 w-full md:grid-cols-3 lg:grid-cols-4 lg:px-16 gap-8 mt-24 mb-24">
        {clients.map((client, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={client}
              alt={`Client ${index}`}
              className=""
            />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-3 lg:px-16 lg:flex-row gap-8">
        {clientPoints.map((client, index) => (
          <div
            key={index}
            className="bg-gray-900 backdrop-blur-lg bg-opacity-40 w-full flex flex-col  gap-4 p-4 rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {client.map((point, pointIndex) => (
              <div key={pointIndex}>
                <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                  <li className="flex gap-2">
                    <div>-</div> {point}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
