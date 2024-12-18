import React from "react";
import Typewriter from "typewriter-effect";

const cards = [
  {
    number: 1,
    industry: "IT",
    description:
      "Offering expert advice on technology planning, implementation, and digital transformation. Designing, developing, and maintaining custom software tailored to specific business needs.",
    image: "/assets/For_Developing/Three_Divisions/information-technology.png"
  },
  {
    number: 2,
    industry: "Art",
    description:
      "Offers a convenient way to discover unique, high-quality pieces from the comfort of their homes. Making art more accessible.",
    image: "/assets/For_Developing/Three_Divisions/abstract.png"
  },
  {
    number: 3,
    industry: "Ecommerce",
    description:
      "It serves as a virtual storefront, allowing customers to browse, compare, and purchase items conveniently from anywhere, at any time.",
    image: "/assets/For_Developing/Three_Divisions/ecommerce.png"
  },
];

const divisions = [['IT', 'Art', 'E-Commerce'], [ 'Art', 'E-Commerce','IT'], ['E-Commerce', 'IT', 'Art']];

const HeroSection = () => {
  return (
    <div className="gap-8 relative mt-10 z-10 flex flex-col">
      {/* Hero Content */}
      <div>
        <div className="flex flex-col">
          {/* Typing Title */}
          <h1 className="text-4xl lg:text-5xl font-semibold leading-snug text-center md:text-left max-w-4xl opacity-100 animate-fade-in-later ">
            Transforming Your <span className="text-red-500">Challenges</span>
            <br className="hidden md:block"/> Into <br className="block md:hidden" /> Tailored Solutions.
          </h1>
          
          {/* Content Section */}
          <div className="mt-2 text-lg opacity-100 animate-fade-in-later">
            <p className="font-normal max-w-2xl text-justify md:text-left">
              Running a business, whether big, small, or medium, constantly
              involves challenges. <br></br>At OQ, we look forward to helping
              you by working as an extension of your team to better understand
              your requirements, seek solutions for your bottlenecks, and
              deliver high-quality solutions. We specialize in understanding
              your needs.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left font-medium">
              We Understand
            </h2>
            <h3 className="text-3xl text-center md:text-left mt-12 text-bold font-semibold">
              Our 3 Divisions
            </h3>
          </div>

          {/* Dropdown Menus */}
          <div className="mt-3 w-full flex-grow sm:flex-1">
            {divisions.map(division => <div className="py-2 w-full sm:py-0 relative md:w-auto inline-block md:mr-2 ">
              <select className="bg-transparent w-full text-lg px-6 py-1 pr-10 rounded border border-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500">
                {division.map(service => <option className="bg-black">{service}</option>)}
              </select>
              {/* Arrow inside dropdown */}
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <img src="/assets/For_Developing/Arrow/next.png" alt="" className="w-3 h-3 invert rotate-90" />
              </div>
            </div>)}
          </div>
        </div>
        {/* Side Image */}
        <div>
          <img
            src="/assets/additional_images/Computer_bg.png"
            alt="Background Decor"
            className="absolute w-2/3 object-contain opacity-100 from-red-500 via-transparent to-blue-600 mix-blend-lighten shadow-blue-500/50 sm:w-2/5 sm:-top-16 sm:right-12 md:top-24 hidden lg:block"
          />
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute top-10 right-10 w-20 h-20 shadow-[0_0_0_0_rgba(255,0,0,0.5)]"/>
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute top-0 right-80 w-10 h-10 mr-52"/>
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute top-16 right-60 w-80 h-80 opacity-100 rounded-full blur-[20px] shadow-[0_0_100px_0px_rgba(255,0,0,0.5)]" />
          {/* <img src="/assets/For_Developing/Background/Dot.png" className="absolute top-[357px] right-[580px] w-5 h-5 rounded-full shadow-[0_0_50px_20px_rgba(255,0,0,0.5)]"/>
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute top-[250px] right-[566px] w-5 h-5 rounded-full shadow-[0_0_50px_10px_rgba(255,0,0,0.5)]"/> */}
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute w-20 h-20"/>
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute w-20 h-20"/>
          <img src="/assets/For_Developing/Background/Dot.png" className="absolute w-20 h-20"/>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center lg:text-left gap-12 bg-repeat">
        {/* IT Card */}
        {cards.map((card) => (
          <div
            key={card.number}
            className="flex flex-col justify-between rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg p-4 lg:p-6 px-8 pr-10 md:pb-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div>
              <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center space-y-2">
                <span className="text-red-600 text-3xl md:text-4xl font-medium">0{card.number}.</span>
              </div>
              <img src={card.image} alt="" className="w-6 md:w-7 h-6 md:h-7 invert" />
              </div>
              <div className="space-y-2 pt-6">
                <h3 className="text-3xl md:text-4xl font-bold ">{card.industry}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-8 lg:mt-12">
              <button className="bg-gradient-to-b from-red-600 text-xs p-0.5 px-2  rounded hover:bg-red-500">
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
