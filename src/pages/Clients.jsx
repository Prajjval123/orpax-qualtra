import React from "react";
import { clients } from "../constants/utils";

const clientPoints = [
  [
    "Business Standard",
    "Sahara India Life Insurance Co. Ltd",
    "SBI Life Insurance company ltd",
    "Standard Chartered AMC",
    "Invest India Market Solution Private Limited",
    "Bharti AXA Life Insurance Company Ltd",
    "Canara Bank",
    "Citi Bank",
    "First Rand Bank Limited, South Africa",
    "HDFC AMC Limited",
    "HSBC Asset management Pvt Ltd",
  ],
  [
    "ICICI Bank Limited",
    "UTI AMC",
    "ICICI Prudential Life Insurance Co. Ltd.",
    "IDBI Fortis Life Insurance Company",
    "Indian School of Microfinance for women",
    "Investsmart Financial Services Ltd.",
    "Kotak Mahindra Bank Limited",
    "LIC Housing Finance Limited",
    "Life Insurance Council",
    "Met Life India Insurance Company Pvt. Ltd",
    "Motilal Oswal Securities Ltd",
  ],
  [
    "NSE Investor Protection Fund Trust",
    "Prudential Insurance Company of America",
    "Reliance Insurance Company",
    "Reserve Bank of India",
    "SBI Funds management private ltd.",
    "Shriram Life Insurance",
    "Standard Chartered Bank",
    "TATA AMC",
    "Western Union Services India Private Limited",
    "Tata Securities Ltd",
    "State Bank of India",
  ],
];

const Clients = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 md:px-12 my-24">
      <h1 className="text-5xl font-semibold text-center">
        Clients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full md:grid-cols-3 lg:grid-cols-4 px-4  gap-8 my-24">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={client}
              alt={`Client ${index}`}
              className=" w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-1 w-full lg:grid-cols-3 px-4 lg:flex-row gap-8">
        {clientPoints.map((client, index) => (
          <div
            key={index}
            className="bg-gray-900 w-full flex flex-col  gap-4 p-4 rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {client.map((point, pointIndex) => (
              <div key={pointIndex}>
                <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                  <li className="flex gap-2">
                    <div>-</div> {point}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
