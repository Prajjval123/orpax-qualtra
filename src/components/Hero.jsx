import React from "react";
import Typewriter from "typewriter-effect";

const cards = [
  {
    number: 1,
    industry: "IT",
    description:
      "Offering expert advice on technology planning, implementation, and digital transformation. Designing, developing, and maintaining custom software tailored to specific business needs.",
  },
  {
    number: 2,
    industry: "Art",
    description:
      "Offers a convenient way to discover unique, high-quality pieces from the comfort of their homes. Making art more accessible.",
  },
  {
    number: 3,
    industry: "Ecommerce",
    description:
      "It serves as a virtual storefront, allowing customers to browse, compare, and purchase items conveniently from anywhere, at any time.",
  },
];

const HeroSection = () => {
  return (
    <div
      className="relative z-10 flex flex-col mb-48 px-12 py-12 text-white bg-banner bg-cover bg-center backdrop-blur-xl"
      style={{ height: "100vh" }}
    >
      {/* Typing Title */}

      <h1 className="text-5xl font-bold leading-snug text-left max-w-4xl opacity-0 animate-fade-in-later ">
        {/* <Typewriter
          options={{
            strings: [
              'Orpax Qualtra',
              'We understand, we solve, and we deliver...',
            ],
            autoStart: true,
            loop: true, // Enable looping
            delay: 75,
            deleteSpeed: 50, // Speed of deleting text
            pauseFor: 1000, // Pause before retyping
          }}
        /> */}
        Transforming Your <span className="text-red-500">Challenges</span>
        <br /> Into Tailored Solutions.
      </h1>

      {/* Content Section */}
      <div className="mt-6 text-lg opacity-0 animate-fade-in-later">
        <p className="mt-6 max-w-2xl font-light text-left">
          Running a business, whether big, small, or medium, constantly involves
          challenges. <br></br>At OQ, we look forward to helping you by working
          as an extension of your team to better understand your requirements,
          seek solutions for your bottlenecks, and deliver high-quality
          solutions. We specialize in understanding your needs.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-5xl font-semibold">We Understand</h2>
        <h3 className="text-3xl mt-8 text-bold font-medium text-white">
          Our 3 Divisions
        </h3>
      </div>

      {/* Dropdown Menus */}
      <div className="mt-6 flex space-x-4">
        <div className="relative inline-block">
          <select className="bg-transparent text-white text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>IT</option>
            <option>Art</option>
            <option>E-Commerce</option>
          </select>
          {/* Arrow inside dropdown */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="bg-transparent text-white text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Art</option>
            <option>IT</option>
            <option>E-Commerce</option>
          </select>
          {/* Arrow inside dropdown */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="relative inline-block">
          <select className="bg-transparent text-white text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>E-Commerce</option>
            <option>IT</option>
            <option>Art</option>
          </select>
          {/* Arrow inside dropdown */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* IT Card */}
        {cards.map((card) => (
          <div className="bg-gray-900 flex flex-col justify-between text-white rounded-xl border border-white shadow-lg p-6 hover:shadow-xl transform transition duration-300">
            <div>
              <div className="flex flex-col justify-center space-y-2 mb-4">
                <span className="text-red-600 text-3xl ">0{card.number}.</span>
              </div>
              <div className=" space-y-1">
                <h3 className="text-3xl">{card.industry}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-end">
            <button className="bg-red-800 text-white text-xs w-24 rounded hover:bg-red-600">
              Know More
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
