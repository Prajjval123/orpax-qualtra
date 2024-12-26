import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
  {
    title: "E-commerce B2B",
    image: "/assets/products/E-commerce B2B.png",
  },
  {
    title: "E-commerce B2C",
    image: "/assets/products/E-commerce B2C.jpg",
  },
  {
    title: "Supply Chain \n Management Software",
    image: "/assets/products/Supply Chain Management Software.jpg",
  },
  {
    title: "Hospital/Nursing Home Management Software",
    image: "/assets/products/Product-4.jpg",
  },
  {
    title: "Survey Analysis Tool",
    image: "/assets/products/Survey Analysis Tool.png",
  },
  {
    title: "Spa and Saloon \n Management System",
    image: "/assets/products/Spa and Saloon Management System.jpg",
  },
  {
    title: "School & College \n Management Software",
    image: "/assets/products/School & College Management Software.jpg",
  },
  {
    title: "Property/Hotel/Hostel\n Management System",
    image: "/assets/products/Product-8.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
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
    gsap.to(
      underlineRef.current,
      { scaleX: 1 },
      {
        scaleX: 0,
        transformOrigin: "center",
        duration: 2,
        ease: "power2.inOut",
      }
    );
  };

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
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
    handleMouseEnter();
  }, []);
  return (
    <div className="p-8 md:p-12 lg:p-16 xl:p-20 pb-0 min-h-screen">
      <h1
        ref={headingRef}
        onMouseLeave={handleMouseLeave}
        className="text-4xl md:text-5xl font-semibold mb-20 text-center animate-fade-in p-4"
      >
        Products
        <div
          ref={underlineRef}
          className="absolute left-0 bottom-0 h-[2px] bg-red-500 w-full scale-x-0 transform origin-center"
        ></div>
      </h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
        {/* IT Card */}
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full flex flex-col justify-between rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-100 hover:shadow-red-700 hover:shadow-2xl cursor-pointer py-2"
          >
            <h1 className="text-xl lg:text-2xl flex items-center justify-center font-medium text-center h-[80px] whitespace-pre-line">
              {product.title}
            </h1>

            <img
              src={product.image}
              alt={product.image}
              className="h-64 md:h-72 lg:h-96"
            />

            <h1 className="text-xl lg:text-2xl text-center font-medium p-6 text-gray-300">
              Request a free demo
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
