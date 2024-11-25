import React, { useState, useEffect } from "react";
import Testimonial from "../components/Testimonial";

const testimonials = [
  {
    name: "Dr. B. P. Thiagarajan Senior Manager, The Nielsen Company",
    description:
      "This is to certify that Mr. Arnab Paul and his team have developed a GIS-based application software tool for the project, namely, Mapping of all private Health Facilities in the district of Agra, which was sponsored by the Futures Group, New Delhi.",
  },
  {
    name: "Mr. Sandeep Ghosh Executive Director, IIMS Dataworks",
    description:
      "We are extremely satisfied with the Factfinder 1.0 software they have designed and developed for us and it is now being actively used by over 60 firms and organizations.",
  },
  {
    name: "Mr. John Doe CEO, XYZ Corporation",
    description:
      "Their team consistently exceeded our expectations with their professionalism and innovative solutions.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex-col justify-center items-center bg-black p-24 py-10">
      <h1 className="text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Testimonials
      </h1>
      <div className="sm:w-3/4 lg:w-full h-[28rem] flex mx-auto transition-transform duration-1000 ease-in-out overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
