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
    <div className="w-full text-white pb-24 flex flex-col gap-6 items-center mt-24 px-12">
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center">
        Testimonials
      </h1>
      <div className="flex items-center gap-4">
        {/* Left Button */}
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-700 transition"
        >
          ←
        </button>
        {/* Testimonial Slider */}
        <div className="w-full backdrop-blur-lg max-w-4xl overflow-hidden relative rounded-xl border border-white shadow-lg">
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
                    {testimonial.description}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {testimonial.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Button */}
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-red-700 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default HomeTestimonials;
