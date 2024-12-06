import React, { useState, useEffect } from "react";
import HomeServices from "../components/HomeServices";
import HomeClients from "../components/HomeClients";

const testimonials = [
  {
    name: "Dr. B. P. Thiagarajan",
    designation: "Senior Manager, The Nielsen Company",
    descriptions: [
      "This is to certify that Mr. Arnab Paul and his team has developed a GIS based application software tool for the project, namely, 'Mapping of all private Health Facilities in the district of Agra', which was sponsored by the Futures Group, New Delhi. The team completed the work successfully and their inputs to the project were appreciable. The client was very much satisfied with the work. Mr. Arnab, as the technical expert in GIS application, has great responsibility, sincerity and involvement in the work. The services of the team with us were also very good.",
      "We wish all the success for their endeavors.",
    ],
  },
  {
    name: "Mr. Sandeep Ghosh ",
    designation: "Executive Director, IIMS Dataworks",
    descriptions: [
      "We are extremely satisfied with the Factfinder 1.0 software they have designed and developed for us and it is now being actively used by over 60 firms and organizations (comprising of the leading public and private sector banks, all the major mutual funds, all life insurance firms, financial market regulators, SROs and the Union Government) operating out of India.",
      "We also want to thank Mr. Arnab Paul and his colleagues for their hard work and positive attitude displayed throughout this project period, both of which ensured that the project enjoyed a quick turnaround time even after meeting very stringent specifications.",
    ],
  },
  {
    name: "C A Wilson",
    designation: "General Manager- HR, For LEA Associates South Asia Pvt Ltd.",
    descriptions: [
      "M/s. Orpax Qualtra was engaged by us for Preparation of alignment maps, base maps and land use maps for Consultancy Services for Pre- Feasibility Study for High Speed Railway Corridor for Howrah- Haldia Section.",
      "M/s. Orpax Qualtra have completed the assignment fulfilling the terms of reference meeting the project requirements.",
      "We wish all the success for their endeavors.",
    ],
  },
  {
    name: "Bhartendu Sharma",
    designation: "Jt. Gen. Mgr. (C), RITES",
    descriptions: [
      "M/s. Orpax Qualtra was awarded the work of Development of Land Use plans, Assistance in Master Planning and Architectural Designs in respect of consultancy work for preparation of perspective plan for development of Darjeeling into World Class Leisure and Weekend tourist Destinations.",
      "M/s. Orpax Qualtra has successfully completed the work to our satisfaction and within given time frame.",
      "We wish all the success for their endeavors.",
    ],
  },
  {
    name: "Jagdish Nagwekar",
    designation: "CFO, For GP Petroleumd Ltd.",
    descriptions: [
      "This is to certify that M/S Orpax Qualtra has done Topograpgical Survey by Total Station and DGPS for DEM creation, Land Demarcation and Creation of Map Area at industrial land Kosikalan for GP Petroleums Ltd. which proved very much beneficial towards our business. It was very good to work with M/S Orpax Qualtra as they have great responsibility, sincerity and dedication.",
      "Services provided by M/S Orpax Qualtra is very good. We wish all the success for their future projects.",
      "We wish all the success for their endeavors.",
    ],
  },
];

const Testimonials = () => {
  return (
    <div className=" text-gray-100 py-16 px-6">
      <div className="container mx-auto lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Testimonials
        </h1>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl duration-300 transform transition-transform  hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-teal-400">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-400">{testimonial.designation}</p>
              </div>
              <div className="space-y-4 text-gray-300">
                {testimonial.descriptions.map((description, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <HomeServices />
      </div>
      <div className="mt-16">
        <HomeClients />
      </div>
    </div>
  );
};

export default Testimonials;
