import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  return (
    <div className="">
      <div className="container mx-auto py-16 p-8 lg:px-0 ">
        <h2 className="text-5xl md:text-5xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-lg text-center mb-12">
          Request a quote to get custom pricing. Please take a moment to fill in
          the form.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-2xl mx-auto lg:mx-0 bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg h-40"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-md font-medium text-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Head Office (INDIA)</h3>
              <p>Contact Person: <span className="text-gray-400">Mr. Arnab Paul</span></p>
              <p>Address: <span className="text-gray-400">97-A, (FFB) Indraprastha Estate Sector-30-33, <br /> Faridabad, Haryana-121003</span></p>
              <p>Phone: <span className="text-gray-400">+91 9810041039, +91-9319644022</span></p>
              <p>Email: <span className="text-gray-400">arnab.paul@orpaxqualtra.com</span></p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">CANADA</h3>
              <p>Contact Person: <span className="text-gray-400">Mr. Prasun Das</span></p>
              <p>Address: <span className="text-gray-400">11 Schooner Lane, Toronto, M1C5J3</span></p>
              <p>Phone: <span className="text-gray-400">+1 647-771-4348</span></p>
              <p>Email: <span className="text-gray-400 flex-wrap text-wrap">prasun.das@orpaxqualtra.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
