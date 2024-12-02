import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <section className="text-white p-8 lg:p-24">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-md">
          Since our inauguration in 2001, we have come a long way from a modest
          informal group of service providers to become the industry leading
          cartel representing a group of collective and organized SMEs. We offer
          full cycle services in eight core practices encompassing all aspects
          of the IT based environment. We combine solid business domain
          expertise and experience, superior technical know-how, profound
          knowledge of the latest industry trends, quality optimized delivery
          models to create progressive and end to end business solutions and
          services.<br></br> Our delivery of multi faceted solutions facilitates
          our customers to enjoy the unique benefits of tremendous synergy and
          authentic collaboration. We engage in diligent research and testing
          and conduct best in-breed approaches so that our customers enjoy the
          distinct advantages of enhanced productivity and profitability via
          accurate applications of our unique and virtual technology systems. We
          deploy award winning, road tested methodologies and combine them with
          the best industry practices to epitomize manageability and visible
          clarity in all our solutions.
        </p>
      </section>
      <section className="bg-gray-900 text-white p-8 lg:p-24">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Team</h1>
        <p className="text-md">
          Our team is rich with unrivalled IT experience and expertise with
          resources to provide services personifying responsibility,
          flexibility, agility and end to end visibility. With our assured
          position of trusted membership among a heterogeneous group of
          benchmark blue chip companies and organizations we have so far
          provided services for more than 60 organizations representing leading
          public and private sector financial, industrial, commercial
          institutions. What makes our achievements exceptional and a true
          replication of our capabilities is that our valued customer base is
          represented by companies universally acclaimed as market regulators
          within their niche industries. No organization is too small or too big
          for our talented team at ORPAX. Human resources are our strong point.
          We absorb the best talents within the industry, people with ambition,
          zeal and a drive for excellence. ORPAX passionately safeguards
          standards and demand best competencies from the workforce.<br></br>{" "}
          Whether you are looking for a simple and appealing website design or
          require a complex and advanced multi tiered IT system development, we
          can provide custom services accounting for the latest industry trends
          and technologies. ORPAX QUALTRA brings you a world class service with
          outsourcing and offshore options from our central base of development
          center located in India.<br></br> Our fundamental business philosophy
          stems from realizing that our success is intricately tied with our
          client's success. Therefore, we are committed in delivering total
          output values to all our customers to help them succeed in this ever
          changing and highly challenging biz world. We shall never hesitate to
          take that extra mile to ensure deliverance of measurable business
          values.
        </p>
        <h1 className="text-3xl font-bold mb-6 text-center pt-24">
          Meet Our Team
        </h1>
        <div className="flex gap-24">
          <div className="flex flex-col gap-8 w-72">
            <img
              src="/assets/arnab.jpg"
              alt=""
              className="w-68 h-88 rounded-md"
            />
          </div>
          <div className="flex gap-8 w-72">
            <img
              src="/assets/prasun.jpg"
              alt=""
              className="w-68 h-88 rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
