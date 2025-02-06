import React from "react";

const PopupModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md relative max-w-sm w-full">
        {/* Cancel button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
        <p className="text-gray-700 mb-4">
          This popup appears on your first visit. You can fill out the form or close it.
        </p>
        {/* Example Form */}
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
