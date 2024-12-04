import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className=" text-white p-8 lg:p-24  mt-24">
      <h2 className="text-5xl text-center font-bold mb-12">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-3 bg-gray-800 rounded-md text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-3 bg-gray-800 rounded-md text-white"
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="p-3 bg-gray-800 rounded-md text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
