import { clients } from "../constants/utils";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeClients = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <h1 ref={headingRef} className="text-5xl font-semibold text-center">
            Clients
          </h1>
          <div className="relative flex items-center w-full pt-20 overflow-hidden">
            {/* Sliding container */}
            <div className="flex sm:animate-slide space-x-4">
              {clients.concat(clients).map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index}`}
                  className="h-full w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="w-full flex flex-col justify-center items-center md:px-0 mt-24">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold text-center"
          >
            Clients
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full md:grid-cols-2 xl:grid-cols-3  lg:px-16 gap-8 mt-24 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img src={client} alt={`Client ${index}`} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClients;
