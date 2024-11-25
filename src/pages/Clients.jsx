import React, { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleTransitionEnd = () => {
    if (currentIndex === clients.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === clients.length ? 1 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center p-24 py-10 ">
      <h1 className="text-4xl font-semibold mb-10 text-center text-white animate-fade-in">
        Clients
      </h1>
      <div className="relative  rounded-lg flex justify-center items-center w-full sm:w-3/4 lg:w-full h-[28rem] overflow-hidden bg-gray-900">
        <div
          className={`flex  transition-transform duration-1000 ease-in-out`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {/* Duplicate first and last images for smooth looping */}
          <img src={clients[clients.length - 1]} alt="" className="m-2" />
          {clients.map((client, index) => (
            <img
              src={client}
              alt={`Client ${index}`}
              key={index}
              className="m-2"
            />
          ))}
          <img src={clients[0]} alt="" className="m-2" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
