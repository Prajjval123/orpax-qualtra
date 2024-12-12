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
    <div className="gap-8 relative mt-10 z-10 flex flex-col">
      {/* Hero Content */}
      <div>
        <div className="flex flex-col">
          {/* Typing Title */}
          <h1 className="text-5xl font-semibold leading-snug text-center md:text-left max-w-4xl opacity-100 animate-fade-in-later ">
            Transforming Your <span className="text-red-500">Challenges</span>
            <br /> Into Tailored Solutions.
          </h1>
          
          {/* Content Section */}
          <div className="mt-2 text-lg opacity-100 animate-fade-in-later">
            <p className="font-normal max-w-2xl text-center md:text-left">
              Running a business, whether big, small, or medium, constantly
              involves challenges. <br></br>At OQ, we look forward to helping
              you by working as an extension of your team to better understand
              your requirements, seek solutions for your bottlenecks, and
              deliver high-quality solutions. We specialize in understanding
              your needs.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-5xl text-center md:text-left font-medium">
              We Understand
            </h2>
            <h3 className="text-3xl text-center md:text-left mt-12 text-bold font-bold">
              Our 3 Divisions
            </h3>
          </div>

          {/* Dropdown Menus */}
          <div className="mt-2 w-full flex-grow sm:flex-1">
            <div className="py-4 w-full sm:py-0 relative md:w-auto inline-block md:mr-2">
              <select className="bg-transparent w-full text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
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

            <div className="w-full py-4 md:w-auto relative inline-block md:mr-2">
              <select className="bg-transparent w-full text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
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

            <div className="relative py-4 w-full md:w-auto inline-block">
              <select className="bg-transparent w-full text-lg px-6 py-2 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
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
        </div>
        {/* Side Image */}
        <div>
          <img
            src="/assets/additional_images/Computer_bg.png"
            alt="Background Decor"
            className="absolute w-2/3 object-contain bg-gradient-radial opacity-75 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50 sm:w-2/5 sm:-top-16 sm:right-12 md:1/2"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left gap-12 bg-repeat">
        {/* IT Card */}
        {cards.map((card) => (
          <div
            key={card.number}
            className="flex flex-col justify-between rounded-xl border border-gray-600 shadow-lg p-6 px-8 pr-10 pb-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-lg"
          >
            <div>
              <div className="flex flex-col justify-center space-y-2 mb-4">
                <span className="text-red-600 text-4xl font-medium">0{card.number}.</span>
              </div>
              <div className="space-y-2 pt-6">
                <h3 className="text-4xl font-bold">{card.industry}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-12">
              <button className="bg-red-800 text-xs p-0.5 px-2  rounded hover:bg-red-600">
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
