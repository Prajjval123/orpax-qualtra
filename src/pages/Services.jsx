import React from "react";
import { mainServices } from "../constants/utils";
import { useNavigate } from "react-router-dom";

const Services = () => {
  // const services = [
  //   {
  //     title: "IT Services",
  //     description:
  //       "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
  //   },
  //   {
  //     title: "GIS Services",
  //     description:
  //       "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
  //   },
  //   {
  //     title: "Digital Marketing and Designing",
  //     description:
  //       "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
  //   },
  //   {
  //     title: "IT Services",
  //     description:
  //       "Cloud Computing, Full Stack Development, Mobile App Development, Smart City Applications, Data Analysis Tool, AI Bots.",
  //   },
  //   {
  //     title: "GIS Services",
  //     description:
  //       "GIS Mapping and Digitization, Data Base Development, Terrain Modelling, Digital Elevation Model, Web GIS Application.",
  //   },
  //   {
  //     title: "Digital Marketing and Designing",
  //     description:
  //       "Social Media Marketing, SMS Marketing, Email Marketing, Google Ads, Creative and Concept Designing.",
  //   },
  // ];

  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="p-8 lg:p-16 flex flex-col gap-8 ">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-center animate-fade-in">
        Services & Domains
      </h1>
      {/* services */}

      <div className="mt-2 rounded p-4 animate-popup">
        <div className="flex flex-col gap-4">
          {/* IT Services */}
          <div>
            {mainServices.IT_Services.map((service) => (
              <div key={service.name}>
                <h4 className="font-semibold md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left border-b pb-2">
                  {service.name}
                </h4>
                <ul className="space-y-1 pt-2">
                  {service.value.map((value) => (
                    <li
                      key={value.name}
                      className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                      onClick={() => handleServiceClick(value.route)}
                    >
                      {value.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* GIS Services */}
          <div className="flex flex-col">
            <div>
              {mainServices.GIS_Services.map((service) => (
                <div key={service.name}>
                  <h4 className="font-semibold md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left border-b pb-2 mb-2 ">
                    {service.name}
                  </h4>
                  <div className="flex flex-col gap-2 pt-2">
                    <ul className="flex flex-col gap-2 w-full whitespace-nowrap overflow-hidden text-ellipsis">
                      <li className="space-y-1">
                        {service.value1.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2 w-full">
                      <li className="space-y-1">
                        {service.value2.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                    <ul className="flex flex-col gap-2 w-full">
                      <li className="space-y-1">
                        {service.value3.map((value) => (
                          <li
                            key={value.name}
                            className="hover:text-red-500 cursor-pointer text-center lg:text-left"
                            onClick={() => handleServiceClick(value.route)}
                          >
                            {value.name}
                          </li>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 w-full h-auto flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-up"
          >
            <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center text-gray-500">
              {service.title}
            </h1>
            <p className="text-sm md:text-base text-center text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
