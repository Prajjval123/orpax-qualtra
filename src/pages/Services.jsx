import React from "react";

const Services = () => {
  const services = [
    {
      title: "IT Services",
      description:
        "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
    },
    {
      title: "GIS Services",
      description:
        "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
    },
    {
      title: "Digital Marketing and Designing",
      description:
        "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
    },
    {
      title: "IT Services",
      description:
        "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
    },
    {
      title: "GIS Services",
      description:
        "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
    },
    {
      title: "Digital Marketing and Designing",
      description:
        "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
    },
  ];

  return (
    <div className="p-8 md:p-24 flex flex-col gap-8 ">
      <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-center text-white animate-fade-in">
        Services & Domains
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white w-full h-auto flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center text-gray-500">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-center text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
