import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     name: "Dr. B. P. Thiagarajan Senior Manager, The Nielsen Company",
//     description:
//       "This is to certify that Mr. Arnab Paul and his team have developed a GIS-based application software tool for the project, namely, Mapping of all private Health Facilities in the district of Agra, which was sponsored by the Futures Group, New Delhi.",
//   },
//   {
//     name: "Mr. Sandeep Ghosh Executive Director, IIMS Dataworks",
//     description:
//       "We are extremely satisfied with the Factfinder 1.0 software they have designed and developed for us and it is now being actively used by over 60 firms and organizations (comprising of the leading public and private sector banks, all the major mutual funds, all life insurance firms, financial market regulators, SROs and the Union Government) operating out of India.",
//   },
//   {
//     name: "Mr. John Doe CEO, XYZ Corporation",
//     description:
//       "Their team consistently exceeded our expectations with their professionalism and innovative solutions.",
//   },
// ];

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

const HomeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full pb-24 flex flex-col gap-12 items-center mt-12 px-12">
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Testimonials
      </h1>
      <div className="flex items-center gap-4 rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40">
        {/* Testimonial Slider */}
          {/* Left Button */}
          <button
            onClick={handlePrevious}
            className="px-4 py-2 rounded-lg hover:bg-red-700 transition text-2xl"
          >
            <img src="/assets/For_Developing/Arrow/next.png" alt="" className="w-6 h-6 scale-x-[-1] invert" />
          </button>
        <div className="w-full backdrop-blur-lg max-w-4xl overflow-hidden relative rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col justify-center px-6 sm:px-24 py-4"
              >
                <div className="text-center px-4 py-6">
                  <p className="text-lg sm:text-xl italic mb-6">
                    {testimonial.descriptions}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {testimonial.name},{testimonial.designation}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
          {/* Right Button */}
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg hover:bg-red-700 transition text-2xl"
          >
            <img src="/assets/For_Developing/Arrow/next.png" alt="" className="w-6 h-6 invert" />
          </button>
      </div>
    </div>
  );
};

export default HomeTestimonials;
