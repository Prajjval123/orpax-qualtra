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
    <div className="p-24 min-h-9 bg-black pb-0">
      <h1 className="text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Services & Domains
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white w-full h-64 flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-500">
              {service.title}
            </h1>
            <p className="text-base text-center text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
