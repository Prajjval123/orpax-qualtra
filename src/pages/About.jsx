import React from "react";
import Header from "../components/Header";
import Clients from "./Clients";
import HomeClients from "../components/HomeClients";

const persons = [
  {
    image: "/assets/arnab.jpg",
    name: "Arnab Paul",
    designation: "Founder and Chief Executive",
    country: "India",
    linkedin: "#", // Add LinkedIn URL here
  },
  {
    image: "/assets/prasun.jpg",
    name: "Prasun Das",
    designation: "Consultant",
    country: "Canada",
    linkedin: "#", // Add LinkedIn URL here
  },
];

const About = () => {
  return (
    <>
      <section className="text-white p-8 flex flex-col gap-8 lg:p-16 animate-fade-in-later">
        <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-center sm:text-left text-lg leading-relaxed">
          Since our inauguration in 2001, we have come a long way from a modest
          informal group of service providers to become the industry-leading
          cartel representing a group of collective and organized SMEs. We offer
          full-cycle services in eight core practices encompassing all aspects
          of the IT-based environment. We combine solid business domain
          expertise, superior technical know-how, profound knowledge of the
          latest industry trends, and quality-optimized delivery models to
          create progressive and end-to-end business solutions and services.
          <br /><br />
          Our delivery of multi-faceted solutions facilitates our customers to
          enjoy the unique benefits of tremendous synergy and authentic
          collaboration. We engage in diligent research and testing and conduct
          best-in-breed approaches so that our customers enjoy the distinct
          advantages of enhanced productivity and profitability via accurate
          applications of our unique and virtual technology systems. We deploy
          award-winning, road-tested methodologies and combine them with the
          best industry practices to epitomize manageability and visible
          clarity in all our solutions.
        </p>
      </section>

      <section className="bg-gray-900 text-white p-8 flex flex-col gap-12 lg:p-24">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Team</h1>
        <p className="text-center sm:text-left text-lg leading-relaxed">
          Our team is rich with unrivaled IT experience and expertise with
          resources to provide services personifying responsibility,
          flexibility, agility, and end-to-end visibility. With our assured
          position of trusted membership among a heterogeneous group of
          benchmark blue-chip companies and organizations, we have so far
          provided services for more than 60 organizations representing leading
          public and private sector financial, industrial, and commercial
          institutions. No organization is too small or too big for our talented
          team at ORPAX.
          <br /><br />
          Whether you are looking for a simple and appealing website design or
          require a complex and advanced multi-tiered IT system development, we
          can provide custom services accounting for the latest industry trends
          and technologies. ORPAX QUALTRA brings you world-class service with
          outsourcing and offshore options from our central base of development
          located in India.
          <br /><br />
          Our fundamental business philosophy stems from realizing that our
          success is intricately tied to our client's success. Therefore, we are
          committed to delivering total output values to all our customers to
          help them succeed in this ever-changing and highly challenging business
          world. We shall never hesitate to take that extra mile to ensure the
          deliverance of measurable business values.
        </p>

        <div className="flex flex-col gap-12">
          <h1 className="text-5xl font-bold text-center">Meet Our Team</h1>
          <div className="flex flex-wrap justify-center gap-12">
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 w-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-700"
                />
                <h2 className="text-xl font-semibold text-center">
                  {person.name}
                </h2>
                <p className="text-sm text-gray-400 text-center">
                  {person.designation}
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm text-gray-400 uppercase">{person.country}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <img
                      src="/assets/linkedin-icon.png"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;