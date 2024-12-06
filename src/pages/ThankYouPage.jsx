import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-300 mb-6">
        Your message has been successfully submitted. We'll get back to you soon!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
