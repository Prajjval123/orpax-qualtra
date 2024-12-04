import React from "react";

const clients = [
  "/assets/clients/client1.jpg",
  "/assets/clients/client2.jpg",
  "/assets/clients/client3.jpg",
  "/assets/clients/client4.jpg",
  "/assets/clients/client5.jpg",
  "/assets/clients/client6.jpg",
  "/assets/clients/client7.jpg",
  "/assets/clients/client8.jpg",
  "/assets/clients/client9.jpg",
  "/assets/clients/client10.jpg",
  "/assets/clients/client11.jpg",
  "/assets/clients/client12.jpg",
  "/assets/clients/client13.jpg",
  "/assets/clients/client14.jpg",
  "/assets/clients/client15.jpg",
  "/assets/clients/client16.jpg",
  "/assets/clients/client17.jpg",
  "/assets/clients/client18.jpg",
  "/assets/clients/client19.jpg",
];

const Clients = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-12 mt-24">
      <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">
        Clients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 my-24">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={client}
              alt={`Client ${index}`}
              className="h-28 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
