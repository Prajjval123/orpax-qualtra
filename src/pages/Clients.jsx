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
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-12 py-10">
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center text-white">
        Clients
      </h1>
      <div className="relative flex items-center w-full h-[28rem] overflow-hidden bg-gray-900">
        {/* Sliding container */}
        <div className="flex w-[200%] animate-slide space-x-4">
          {clients.concat(clients).map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client ${index}`}
              className="h-full w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
