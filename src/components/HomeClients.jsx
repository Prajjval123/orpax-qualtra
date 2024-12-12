import React from "react";
import { clients } from "../constants/utils";

  const HomeClients = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center mt-12">
        <h1 className="text-5xl font-semibold text-center">
          Clients
        </h1>
        <div className="relative flex items-center w-full pt-20  overflow-hidden">
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
  
  
  