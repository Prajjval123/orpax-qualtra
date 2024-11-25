import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="bg-gray-900 shadow-lg w-full rounded-lg p-6 flex flex-col justify-center items-center h-full ">
      <h2 className="text-xl font-semibold text-gray-300 text-center mb-4">
        {testimonial.name}
      </h2>
      <p className="text-gray-400 text-center leading-relaxed">
        {testimonial.description}
      </p>
    </div>
  );
};

export default Testimonial;
