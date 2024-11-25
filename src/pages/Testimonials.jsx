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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-white py-16 pt-0 px-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-12 animate-fade-in">
        Testimonials
      </h1>
      <div className="w-full max-w-4xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-4 py-8 sm:px-8 sm:py-12"
            >
              <div className="bg-gray-900 rounded-lg shadow-lg text-center p-12 w-1/3 ">
                <p className="text-lg sm:text-xl italic mb-6">{testimonial.description}</p>
                <h2 className="text-xl sm:text-2xl font-bold">{testimonial.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
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
