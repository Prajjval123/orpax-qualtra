import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. B. P. Thiagarajan Senior Manager, The Nielsen Company",
    description:
      "This is to certify that Mr. Arnab Paul and his team have developed a GIS-based application software tool for the project, namely, Mapping of all private Health Facilities in the district of Agra, which was sponsored by the Futures Group, New Delhi.",
  },
  {
    name: "Mr. Sandeep Ghosh Executive Director, IIMS Dataworks",
    description:
      "We are extremely satisfied with the Factfinder 1.0 software they have designed and developed for us and it is now being actively used by over 60 firms and organizations (comprising of the leading public and private sector banks, all the major mutual funds, all life insurance firms, financial market regulators, SROs and the Union Government) operating out of India.",
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white p-8 md:p-12 pb-0 px-6 flex flex-col gap-6 items-center">
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center text-white animate-fade-in">
        Testimonials
      </h1>
      <div className="w-full max-w-4xl overflow-hidden relative rounded-xl border border-white shadow-lg hover:shadow-xl transform transition duration-300">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col justify-center px-24 py-4 "
            >
              <div className="gap-8 rounded-lg shadow-lg text-center p-12 py-6 w-full ">
                <p className="text-lg sm:text-xl italic mb-6">{testimonial.description}</p>
                <h2 className="text-xl sm:text-2xl font-bold">{testimonial.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex
                ? "bg-red-500"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
