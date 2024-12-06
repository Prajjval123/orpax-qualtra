import React from "react";
import { clients } from "../constants/utils";

  const HomeClients = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center px-4 md:px-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-white">
          Clients
        </h1>
        <div className="relative flex items-center w-full my-24 overflow-hidden">
          {/* Sliding container */}
          <div className="flex w-[200%] sm:animate-slide space-x-4">
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
  
  export default HomeClients;
  
  
  